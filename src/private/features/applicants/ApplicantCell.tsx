import { useNavigate } from "react-router-dom";
import { HiEye } from "react-icons/hi2";
import { RiMessage2Line } from "react-icons/ri";
import { LuClipboardList, LuClipboardX } from "react-icons/lu";
import { MdEditNote } from "react-icons/md";
import Modal from "../../context/Modal";
import Menus from "../../context/Menus";
import ApplicantDetails from "./ApplicantDetails";
import StatusChip from "../../components/StatusChip";
import ApplicantNoteForm from "./ApplicantNoteForm";
import { useRecruiterApplicant } from "../../hooks/useRecruiterApplicant";
import { Application } from "../../../shared/types/application";

type ApplicantCellProps = {
  applicant: Application;
};

function ApplicantCell({ applicant }: ApplicantCellProps) {
  const {
    users,
    currentApplicant,
    userApplication,
    handleMarkInterview,
    handleMarkOnhold,
    handleMarkShortlisted,
    handleMarkRejected,
  } = useRecruiterApplicant(applicant);
  const navigate = useNavigate();

  return (
    <div
      key={users?.id}
      className="flex rounded-md border-2 border-slate-100 p-4"
    >
      <div className="w-[90%]">
        <div className="flex">
          <img src={users?.avatar} alt={`${users?.name}'s avatar`} />
          <div className="ml-4 flex min-w-0 flex-col justify-center">
            <h2 className="text-lg font-semibold">{users?.name}</h2>
            <p className="truncate text-sm text-slate-500">{users?.email}</p>
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <h3 className="mr-4 flex flex-col text-sm font-medium text-slate-500">
            Applied for:
            <span className="line-clamp-1 text-base font-medium text-primary">
              {userApplication?.position_title}
            </span>
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="flex flex-row items-baseline text-sm">
            Date:
            <span className="ml-2 font-medium text-slate-500">
              {applicant.created_at}
            </span>
          </p>
          <StatusChip>{currentApplicant?.status}</StatusChip>
        </div>
      </div>
      <div className="w-[10%]">
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={applicant.id.toString()} />
            <Menus.List id={applicant.id.toString()}>
              <Modal.Open opens="view">
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
            <Modal.Window name="view">
              <ApplicantDetails applicant={applicant} />
            </Modal.Window>
            <Modal.Window name="addNote">
              <ApplicantNoteForm applicant={applicant} onCloseModal={close} />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </div>
  );
}

export default ApplicantCell;
