import { useState } from "react";
import { useAuth } from "../../public/hooks/useAuth";
import { job } from "../../shared/data/job";
import { recruiter } from "../data/recruiter";
import { user } from "../data/user";
import { User } from "../../shared/types/user";
import { Company } from "../../shared/types/company";
import { Recruiter } from "../../shared/types/recruiter";

function useRecruiter() {
  const { user: userData } = useAuth();

  const recruiterProfile = recruiter.find(
    (record) => record.user_id === userData?.id,
  );

  const [profile, setProfile] = useState<User | null>(userData);
  const [recruiterData, setRecruiterData] = useState<Recruiter | undefined>(
    recruiterProfile,
  );

  const team = recruiter.filter(
    (rec) => rec.company_id === recruiterProfile?.company_id,
  );

  const teamWithData = team.map((rec) => {
    const userInfo = user.find((u) => u.id === rec.user_id);
    return {
      ...rec,
      name: userInfo ? userInfo.name : "Unknown",
      avatar: userInfo ? userInfo.avatar : "Unknown",
    };
  });

  const recruiterAds = job.filter(
    (record) => record.recruiter_id === userData?.id,
  );

  function handleProfileUpdate(updatedProfile: User | Company | Recruiter) {
    setProfile(updatedProfile as User);
  }

  function handleRecruiterUpdate(updateRecruiter: Recruiter) {
    setRecruiterData(updateRecruiter);
  }

  return {
    profile,
    userData,
    recruiterData,
    recruiterAds,
    teamWithData,
    handleProfileUpdate,
    handleRecruiterUpdate,
  };
}

export { useRecruiter };
