import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { job as jobData } from "../../shared/data/job";
import { company } from "../features/profiles/data/company";
import { recruiter } from "../data/recruiter";
import { application } from "../data/application";
import { deadline, currentMonth } from "../utils/dateFormat";
import { jobValidation as validation } from "../features/jobs/validation/jobValidation";
import { useAuth } from "../../public/hooks/useAuth";
import { JobContextType, JobErrors } from "../types/jobContext";
import { Job } from "../../shared/types/job";

type JobProviderProps = {
  children: React.ReactNode;
};

export const JobContext = createContext<JobContextType | undefined>(undefined);

const options: string[] = ["open", "filled", "expired"];

function JobProvider({ children }: JobProviderProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const applicantJobs: Job[] = [];
  const filterApplications = application.filter((record) => record.id === 0);

  filterApplications.forEach((application) => {
    const matchingJobs = jobData.filter(
      (record) => record.id === application.advertisement_id,
    );
    applicantJobs.push(...matchingJobs);
  });

  const recruiterJobs = jobData.filter(
    (record) => record.recruiter_id === user?.id,
  );

  const authUserJobs: Job[] =
    user?.role === "recruiter" ? recruiterJobs : applicantJobs;

  const recruiterObj = recruiter.find((record) => record.id === user?.id);
  const userCompany = company.find(
    (record) => record.id === recruiterObj?.company_id,
  );

  const initialState: Partial<Job> = {
    id: jobData[jobData.length - 1].id + 1,
    position_title: "",
    location: "",
    employment_type: "",
    work_preference: "",
    seniority: "",
    experience: "",
    salary_from: "",
    salary_to: "",
    salary_frequency: "",
    applicants: 0,
    status: "open",
    created_at: currentMonth,
    deadline: deadline,
    education: "",
    requires_visa_sponsorship: false,
    slug: "",
    position_overview: "",
    responsibilities: "",
    qualifications: "",
    recruiter_id: user?.id,
    company_id: recruiterObj?.company_id,
  };

  const [jobList, setJobList] = useState<Job[]>(authUserJobs);
  const [newJob, setNewJob] = useState<Partial<Job>>(initialState);
  const [errors, setErrors] = useState<JobErrors>({
    position_title: "",
    location: "",
    employment_type: "",
    work_preference: "",
    seniority: "",
    experience: "",
    salary_from: "",
    salary_to: "",
    salary_frequency: "",
    deadline: "",
    education: "",
    requires_visa_sponsorship: "",
    position_overview: "",
    responsibilities: "",
    qualifications: "",
  });

  const generateSlug = (title: string): string => {
    const cleanedTitle = title.toLowerCase().replace(/[^\w\s]/g, "");
    return cleanedTitle.replace(/\s+/g, "-");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });
    if (name === "position_title") {
      setNewJob((prevState) => ({
        ...prevState,
        [name]: value,
        slug: generateSlug(value),
      }));
    } else {
      setNewJob({ ...newJob, [name]: value });
    }
  };

  const handleUpdate = (id: number, updatedJob: Job) => {
    const updatedJobList = jobList.map((job) =>
      job.id === id ? updatedJob : job,
    );
    setJobList(updatedJobList);
  };

  const handleChangeUpdate = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    jobId: number,
  ) => {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });
    const updatedJobList = jobList.map((job) =>
      job.id === jobId ? { ...job, [name]: value } : job,
    );
    setJobList(updatedJobList);
  };

  const updateStatus = (id: number, newStatus: string) => {
    const updatedJobList = jobList.map((job) =>
      job.id === id ? { ...job, status: newStatus } : job,
    );
    setJobList(updatedJobList);
  };

  const handleDelete = (id: number) => {
    setJobList((prevJobList) =>
      prevJobList.filter((jobObj) => jobObj.id !== id),
    );
  };

  const handleSaveAsDraft = () => {
    return;
  };

  const handleSubmit = () => {
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof JobErrors],
    );
    if (errorFields.length > 0) return;
    const updatedJobList = [...jobList, newJob as Job];
    setJobList(updatedJobList);
    setNewJob({});
    navigate("/dashboard/jobs");
  };

  const contextValue: JobContextType = {
    errors,
    options,
    jobList,
    newJob,
    userCompany,
    handleChange,
    handleUpdate,
    handleChangeUpdate,
    updateStatus,
    handleDelete,
    handleSaveAsDraft,
    handleSubmit,
  };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
}

export default JobProvider;
