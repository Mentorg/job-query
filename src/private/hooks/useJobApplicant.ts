import { useContext } from "react";
import { ApplicantContext } from "../context/ApplicantContext";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { user } from "../data/user";
import { Application } from "../../shared/types/application";

export function useJobApplicant(applicant: Application) {
  const context = useContext(ApplicantContext);
  if (!context) throw new Error("ApplicantContext is not provided");

  const {
    applicantList,
    applicationList,
    filteredAdvertisements,
    updateStatus,
    options,
  } = context;
  const currentApplicant = applicationList.find(
    (app) => app.id === applicant.id,
  );

  const applicantJob = filteredAdvertisements.find(
    (record) => record.id === currentApplicant?.advertisement_id,
  );

  const applicantInfo = applicantList.find(
    (singleApplicant) => singleApplicant.id === applicant.id,
  );

  const applicantEducation = education.find(
    (record) => record.id === applicantInfo?.id,
  );

  const applicantExperience = experience.filter(
    (record) => record.applicant_id === applicantInfo?.id,
  );

  const skills = applicantInfo?.skills.split("; ");
  const languages = applicantInfo?.languages.split("; ");

  const userData = user.find((record) => record.id === applicantInfo?.user_id);

  function handleDownloadResume() {
    console.log("Success");
    return;
  }

  return {
    applicantJob,
    updateStatus,
    options,
    currentApplicant,
    applicantInfo,
    applicantEducation,
    applicantExperience,
    skills,
    languages,
    userData,
    handleDownloadResume,
  };
}
