import JobsTable from "../features/jobs/components/ui/JobsTable";
import JobsGrid from "../features/jobs/components/ui/JobsGrid";
import EmploymentContainer from "../components/EmploymentContainer";
import ViewOptions from "../components/ViewOptions";
import { useFilters } from "../hooks/useFilters";
import { useAuth } from "../../public/hooks/useAuth";

function Jobs() {
  const { gridView, sort, jobFilter, handleOrder, handleGridView } =
    useFilters();
  const { user } = useAuth();

  return (
    <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
      <EmploymentContainer
        title={user?.role === "recruiter" ? "Jobs" : "Applied"}
      >
        {gridView && (
          <select
            value={sort}
            onChange={handleOrder}
            className={`rounded-md border-2 px-5 py-2`}
          >
            {Object.entries(jobFilter).map(([key, value]) => (
              <option value={key} key={key}>
                {value}
              </option>
            ))}
          </select>
        )}
        <ViewOptions onClick={handleGridView} gridView={gridView} />
      </EmploymentContainer>
      {gridView ? (
        <JobsGrid sort={sort} />
      ) : (
        <div className="w-[90dvw] lg:w-[65dvw] xl:w-[70dvw]">
          <JobsTable />
        </div>
      )}
    </div>
  );
}

export default Jobs;
