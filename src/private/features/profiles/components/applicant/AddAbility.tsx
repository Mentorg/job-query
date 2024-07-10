import { useState } from "react";
import Label from "../../../../../shared/components/form/Label";
import TextField from "../../../../../shared/components/form/TextField";
import Button from "../../../../../shared/components/ui/Button";

type AddAbilityProps = {
  resource: string[] | undefined;
  onResourceCreate: (skills: string) => void;
  onCloseModal: () => void;
};

type AddAbilityError = {
  skill: boolean | string;
};

function AddAbility({ onResourceCreate, onCloseModal }: AddAbilityProps) {
  const [newQualification, setNewQualification] = useState<string>("");
  const [errors, setErrors] = useState<AddAbilityError>({ skill: "" });

  function validation(name: string, value: string) {
    if (name === "skill" && (!value || !/^[a-zA-Z\s]{3,}$/.test(value))) {
      return "Please enter a security answer with a minimum of 3 characters";
    }
    return "";
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });
    setNewQualification(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newQualification.trim() === "") return;
    const updatedSkill = newQualification.trim();
    onResourceCreate(updatedSkill);
    setNewQualification("");
    onCloseModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="skill">Enter a skill</Label>
        <TextField
          name="skill"
          type="text"
          value={newQualification}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.skill}
        />
      </div>
      <Button className="mt-4 w-fit rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/75">
        Add skill
      </Button>
    </form>
  );
}

export default AddAbility;
