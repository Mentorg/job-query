import { useState } from "react";
import { useAuth } from "../../public/hooks/useAuth";
import { applicant } from "../data/applicant";
import { User } from "../../shared/types/user";

export function useApplicant() {
  const { user } = useAuth();

  const userAbilities = applicant.find((record) => record.user_id === user?.id);

  const skills = userAbilities?.skills.split("; ");
  const languages = userAbilities?.languages.split("; ");

  const [profile, setProfile] = useState<User | null>(user);
  const [userSkills, setUserSkills] = useState<string[] | undefined>(skills);
  const [userLanguages, setUserLanguages] = useState<string[] | undefined>(
    languages,
  );

  function handleProfileUpdate(updatedProfile: Partial<User>) {
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...(updatedProfile as User),
    }));
  }

  const handleAddSkill = (skill: string) => {
    setUserSkills((prevSkills) => [...(prevSkills || []), skill]);
  };

  const handleAddLanguage = (language: string) => {
    setUserLanguages((prevLanguages) => [...(prevLanguages || []), language]);
  };

  const handleDeleteLanguage = (index: number) => {
    setUserLanguages((prevLanguages) => {
      const updateLanguages = [...(prevLanguages || [])];
      updateLanguages.splice(index, 1);
      return updateLanguages;
    });
  };

  const handleDeleteSkill = (index: number) => {
    setUserSkills((prevSkills) => {
      const updatedSkills = [...(prevSkills || [])];
      updatedSkills.splice(index, 1);
      return updatedSkills;
    });
  };

  return {
    profile,
    userSkills,
    userLanguages,
    handleProfileUpdate,
    handleAddSkill,
    handleDeleteSkill,
    handleAddLanguage,
    handleDeleteLanguage,
  };
}
