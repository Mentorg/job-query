import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import Navigation from "../components/Navigation";
import JobContainer from "../components/JobContainer";
import Button from "../../shared/components/ui/Button";
import { useHomePageJobAds } from "../hooks/useHomePageJobAds";

function SingleJob() {
  const {
    user,
    slug,
    navigate,
    apply,
    jobList,
    bookmark,
    companyData,
    advertisementText,
    handleBookmark,
    handleApply,
  } = useHomePageJobAds();

  return (
    <>
      <Navigation />
      <section className="pt-[4.5rem]">
        <div className="container mx-auto flex h-4/5 flex-col items-center justify-between p-4 md:grid md:h-4/6 md:grid-cols-2 md:grid-rows-2 landscape:h-[85dvh] lg:landscape:h-4/5">
          <div className="order-first flex w-full flex-col items-center md:items-start">
            <h1 className="my-2 text-center text-3xl font-medium text-black sm:text-left sm:text-3xl lg:text-4xl">
              {jobList?.position_title}
            </h1>
            <h4 className="text-lg text-slate-500 lg:text-xl">
              {jobList?.salary_from} - {jobList?.salary_to} /{" "}
              <span className="text-base">{jobList?.salary_frequency}</span>
            </h4>
            <ul className="my-2 flex flex-wrap justify-center divide-x divide-gray-400 text-xs font-medium tracking-widest text-slate-900 md:justify-start md:text-sm">
              <li className="pr-2">{companyData?.name}</li>
              <li className="px-2">{jobList?.location}</li>
              <li className="px-2">{jobList?.employment_type}</li>
              <li className="px-2">{jobList?.work_preference}</li>
            </ul>
          </div>
          <div className="order-last flex justify-center gap-x-2 sm:justify-end md:order-2">
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
                    user === null
                      ? navigate(`/apply/${jobList?.slug}`)
                      : handleApply()
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
                  <span className="ml-1">{jobList?.applicants}</span>
                </p>
              </>
            )}
          </div>
          <div className="order-2 flex flex-wrap justify-center gap-x-4 gap-y-2 md:order-3 md:justify-start">
            <p className="w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm">
              {jobList?.seniority} Level
            </p>
            <p className="w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm">
              {jobList?.experience}
            </p>
            <p className="w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm">
              {jobList?.education} degree
            </p>
            {jobList?.requires_visa_sponsorship && (
              <p className="w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm">
                Visa sponsorship
              </p>
            )}
            <p className="w-max rounded-md bg-primary/70 px-4 py-1 text-xs text-white md:text-sm">
              Posted {jobList?.created_at}
            </p>
          </div>
          <div className="order-3 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-end md:order-4">
            <Link
              to="https://www.facebook.com/sharer/sharer.php"
              className="flex items-center rounded-md bg-primary/70 px-4 py-1 transition-all hover:bg-primary/65"
            >
              <FaFacebook className="text-white" />
              <span className="ml-2 text-xs text-white sm:ml-10 md:text-sm">
                Share
              </span>
            </Link>
            <Link
              to={`https://twitter.com/intent/tweet?text=${advertisementText}`}
              className="flex items-center rounded-md bg-primary/70 px-4 py-1 transition-all hover:bg-primary/65"
            >
              <FaTwitter className="text-white" />
              <span className="ml-2 text-xs text-white sm:ml-10 md:text-sm">
                Tweet
              </span>
            </Link>
            <Link
              to={`https://www.linkedin.com/sharing/share-offsite/?url=${slug}`}
              className="flex items-center rounded-md bg-primary/70 px-4 py-1 transition-all hover:bg-primary/65"
            >
              <FaLinkedin className="text-white" />
              <span className="ml-2 text-xs text-white sm:ml-10 md:text-sm">
                Share
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="h-full px-5 py-10">
        <JobContainer title="Overview" content={jobList?.position_overview} />
      </section>
      <section className="h-full bg-slate-100 px-5 py-10">
        <JobContainer
          title="Responsibilities"
          content={jobList?.responsibilities}
        />
      </section>
      <section className="h-full bg-slate-100 px-5 py-10">
        <JobContainer
          title="Qualifications"
          content={jobList?.qualifications}
        />
      </section>
      <section className="h-full px-5 py-10">
        <JobContainer
          title="About the company"
          content={companyData?.description}
        />
      </section>
    </>
  );
}

export default SingleJob;
