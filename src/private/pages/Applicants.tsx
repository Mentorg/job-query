import EmploymentContainer from "../components/EmploymentContainer";
import ApplicantsTable from "../features/applicants/ApplicantsTable";
import ApplicantsGrid from "../features/applicants/ApplicantsGrid";
import ViewOptions from "../components/ViewOptions";
import { useFilters } from "../hooks/useFilters";

function Applicants() {
  const { gridView, sort, applicantFilter, handleOrder, handleGridView } =
    useFilters();

  return (
    <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
      <EmploymentContainer title="Applicants">
        {gridView && (
          <select
            value={sort}
            onChange={handleOrder}
            className={`rounded-md border-2 px-5 py-2`}
          >
            {Object.entries(applicantFilter).map(([key, value]) => (
              <option value={key} key={key}>
                {value}
              </option>
            ))}
          </select>
        )}
        <ViewOptions onClick={handleGridView} gridView={gridView} />
      </EmploymentContainer>
      {gridView ? (
        <ApplicantsGrid sort={sort} />
      ) : (
        <div className="w-[90dvw] lg:w-[65dvw] xl:w-[70dvw]">
          <ApplicantsTable />
        </div>
      )}
    </div>
  );
}

export default Applicants;
