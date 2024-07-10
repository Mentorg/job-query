import { LuPenLine } from "react-icons/lu";
import { BiTrash } from "react-icons/bi";
import Menus from "../../../context/Menus";
import Modal from "../../../context/Modal";
import UpdatePassword from "../../../components/UpdatePassword";
import UpdateLanguage from "../../../components/UpdateLanguage";
import UpdateSecurityQuestion from "./UpdateSecurityQuestion";
import ConfirmDelete from "../../../components/ConfirmDelete";
import ToggleSwitch from "../../../components/ToggleSwitch";
import { useAccount } from "../../../hooks/useAccount";

function ApplicantSettings() {
  const {
    account,
    handleUpdatePassword,
    handleUpdateLanguage,
    handleUpdateMFA,
    handleUpdateSecurityQuestion,
    handleDeleteAccount,
  } = useAccount();

  return (
    <div className="mt-10 w-full xl:w-[75%]">
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <div className="flex flex-[1] flex-col">
          <h3 className="font-medium">Password</h3>
          <p className="mt-2 text-sm lg:mt-6">
            Set a unique password to protect your account
          </p>
        </div>
        <div className="flex flex-[1] justify-end">
          <Modal>
            <Modal.Open opens="edit">
              <Menus.Button type="edit">
                Change Password
                <span className="ml-2">
                  <LuPenLine />
                </span>
              </Menus.Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <UpdatePassword
                resource={account}
                onResourceUpdate={handleUpdatePassword}
                onCloseModal={close}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <div className="flex flex-[1] flex-col">
          <h3 className="font-medium">Language</h3>
          <p className="mt-2 text-sm lg:mt-6">
            Set the preferred language for the app
          </p>
        </div>
        <div className="flex flex-[1] justify-center">
          <p>{account?.language}</p>
        </div>
        <div className="flex flex-[1] justify-end">
          <Modal>
            <Modal.Open opens="edit">
              <Menus.Button type="edit">
                Edit
                <span className="ml-2">
                  <LuPenLine />
                </span>
              </Menus.Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <UpdateLanguage
                resource={account}
                onResourceUpdate={handleUpdateLanguage}
                onCloseModal={close}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <div className="flex flex-[1] flex-col">
          <h3 className="font-medium">Two-factor authentication (2FA)</h3>
          <p className="mt-2 text-sm lg:mt-6">
            Enhance the security of your account with two-factor authentication.
            Enter your preferred method for receiving authentication codes.
          </p>
        </div>
        <div className="flex flex-[1] flex-col">
          <p>
            Currently two-factor authentication is {account?.mfa ? "" : "not"}{" "}
            implemented.
          </p>
          <p className="text-sm text-blue-600">
            You will receive a 6-digit verification code via email.
          </p>
        </div>
        <div className="flex flex-[1] justify-end gap-4">
          <ToggleSwitch
            isChecked={account?.mfa}
            onHandleChange={handleUpdateMFA}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <div className="flex flex-[1] flex-col">
          <h3 className="font-medium">Security question</h3>
          <p className="mt-6 text-sm">
            Create or update your security question to verify your identity.
          </p>
        </div>
        <div className="flex flex-[1] justify-center">
          {account?.security_question ? (
            <>
              <h4>{account?.security_question}</h4>
              <p>{account?.security_answer}</p>
            </>
          ) : (
            <p>There's no security question set.</p>
          )}
        </div>
        <div className="flex flex-[1] justify-end gap-4">
          <Modal>
            <Modal.Open opens="edit">
              <Menus.Button type="edit">
                Edit
                <span className="ml-2">
                  <LuPenLine />
                </span>
              </Menus.Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <UpdateSecurityQuestion
                resource={account}
                onResourceUpdate={handleUpdateSecurityQuestion}
                onCloseModal={close}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <div className="flex flex-[1] flex-col">
          <h3 className="font-medium">Delete account</h3>
          <p className="mt-2 text-sm lg:mt-6">
            Delete your account and all associated information permanently.
          </p>
        </div>
        <div className="flex flex-[1] justify-end gap-4">
          <Modal>
            <Modal.Open opens="delete">
              <Menus.Button type="delete">
                Delete
                <span className="ml-2">
                  <BiTrash />
                </span>
              </Menus.Button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={account?.name}
                onConfirm={() => {
                  handleDeleteAccount();
                }}
                onCloseModal={close}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ApplicantSettings;
