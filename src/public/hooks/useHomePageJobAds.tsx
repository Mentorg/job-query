import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./useAuth";
import { company } from "../../private/features/profiles/data/company";
import { job as jobData } from "../../shared/data/job";
import { Job } from "../../shared/types/job";
import { Company } from "../../shared/types/company";

interface UseHomePageJobAdsProps {
  job?: Job;
}

export function useHomePageJobAds({ job }: UseHomePageJobAdsProps = {}) {
  const { user } = useAuth();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [apply, setApply] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);

  const jobList = jobData.find((record) => record.slug === slug);
  const companyList: Company | undefined = job
    ? company.find((record) => record.id === job.company_id)
    : undefined;
  const companyData: Company | undefined = jobList
    ? company.find((record) => record.id === jobList.company_id)
    : undefined;
  const advertisementText: string = `${companyData?.name ?? "Unknown company"} is hiring a ${jobList?.position_title ?? "Unknown position"} in ${jobList?.location ?? "Unknown location"}`;

  function handleApply() {
    setApply(!apply);
    setBookmark(false);
  }

  function handleBookmark() {
    setBookmark(!bookmark);
  }

  return {
    user,
    slug,
    navigate,
    apply,
    bookmark,
    jobList,
    companyList,
    companyData,
    advertisementText,
    handleBookmark,
    handleApply,
  };
}
