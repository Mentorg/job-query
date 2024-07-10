import { useContext } from "react";
import { ApplicantContext } from "../context/ApplicantContext";
import { user } from "../data/user";
import { job } from "../../shared/data/job";
import { Application } from "../../shared/types/application";

export function useRecruiterApplicant(applicant: Application) {
  const context = useContext(ApplicantContext);
  if (!context) throw new Error("ApplicantContext is not provided");

  const { applicationList } = context;
  const { updateStatus } = context;

  const users = user.find((record) => record.id === applicant.applicant_id);

  const currentApplicant = applicationList.find(
    (app) => app.id === applicant.id,
  );

  const userApplication = job.find(
    (record) => record.id === applicant.advertisement_id,
  );

  function handleMarkInterview() {
    if (currentApplicant) {
      updateStatus(currentApplicant.id, "interview");
    }
  }

  function handleMarkOnhold() {
    if (currentApplicant) {
      updateStatus(currentApplicant.id, "on-hold");
    }
  }

  function handleMarkShortlisted() {
    if (currentApplicant) {
      updateStatus(currentApplicant.id, "shortlisted");
    }
  }

  function handleMarkRejected() {
    if (currentApplicant) {
      updateStatus(currentApplicant.id, "rejected");
    }
  }

  return {
    updateStatus,
    currentApplicant,
    users,
    userApplication,
    handleMarkInterview,
    handleMarkOnhold,
    handleMarkShortlisted,
    handleMarkRejected,
  };
}
