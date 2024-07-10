import { useMemo, useState } from "react";
import { useAuth } from "../../public/hooks/useAuth";
import { company } from "../features/profiles/data/company";
import { recruiter } from "../data/recruiter";
import { location } from "../features/profiles/data/location";
import { company_location } from "../features/profiles/data/company_location";
import { User } from "../../shared/types/user";
import { Company } from "../../shared/types/company";
import { Location } from "../../shared/types/location";
import { Recruiter } from "../../shared/types/recruiter";

function useCompany() {
  const { user } = useAuth();

  const recruiterId = useMemo(
    () => recruiter.find((record) => record.user_id === user?.id),
    [user?.id],
  );

  const companyData = useMemo(
    () => company.find((record) => record.id === recruiterId?.company_id),
    [recruiterId?.company_id],
  );

  const locationList = () => {
    const locationIDs = company_location
      .filter((record) => record.company_id === recruiterId?.company_id)
      .map((record) => record.location_id);
    // Filter out undefined values from location array
    const locations = locationIDs
      .map((location_id) =>
        location.find((location) => location.id === location_id),
      )
      .filter((location): location is Location => !!location);
    return locations;
  };

  const [profile, setProfile] = useState<Company | undefined>(companyData);
  const [companyLocations, setCompanyLocations] =
    useState<Location[]>(locationList);

  function handleProfileUpdate(updatedProfile: User | Recruiter | Company) {
    setProfile(updatedProfile as Company);
  }

  function handleLocationUpdate(updatedLocations: Location[]) {
    setCompanyLocations(updatedLocations);
    // Update company_location association (if needed)
    const updatedCompanyLocations = updatedLocations.map((location) => ({
      company_id: recruiterId?.company_id || 0,
      location_id: location.id,
    }));
    // Handle saving this association to backend
    console.log("Updated company_location:", updatedCompanyLocations);
  }

  return {
    profile,
    companyLocations,
    handleProfileUpdate,
    handleLocationUpdate,
  };
}

export { useCompany };
