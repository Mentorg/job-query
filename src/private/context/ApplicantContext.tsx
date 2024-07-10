import { createContext, useCallback, useMemo, useState } from "react";
import { applicant as applicantData } from "../data/applicant";
import { job as jobData } from "../../shared/data/job";
import { application } from "../data/application";
import { useAuth } from "../../public/hooks/useAuth";
import { ApplicantContextType } from "../types/applicantContext";
import { Applicant } from "../../shared/types/applicant";
import { Application } from "../../shared/types/application";

type ApplicantProviderProps = {
  children: React.ReactNode;
};

export const ApplicantContext = createContext<ApplicantContextType | null>(
  null,
);
const options: string[] = ["interview", "on-hold", "shortlisted", "rejected"];

function ApplicantProvider({ children }: ApplicantProviderProps) {
  const { user } = useAuth();

  const filteredAdvertisements = useMemo(
    () => jobData.filter((ad) => ad.recruiter_id === user?.id),
    [user?.id],
  );

  const applicants = useMemo(() => {
    const applicantsList: Applicant[] = [];

    filteredAdvertisements.forEach((advertisement) => {
      const applications = application.filter(
        (app) => app.advertisement_id === advertisement.id,
      );

      applications.forEach((app) => {
        const applicantObj = applicantData.find(
          (applicant) => applicant.id === app.applicant_id,
        );
        if (applicantObj) {
          applicantsList.push(applicantObj);
        }
      });
    });

    return applicantsList;
  }, [filteredAdvertisements]);

  const [applicantList, setApplicantList] = useState<Applicant[]>(applicants);
  const [applicationList, setApplicationList] =
    useState<Application[]>(application);

  const filteredApplications = useMemo(
    () =>
      applicationList.filter((app) =>
        applicantList.some(
          (applicant) => applicant.user_id === app.applicant_id,
        ),
      ),
    [applicantList, applicationList],
  );

  const updateStatus = useCallback(
    (id: number, newStatus: string) => {
      const updatedApplicationList = applicationList.map((applicationObj) =>
        applicationObj.id === id
          ? { ...applicationObj, status: newStatus }
          : applicationObj,
      );
      setApplicationList(updatedApplicationList);
    },
    [applicationList],
  );

  const handleUpdateNote = useCallback(
    (id: number, note: string) => {
      const updatedApplicantList = applicantList.map((applicant) =>
        applicant.id === id ? { ...applicant, note: note } : applicant,
      );
      setApplicantList(updatedApplicantList);
    },
    [applicantList],
  );

  return (
    <ApplicantContext.Provider
      value={{
        options,
        applicantList,
        applicationList,
        filteredApplications,
        filteredAdvertisements,
        updateStatus,
        handleUpdateNote,
      }}
    >
      {children}
    </ApplicantContext.Provider>
  );
}

export default ApplicantProvider;
