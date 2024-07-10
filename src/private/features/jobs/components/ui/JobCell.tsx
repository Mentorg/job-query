import { useContext } from "react";
import { HiEye, HiMiniUserGroup, HiPencil, HiTrash } from "react-icons/hi2";
import { LuClipboardList, LuClipboardX } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import Modal from "../../../../context/Modal";
import Menus from "../../../../context/Menus";
import ConfirmDelete from "../../../../components/ConfirmDelete";
import JobEdit from "../form/JobEdit";
import StatusChip from "../../../../components/StatusChip";
import Chip from "../../../../../shared/components/ui/Chip";
import { useRecruiterJob } from "../../../../hooks/useRecruiterJob";
import { JobContext } from "../../../../context/JobContext";
import { Job } from "../../../../../shared/types/job";

type JobProps = {
  job: Job;
};

function JobCell({ job }: JobProps) {
  const {
    user,
    jobAdCompany,
    navigate,
    deleteJob,
    handleMarkOpen,
    handleMarkFilled,
    handleMarkExpired,
  } = useRecruiterJob(job);

  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { handleUpdate } = context;

  return (
    <div key={job.id} className="flex rounded-md border-2 border-slate-100 p-4">
      <div className="flex w-[90%] flex-col gap-y-6">
        <div className="flex">
          <img
            src={jobAdCompany?.avatar}
            alt={`${jobAdCompany?.name}'s logo`}
            className="w-[3rem] rounded-full"
          />
          <div className="ml-4 flex flex-col justify-center">
            <h2 className="line-clamp-1 font-semibold">{job.position_title}</h2>
            <p className="line-clamp-1 text-xs font-medium text-slate-500 sm:text-sm">
              {jobAdCompany?.name}
            </p>
          </div>
        </div>
        <div>
          <p className="flex flex-row items-baseline text-sm">
            Posted:
            <span className="ml-2 font-medium text-slate-500">
              {job.created_at}
            </span>
          </p>
          <p className="flex flex-row items-baseline text-sm">
            Deadline:
            <span className="ml-2 font-medium text-red-500">
              {job.deadline}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <StatusChip>{job.status}</StatusChip>
          <Chip
            icon={<FaLocationDot className="text-white" />}
            className="flex h-fit items-center rounded-3xl bg-blue-500 px-3 py-1"
          >
            {job.location}
          </Chip>
          <p className="flex items-center text-base font-semibold leading-3">
            <HiMiniUserGroup className="h-[1rem] w-[1rem] text-primary" />
            <span className="ml-1">{job.applicants}</span>
          </p>
        </div>
      </div>
      <div className="w-[10%]">
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={job.id.toString()} />
            <Menus.List id={job.id.toString()}>
              <Menus.Button
                type="option"
                onClick={() =>
                  navigate(
                    `${user?.role === "recruiter" ? "/dashboard" : "/user"}/jobs/${job.id}`,
                  )
                }
              >
                <HiEye />
                <span>View Job</span>
              </Menus.Button>
              {user?.role === "recruiter" && (
                <>
                  <Menus.Button type="option" onClick={handleMarkOpen}>
                    <LuClipboardList />
                    <span>Mark as Open</span>
                  </Menus.Button>
                  <Menus.Button type="option" onClick={handleMarkFilled}>
                    <LuClipboardX />
                    <span>Mark as Filled</span>
                  </Menus.Button>
                  <Menus.Button type="option" onClick={handleMarkExpired}>
                    <LuClipboardList />
                    <span>Mark as Expired</span>
                  </Menus.Button>
                  <Modal.Open opens="edit">
                    <Menus.Button type="option">
                      <HiPencil />
                      <span>Edit</span>
                    </Menus.Button>
                  </Modal.Open>
                  <Modal.Open opens="delete">
                    <Menus.Button type="option">
                      <HiTrash />
                      <span>Delete</span>
                    </Menus.Button>
                  </Modal.Open>
                </>
              )}
            </Menus.List>
            <Modal.Window name="edit">
              <JobEdit
                job={job}
                onHandleUpdate={handleUpdate}
                onCloseModal={close}
              />
            </Modal.Window>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName={job.position_title}
                onConfirm={() => {
                  deleteJob(job.id);
                }}
                onCloseModal={close}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </div>
  );
}

export default JobCell;
