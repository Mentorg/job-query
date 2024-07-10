import { Applicant } from "../../shared/types/applicant";
import { Application } from "../../shared/types/application";
import { Job } from "../../shared/types/job";

export interface ApplicantContextType {
  options: string[];
  applicantList: Applicant[];
  applicationList: Application[];
  filteredApplications: Application[];
  filteredAdvertisements: Job[];
  updateStatus: (id: number, newStatus: string) => void;
  handleUpdateNote: (id: number, newStatus: string) => void;
}
