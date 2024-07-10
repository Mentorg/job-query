import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";
import { useAuth } from "../../public/hooks/useAuth";
import { company } from "../features/profiles/data/company";
import { Job } from "../../shared/types/job";

export function useRecruiterJob(job: Job) {
  // Option 1:
  // const { updateStatus, handleDelete } = useContext(JobContext) as JobContextType;
  // Option 2:
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");
  const { updateStatus, handleDelete } = context;

  const navigate = useNavigate();
  const { user } = useAuth();
  const jobAdCompany = company.find((record) => record.id === job.company_id);

  function handleMarkOpen() {
    updateStatus(job.id, "open");
  }

  function handleMarkFilled() {
    updateStatus(job.id, "filled");
  }

  function handleMarkExpired() {
    updateStatus(job.id, "expired");
  }

  function deleteJob(id: number) {
    handleDelete(id);
  }

  return {
    user,
    jobAdCompany,
    navigate,
    deleteJob,
    handleMarkOpen,
    handleMarkFilled,
    handleMarkExpired,
  };
}
