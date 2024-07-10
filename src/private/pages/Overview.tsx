import ApplicantsTable from "../features/applicants/ApplicantsTable";
import JobsTable from "../features/jobs/components/ui/JobsTable";
import Metric from "../components/Metric";
import ApplicantProvider from "../context/ApplicantContext";
import JobProvider from "../context/JobContext";
import SortAnalytics from "../features/analytics/components/SortAnalytics";
import AnalyticsContainer from "../features/analytics/components/AnalyticsContainer";
import useSelectPeriod from "../hooks/useSelectPeriod";

function Overview() {
  const { period, handleChange } = useSelectPeriod();

  return (
    <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold md:mt-4 2xl:text-3xl">
          Overview
        </h1>
        <SortAnalytics period={period} onHandleChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1">
        <Metric
          title="All Applicants"
          currentValue="180"
          previousValue="19"
          time="month"
        />
        <Metric
          title="Interviews"
          currentValue="18"
          previousValue="20"
          time="month"
        />
        <Metric
          title="Hired"
          currentValue="6"
          previousValue="22"
          time="month"
        />
        <Metric
          title="Open Positions"
          currentValue="12"
          previousValue="14"
          time="month"
        />
      </div>
      <AnalyticsContainer period={period} />
      <div className="grid grid-cols-1 grid-rows-2 gap-5 2xl:grid-cols-2 2xl:grid-rows-1">
        <ApplicantProvider>
          <div className="h-full w-full rounded-md bg-slate-100 p-6">
            <h2 className="mb-4 font-semibold">Applicants</h2>
            <ApplicantsTable />
          </div>
        </ApplicantProvider>
        <JobProvider>
          <div className="h-full w-full rounded-md bg-slate-100 p-6">
            <h2 className="mb-4 font-semibold">Vacancies</h2>
            <JobsTable />
          </div>
        </JobProvider>
      </div>
    </div>
  );
}

export default Overview;
