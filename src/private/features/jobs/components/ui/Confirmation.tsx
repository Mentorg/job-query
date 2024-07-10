import { useContext } from "react";
import { JobContext } from "../../../../context/JobContext";

function Confirmation() {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { userCompany, newJob } = context;

  return (
    <>
      <h1 className="border-b-2 border-slate-300 py-4 text-lg font-medium xl:text-xl">
        Preview
      </h1>
      {newJob.position_title ? (
        <>
          <div className="flex items-center justify-between border-b-2 border-slate-300 py-8">
            <div>
              <h2 className="text-2xl font-semibold 2xl:text-3xl">
                {newJob.position_title}
              </h2>
              <p className="mt-2 font-medium text-slate-500">
                {userCompany?.name}
              </p>
              <p className="text-sm font-medium">
                {newJob.location} &#8226; {newJob.work_preference} &#8226;{" "}
                {newJob.employment_type}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4 gap-4 py-8 xs:grid-cols-2 xs:grid-rows-2 xl:flex">
            <div className="w-full rounded-md bg-slate-100 px-4 py-8">
              <h4 className="text-xl font-medium">Experience</h4>
              <p className="mt-2 text-xs font-medium text-slate-500 sm:text-base">
                Minimum {newJob.experience}
              </p>
            </div>
            <div className="w-full rounded-md bg-slate-100 px-4 py-8">
              <h4 className="text-xl font-medium">Job Seniority</h4>
              <p className="mt-2 text-xs font-medium text-slate-500 sm:text-base">
                {newJob.seniority} Level
              </p>
            </div>
            <div className="w-full rounded-md bg-slate-100 px-4 py-8">
              <h4 className="text-xl font-medium">Salary</h4>
              <p className="mt-2 text-xs font-medium text-slate-500 sm:text-base">
                {newJob.salary_from} - {newJob.salary_to}/
                {newJob.salary_frequency}
              </p>
            </div>
            <div className="w-full rounded-md bg-slate-100 px-4 py-8">
              <h4 className="text-xl font-medium">Education</h4>
              <p className="mt-2 text-xs font-medium text-slate-500 sm:text-base">
                Bachelor's degree
              </p>
            </div>
          </div>
          {newJob.position_overview && (
            <div className="py-4">
              <h3 className="py-2 text-xl font-semibold">Overview</h3>
              <p>{newJob.position_overview}</p>
            </div>
          )}
          {newJob.responsibilities && (
            <div className="py-4">
              <h3 className="py-2 text-xl font-semibold">Responsibilities</h3>
              <p>{newJob.responsibilities}</p>
            </div>
          )}
          {newJob.qualifications && (
            <div className="py-4">
              <h3 className="py-2 text-xl font-semibold">Qualifications</h3>
              <p>{newJob.qualifications}</p>
            </div>
          )}
          <div className="py-4">
            <h3 className="py-2 text-xl font-semibold">About Company</h3>
            <p>{userCompany?.description}</p>
          </div>
        </>
      ) : (
        <div className="my-8">
          <h2 className="font-semibold">
            Form has not been filled completely!
          </h2>
        </div>
      )}
    </>
  );
}

export default Confirmation;
