import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { useAuth } from "../../public/hooks/useAuth";
import { company } from "../features/profiles/data/company";
import { User } from "../../shared/types/user";
import { Job } from "../../shared/types/job";

interface Company {
  id: number;
  name: string;
  description: string;
}

interface UseApplicantJobResult {
  updateStatus: (id: number, status: string) => void;
  options: string[];
  user: User | null;
  jobInfo?: Job;
  jobAdCompany?: Company;
}

export function useApplicantJob(id: number): UseApplicantJobResult {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { jobList, updateStatus, options } = context;
  const { user } = useAuth();

  const parsedId = typeof id === "string" ? parseInt(id, 10) : id;

  const jobInfo = jobList.find((job: Job) => job.id === parsedId);

  let jobAdCompany: Company | undefined;
  if (jobInfo) {
    jobAdCompany = company.find((record) => record.id === jobInfo.company_id);
  }

  return {
    updateStatus,
    options,
    user,
    jobInfo,
    jobAdCompany,
  };
}
