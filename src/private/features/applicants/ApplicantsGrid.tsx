import { useContext } from "react";
import ApplicantCell from "./ApplicantCell";
import Menus from "../../context/Menus";
import { ApplicantContext } from "../../context/ApplicantContext";

type ApplicantsGridProps = {
  sort: string;
};

function ApplicantsGrid({ sort }: ApplicantsGridProps) {
  const context = useContext(ApplicantContext);
  if (!context) throw new Error("ApplicantContext is not provided");

  const { filteredApplications } = context;

  const sortedApplicants = [...filteredApplications].sort((a, b) => {
    switch (sort) {
      case "date-desc":
        return b.created_at.localeCompare(a.created_at);
      case "date-asc":
        return a.created_at.localeCompare(b.created_at);
      case "status-interview":
        return a.status === "interview" ? -1 : b.status === "interview" ? 1 : 0;
      case "status-on-hold":
        return a.status === "on-hold" ? -1 : b.status === "on-hold" ? 1 : 0;
      case "status-shortlisted":
        return a.status === "shortlisted"
          ? -1
          : b.status === "shortlisted"
            ? 1
            : 0;
      case "status-rejected":
        return a.status === "rejected" ? -1 : b.status === "rejected" ? 1 : 0;
      default:
        return 0;
    }
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <Menus>
        {sortedApplicants.map((applicant) => (
          <ApplicantCell applicant={applicant} key={applicant.id} />
        ))}
      </Menus>
    </div>
  );
}

export default ApplicantsGrid;
