import { useState } from "react";
import { useAuth } from "../../public/hooks/useAuth";
import { experience as experienceData } from "../data/experience";
import { Experience } from "../../shared/types/experience";

type UseExperienceReturnType = {
  user: { id: number } | null;
  experience: Experience[];
  handleExperienceUpdate: (updateExperience: Experience) => void;
  handleUpdate: (updateExperience: Experience) => void;
  handleDelete: (id: number) => void;
};

export function useExperience(): UseExperienceReturnType {
  const { user } = useAuth();

  const userExperience = experienceData.filter(
    (record) => record.applicant_id === user?.id,
  );

  const [experience, setExperience] = useState<Experience[]>(userExperience);

  const handleUpdate = (updatedExperience: Experience) => {
    setExperience((prevExperience) => {
      const updatedArray = prevExperience.map((record) =>
        record.id === updatedExperience.id ? updatedExperience : record,
      );
      return updatedArray;
    });
  };

  const handleDelete = (id: number) => {
    setExperience((prevData) => {
      const updatedExperience = prevData.filter((record) => record.id !== id);
      return updatedExperience;
    });
  };

  const handleExperienceUpdate = (udpateExperience: Experience) => {
    setExperience((prevData) => [...prevData, udpateExperience]);
  };

  return {
    user,
    experience,
    handleExperienceUpdate,
    handleUpdate,
    handleDelete,
  };
}
