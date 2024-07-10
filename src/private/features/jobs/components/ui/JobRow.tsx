import { useContext } from "react";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { LuClipboardList, LuClipboardX } from "react-icons/lu";
import Table from "../../../../context/Table";
import Modal from "../../../../context/Modal";
import Menus from "../../../../context/Menus";
import ConfirmDelete from "../../../../components/ConfirmDelete";
import JobEdit from "../form/JobEdit";
import StatusChip from "../../../../components/StatusChip";
import { useRecruiterJob } from "../../../../hooks/useRecruiterJob";
import { JobContext } from "../../../../context/JobContext";
import { Job } from "../../../../../shared/types/job";

type JobProps = {
  job: Job;
};

function JobRow({ job }: JobProps) {
  const {
    user,
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
    <Table.Row>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {job.id}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {job.position_title}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {job.employment_type}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {job.location}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {job.created_at}
        </p>
      </div>
      <div>
        <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-slate-600">
          {job.applicants}
        </p>
      </div>
      <div>
        <StatusChip>{job.status}</StatusChip>
      </div>
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
    </Table.Row>
  );
}

export default JobRow;
