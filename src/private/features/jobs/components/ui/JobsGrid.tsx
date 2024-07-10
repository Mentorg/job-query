import { useContext } from "react";
import JobCell from "./JobCell";
import Menus from "../../../../context/Menus";
import { JobContext } from "../../../../context/JobContext";

type JobsGridProps = {
  sort: string;
};

function JobsGrid({ sort }: JobsGridProps) {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { jobList } = context;

  const sortedJobs = [...jobList].sort((a, b) => {
    switch (sort) {
      case "date-desc":
        return b.created_at.localeCompare(a.created_at);
      case "date-asc":
        return a.created_at.localeCompare(b.created_at);
      case "title-asc":
        return a.position_title.localeCompare(b.position_title);
      case "title-desc":
        return b.position_title.localeCompare(a.position_title);
      case "location-asc":
        return a.location.localeCompare(b.location);
      case "location-desc":
        return b.location.localeCompare(a.location);
      case "status-filled":
        return a.status === "filled" ? -1 : b.status === "filled" ? 1 : 0;
      case "status-open":
        return a.status === "open" ? -1 : b.status === "open" ? 1 : 0;
      case "status-expired":
        return a.status === "expired" ? -1 : b.status === "expired" ? 1 : 0;
      default:
        return 0;
    }
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <Menus>
        {sortedJobs.map((job) => (
          <JobCell job={job} key={job.id} />
        ))}
      </Menus>
    </div>
  );
}

export default JobsGrid;
