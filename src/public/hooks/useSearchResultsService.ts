import { useMemo } from "react";
import { job as jobData } from "../../shared/data/job";
import { company } from "../../private/features/profiles/data/company";

export function useSearchResultsService(searchTitle: string) {
  const searchValue = useMemo(() => {
    const filteredJobs = jobData.filter((job) => {
      const { position_title, location, work_preference, company_id } = job;

      const associatedCompany = company.find((c) => c.id === company_id);
      const normalizedCompanyName = associatedCompany
        ? associatedCompany.name.toLowerCase()
        : "";

      const normalizedPositionTitle = position_title.toLowerCase();
      const normalizedLocation = location.toLowerCase();
      const normalizedWorkPreference = work_preference.toLowerCase();

      const normalizedSearch = searchTitle?.toLowerCase();

      return (
        normalizedPositionTitle.includes(normalizedSearch) ||
        normalizedLocation.includes(normalizedSearch) ||
        normalizedWorkPreference.includes(normalizedSearch) ||
        normalizedCompanyName.includes(normalizedSearch)
      );
    });

    return filteredJobs;
  }, [searchTitle]);

  return { searchValue };
}
