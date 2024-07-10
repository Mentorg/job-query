import { useParams } from "react-router-dom";
import StatusChip from "../components/StatusChip";
import { useApplicantJob } from "../hooks/useApplicantJob";

function SingleJobAd() {
  const { id } = useParams<{ id: string }>();
  const jobId = id ? parseInt(id, 10) : undefined;

  const { updateStatus, options, user, jobInfo, jobAdCompany } =
    useApplicantJob(jobId || 0);

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {jobInfo ? (
        <div className="flex w-full flex-col gap-y-10 px-6 py-4 md:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="flex flex-col gap-y-2 xs:flex-row">
              <div className="md:mt-4">
                <h1 className="text-2xl font-semibold 2xl:text-3xl">
                  {jobInfo?.position_title}
                </h1>
                <p className="font-medium text-slate-500">
                  {jobAdCompany?.name}
                </p>
                <p className="mt-2 text-sm font-medium">
                  {jobInfo?.location} &#8226; {jobInfo?.work_preference} &#8226;{" "}
                  {jobInfo?.employment_type}
                </p>
              </div>
              <div className="mt-4 xs:ml-5 sm:ml-10">
                <StatusChip>{jobInfo?.status}</StatusChip>
              </div>
            </div>
            <div className="mt-4 flex flex-col md:ml-4">
              {user?.role === "recruiter" && (
                <div className="flex flex-col gap-x-4 md:flex-row md:items-center md:gap-2">
                  <label>Mark as</label>
                  <select
                    value={jobInfo?.status}
                    onChange={(e) => updateStatus(jobInfo.id, e.target.value)}
                    className={`rounded-md border-2 px-5 py-2`}
                  >
                    {options.map((item: string) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4 gap-4 py-8 xs:grid-cols-2 xs:grid-rows-2 xl:flex">
            <div className="w-full rounded-md bg-slate-100 px-4 py-8">
              <h4 className="text-xl font-medium">Experience</h4>
              <p className="mt-2 font-medium text-slate-500">
                Minimum {jobInfo?.experience}
              </p>
            </div>
            <div className="w-full rounded-md bg-slate-100 px-4 py-8">
              <h4 className="text-xl font-medium">Job Seniority</h4>
              <p className="mt-2 font-medium text-slate-500">
                {jobInfo?.seniority} Level
              </p>
            </div>
            <div className="w-full rounded-md bg-slate-100 px-4 py-8">
              <h4 className="text-xl font-medium">Salary</h4>
              <p className="mt-2 font-medium text-slate-500">
                {jobInfo?.salary_from} - {jobInfo?.salary_to}/
                {jobInfo?.salary_frequency}
              </p>
            </div>
            <div className="w-full rounded-md bg-slate-100 px-4 py-8">
              <h4 className="text-xl font-medium">Education</h4>
              <p className="mt-2 font-medium text-slate-500">
                {jobInfo?.education} degree
              </p>
            </div>
          </div>
          {jobInfo?.position_overview && (
            <div className="py-2">
              <h3 className="text-xl font-semibold">Overview</h3>
              <p className="mt-2">{jobInfo?.position_overview}</p>
            </div>
          )}
          {jobInfo && jobInfo?.responsibilities.length > 0 && (
            <div className="py-2">
              <h3 className="text-xl font-semibold">Responsibilities</h3>
              <p className="mt-2">{jobInfo?.responsibilities}</p>
            </div>
          )}
          {jobInfo && jobInfo?.qualifications.length > 0 && (
            <div className="py-2">
              <h3 className="text-xl font-semibold">Qualifications</h3>
              <p className="mt-2">{jobInfo?.qualifications}</p>
            </div>
          )}
          <div className="py-2">
            <h3 className="text-xl font-semibold">About Company</h3>
            <p className="mt-2">{jobAdCompany?.description}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default SingleJobAd;
