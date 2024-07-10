import { useNavigate } from "react-router-dom";
import { HiEye } from "react-icons/hi2";
import { RiMessage2Line } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";
import { LuClipboardList, LuClipboardX } from "react-icons/lu";
import Table from "../../context/Table";
import Modal from "../../context/Modal";
import Menus from "../../context/Menus";
import StatusChip from "../../components/StatusChip";
import ApplicantDetails from "./ApplicantDetails";
import ApplicantNoteForm from "./ApplicantNoteForm";
import { useRecruiterApplicant } from "../../hooks/useRecruiterApplicant";
import { Application } from "../../../shared/types/application";

type ApplicantRowProps = {
  applicant: Application;
};

function ApplicantRow({ applicant }: ApplicantRowProps) {
  const {
    currentApplicant,
    users,
    userApplication,
    handleMarkInterview,
    handleMarkOnhold,
    handleMarkShortlisted,
    handleMarkRejected,
  } = useRecruiterApplicant(applicant);
  const navigate = useNavigate();

  return (
    <Table.Row>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {users?.id}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {users?.name}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {users?.email}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {userApplication?.position_title}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {users?.created_at}
        </p>
      </div>
      <div>
        <StatusChip>{currentApplicant?.status}</StatusChip>
      </div>
      {users?.id && (
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={users.id?.toString() || ""} />
            <Menus.List id={users.id.toString()}>
              <Modal.Open opens="read">
                <Menus.Button type="option">
                  <HiEye />
                  <span>See Details</span>
                </Menus.Button>
              </Modal.Open>
              <Menus.Button
                type="option"
                onClick={() => navigate("/dashboard/messages/newMessage")}
              >
                <RiMessage2Line />
                <span>Contact</span>
              </Menus.Button>
              <Menus.Button type="option" onClick={handleMarkInterview}>
                <LuClipboardList />
                <span>Mark as Interview</span>
              </Menus.Button>
              <Menus.Button type="option" onClick={handleMarkOnhold}>
                <LuClipboardX />
                <span>Mark as On Hold</span>
              </Menus.Button>
              <Menus.Button type="option" onClick={handleMarkShortlisted}>
                <LuClipboardList />
                <span>Mark as Shortlisted</span>
              </Menus.Button>
              <Menus.Button type="option" onClick={handleMarkRejected}>
                <LuClipboardX />
                <span>Mark as Rejected</span>
              </Menus.Button>
              <Modal.Open opens="addNote">
                <Menus.Button type="option">
                  <MdEditNote />
                  <span>Update Note</span>
                </Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="read">
              <ApplicantDetails applicant={applicant} />
            </Modal.Window>
            <Modal.Window name="addNote">
              <ApplicantNoteForm applicant={applicant} onCloseModal={close} />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      )}
    </Table.Row>
  );
}

export default ApplicantRow;
