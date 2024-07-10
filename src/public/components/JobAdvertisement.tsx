import { NavLink, useNavigate } from "react-router-dom";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaBookmark, FaLaptop, FaRegBookmark } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import Chip from "../../shared/components/ui/Chip";
import Button from "../../shared/components/ui/Button";
import { useHomePageJobAds } from "../hooks/useHomePageJobAds";
import { Job } from "../../shared/types/job";
import defaultLogo from "../../../public/logos/default-logo.svg";

interface JobProps {
  job: Job;
}

function JobAdvertisement({ job }: JobProps) {
  const { apply, bookmark, user, companyList, handleBookmark, handleApply } =
    useHomePageJobAds({ job });
  const navigate = useNavigate();
  const companyAvatar = companyList?.avatar || defaultLogo;

  return (
    <article
      className="my-4 flex flex-col items-center gap-y-4 space-x-4 rounded-xl bg-white px-3 py-7 sm:grid sm:grid-cols-3 sm:grid-rows-[1fr_auto] md:px-14 lg:grid-cols-5 lg:grid-rows-1 lg:p-5 xl:grid-cols-8 xl:gap-y-0 xl:py-7"
      key={job.id}
    >
      <div
        className="flex flex-col items-center sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-1 sm:flex-row lg:col-start-1 lg:col-end-4 xl:col-start-1 xl:col-end-4"
        id="company-title"
      >
        <div
          id="logo"
          className="flex basis-2/6 flex-col place-items-center justify-center"
        >
          <img
            src={`${companyAvatar}`}
            alt={`${companyList?.name}'s logo`}
            // loading="lazy"
            className="h-16 w-16 rounded-full sm:h-24 sm:w-24 lg:h-28 lg:w-28"
          />
          <h2 className="mt-2 text-center text-xs font-semibold">
            {companyList?.name}
          </h2>
        </div>
        <div
          id="job-position"
          className="flex basis-4/6 flex-col items-center sm:items-start md:ml-4"
        >
          <h3 className="mb-2 text-center text-xl font-semibold transition-all hover:text-primary sm:text-left xl:text-xl">
            <NavLink to={`/job/${job.slug}`}>{job.position_title}</NavLink>
          </h3>
          <div className="flex flex-wrap gap-4">
            <Chip
              className="flex w-fit items-center rounded-3xl bg-blue-500 px-3 py-1"
              icon={<FaLocationDot className="text-white" />}
            >
              {job.location}
            </Chip>
            <Chip
              className="flex w-fit items-center rounded-3xl bg-red-500 px-3 py-1"
              icon={<FaClock className="text-white" />}
            >
              {job.employment_type}
            </Chip>
            <Chip
              className="flex w-fit items-center rounded-3xl bg-green-500 px-3 py-1"
              icon={<FaLaptop className="text-white" />}
            >
              {job.work_preference}
            </Chip>
          </div>
        </div>
      </div>
      <div
        className="row-start-5 row-end-6 flex justify-center font-medium sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-2 lg:col-start-4 lg:col-end-4 lg:row-start-1 lg:h-full lg:items-baseline lg:pt-8 xl:col-start-4 xl:col-end-6 xl:row-start-1 xl:items-center xl:p-0"
        id="position-salary"
      >
        <h4>
          {job.salary_from} - {job.salary_to}
        </h4>
      </div>
      <div
        className="row-start-6 row-end-7 flex justify-center font-semibold text-slate-500 sm:col-start-2 sm:col-end-2 sm:row-start-2 sm:row-end-2 lg:col-start-4 lg:col-end-4 lg:row-start-1 lg:h-full lg:items-end lg:pb-8 xl:col-start-6 xl:col-end-7 xl:row-start-1 xl:items-center xl:p-0"
        id="post-time"
      >
        <h5>{job.created_at}</h5>
      </div>
      <div
        className="row-start-7 row-end-8 m-0 flex justify-center gap-x-2 sm:col-start-3 sm:col-end-3 sm:row-start-2 sm:row-end-2 lg:col-start-5 lg:col-end-6 lg:row-start-1 lg:justify-self-end xl:col-start-7 xl:col-end-9 xl:row-start-1"
        id="job-actions"
      >
        {user === null || user.role === "applicant" ? (
          <>
            {user !== null && !apply && (
              <Button
                onClick={handleBookmark}
                className={`${bookmark ? "bg-green-400 hover:bg-green-400/70" : "bg-primary hover:bg-primary/70"} rounded-md px-5 py-2 transition-all sm:py-2`}
              >
                {bookmark ? (
                  <FaBookmark className="text-white" />
                ) : (
                  <FaRegBookmark className="text-white" />
                )}
              </Button>
            )}
            <Button
              onClick={() =>
                user === null ? navigate(`/apply/${job.slug}`) : handleApply()
              }
              className={`${apply ? "bg-green-400 hover:bg-green-400/70" : "bg-primary hover:bg-primary/70"} rounded-md px-5 py-2 text-sm text-white transition-all sm:px-8 sm:py-2`}
            >
              {apply ? "Applied" : "Apply"}
            </Button>
          </>
        ) : (
          <>
            <p className="flex items-center text-base font-semibold leading-3">
              <HiMiniUserGroup className="h-[1rem] w-[1rem] text-primary" />
              <span className="ml-1">{job.applicants}</span>
            </p>
          </>
        )}
      </div>
    </article>
  );
}

export default JobAdvertisement;
