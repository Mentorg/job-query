import { useState } from "react";
import { useAuth } from "../../public/hooks/useAuth";
import { education as educationData } from "../data/education";
import { Education } from "../../shared/types/education";

type UseEducationReturnType = {
  user: { id: number } | null;
  education: Education[];
  handleEducationUpdate: (updateEducation: Education) => void;
  handleUpdate: (updatedEducation: Education) => void;
  handleDelete: (id: number) => void;
};

export function useEducation(): UseEducationReturnType {
  const { user } = useAuth();

  const userEducation = educationData.filter(
    (record) => record.applicant_id === user?.id,
  );

  const [education, setEducation] = useState<Education[]>(userEducation);

  const handleUpdate = (updatedEducation: Education) => {
    setEducation((prevEducation) => {
      const updatedArray = prevEducation.map((record) =>
        record.id === updatedEducation.id ? updatedEducation : record,
      );
      return updatedArray;
    });
  };

  const handleDelete = (id: number) => {
    setEducation((prevData) => {
      const updatedEducation = prevData.filter((record) => record.id !== id);
      return updatedEducation;
    });
  };

  const handleEducationUpdate = (updateEducation: Education) => {
    setEducation((prevData) => [...prevData, updateEducation]);
  };

  return {
    user,
    education,
    handleEducationUpdate,
    handleUpdate,
    handleDelete,
  };
}
