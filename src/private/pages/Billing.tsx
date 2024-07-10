import { useContext } from "react";
import { LuPenLine } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import InvoicesTable from "../features/settings/components/InvoicesTable";
import BillPaymentMethod from "../features/settings/components/BillPaymentMethod";
import Modal from "../context/Modal";
import Menus from "../context/Menus";
import UpdateEmail from "../components/UpdateEmail";
import ToggleSwitch from "../components/ToggleSwitch";
import { BillingContext } from "../context/BillingContext";

type AutoRenewData = {
  id: number;
  email: string;
  is_autorenew: boolean;
  user_id: number;
};

function Billing() {
  const {
    user,
    billing,
    userEmail,
    companySubscription,
    handleUpdateEmail,
    handleUpdateAutoRenew,
  } = useContext(BillingContext);

  return (
    <div className="mt-10 w-full xl:w-[75%]">
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <div className="flex flex-[1] flex-col">
          <h3 className="font-medium">Contact email</h3>
          <p className="mt-2 text-sm lg:mt-6">Where should invoices be sent?</p>
        </div>
        <div className="flex flex-[1] justify-center">
          <p>{userEmail}</p>
        </div>
        <div className="flex flex-[1] justify-end">
          <Modal>
            <Modal.Open opens="edit">
              <Menus.Button type="edit">
                Edit
                <span>
                  <LuPenLine />
                </span>
              </Menus.Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <UpdateEmail
                resource={user}
                onResourceUpdate={handleUpdateEmail}
                onCloseModal={close}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <BillPaymentMethod />
      </div>
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <div className="flex flex-[1] flex-col">
          <h3 className="font-medium">Current Plan</h3>
          <p className="mt-2 text-sm lg:mt-6">Upgrade your plans</p>
        </div>
        <div className="flex flex-[1] flex-col lg:items-center">
          <div key={companySubscription?.id}>
            <h4 className="text-lg">{companySubscription?.name}</h4>
            <p className="mt-4 text-3xl font-medium">
              {companySubscription?.price}/{" "}
              <span className="text-base">
                {companySubscription?.is_annual ? "year" : "month"}
              </span>
            </p>
            <p className="mt-2 text-xs">
              <span className="font-semibold">365</span> days remaining until
              next pay
            </p>
          </div>
        </div>
        <div className="flex flex-[1] justify-end gap-4">
          <NavLink
            to="/dashboard/subscription"
            className="flex items-center gap-4 rounded-md border-2 border-slate-300 px-6 py-2 text-left text-sm font-medium text-slate-500 transition-all duration-200 hover:bg-slate-300 hover:text-white"
          >
            Upgrade
            <span>
              <LuPenLine />
            </span>
          </NavLink>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-10 border-b border-slate-200 py-10 md:flex-row md:items-end md:justify-between xl:gap-20">
        <div className="flex flex-[1] flex-col">
          <h3 className="font-medium">Auto Renew</h3>
          <p className="mt-2 text-sm lg:mt-6">
            This option; if checked, will renew your subscription, when the
            current plan expires
          </p>
        </div>
        <div className="flex flex-[1] flex-col lg:items-center">
          <div className="flex flex-col lg:items-center">
            <p>
              Auto renew is currently{" "}
              <span className="font-semibold">
                {billing.find((record: AutoRenewData) => record.id === user?.id)
                  ?.is_autorenew
                  ? "actived"
                  : "deactivated"}
              </span>
            </p>
            <NavLink
              to="/dashboard/settings/notifications"
              className="text-xs text-blue-500"
            >
              Manage notifications about subscription auto renew
            </NavLink>
          </div>
        </div>
        <div className="flex flex-[1] justify-end gap-4">
          <ToggleSwitch
            isChecked={
              billing.find((record: AutoRenewData) => record.id === user?.id)
                ?.is_autorenew
            }
            onHandleChange={handleUpdateAutoRenew}
          />
        </div>
      </div>
      <div className="mt-10 w-[90dvw] lg:w-[65dvw] xl:w-[70dvw]">
        <InvoicesTable />
      </div>
    </div>
  );
}

export default Billing;
