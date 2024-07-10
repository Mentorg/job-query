import { Company } from "../../shared/types/company";
import { Job } from "../../shared/types/job";

type JobContextType = {
  errors: JobErrors;
  options: string[];
  jobList: Job[];
  newJob: Partial<Job>;
  userCompany: Company | undefined;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  handleUpdate: (id: number, updatedJob: Job) => void;
  handleChangeUpdate: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    jobId: number,
  ) => void;
  updateStatus: (id: number, newStatus: string) => void;
  handleDelete: (id: number) => void;
  handleSaveAsDraft: () => void;
  handleSubmit: () => void;
};

export type JobErrors = {
  position_title: boolean | string;
  location: boolean | string;
  employment_type: boolean | string;
  work_preference: boolean | string;
  seniority: boolean | string;
  experience: boolean | string;
  salary_from: boolean | string;
  salary_to: boolean | string;
  salary_frequency: boolean | string;
  deadline: boolean | string;
  education: boolean | string;
  requires_visa_sponsorship: boolean | string;
  position_overview: boolean | string;
  responsibilities: boolean | string;
  qualifications: boolean | string;
};
