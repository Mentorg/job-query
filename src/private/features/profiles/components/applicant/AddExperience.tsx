import { useState } from "react";
import Label from "../../../../../shared/components/form/Label";
import TextField from "../../../../../shared/components/form/TextField";
import Button from "../../../../../shared/components/ui/Button";
import { useExperience } from "../../../../hooks/useExperience";
import { experienceValidation as validation } from "../../validation/experienceValidation";
import { Experience } from "../../../../../shared/types/experience";

type AddExperienceProps = {
  experience: Experience[];
  onHandleUpdateExperience: (updateExperience: Experience) => void;
  onCloseModal: () => void;
};

type AddExperienceError = {
  company: boolean | string;
  title: boolean | string;
  location: boolean | string;
  date_start: boolean | string;
  date_end: boolean | string;
};

function AddExperience({
  experience,
  onHandleUpdateExperience,
  onCloseModal,
}: AddExperienceProps) {
  const { user } = useExperience();

  const [form, setForm] = useState<Experience>({
    id: experience.length > 0 ? experience[experience.length - 1].id + 1 : 0,
    company: "",
    title: "",
    location: "",
    date_start: "",
    date_end: "",
    applicant_id: user?.id,
  });
  const [errors, setErrors] = useState<AddExperienceError>({
    company: "",
    title: "",
    location: "",
    date_start: "",
    date_end: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const error = validation(name as keyof Experience, value);
    setErrors({ ...errors, [name]: error });
    setForm((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof AddExperienceError],
    );
    if (errorFields.length > 0) {
      console.log(errorFields);
      return;
    } else {
      console.log("Success");
    }
    onHandleUpdateExperience(form);
    onCloseModal();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 md:w-auto lg:w-auto"
    >
      <div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="company">Company Name</Label>
          <TextField
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.company}
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="title">Position Title</Label>
          <TextField
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.title}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="location">Location</Label>
          <TextField
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.location}
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="date_start">From (D.M.Y)</Label>
          <TextField
            name="date_start"
            type="text"
            value={form.date_start}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.date_start}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="date_end">To (D.M.Y)</Label>
          <TextField
            name="date_end"
            type="text"
            value={form.date_end}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.date_end}
          />
        </div>
      </div>
      <Button className="mt-4 w-fit rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/75">
        Submit
      </Button>
    </form>
  );
}

export default AddExperience;
