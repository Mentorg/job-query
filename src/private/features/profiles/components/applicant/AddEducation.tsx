import { useState } from "react";
import Label from "../../../../../shared/components/form/Label";
import TextField from "../../../../../shared/components/form/TextField";
import Button from "../../../../../shared/components/ui/Button";
import { useEducation } from "../../../../hooks/useEducation";
import { educationValidation as validation } from "../../validation/educationValidation";
import { Education } from "../../../../../shared/types/education";

type AddEducationProps = {
  education: Education[];
  onHandleEducationUpdate: (updateEducation: Education) => void;
  onCloseModal: () => void;
};

type AddEducationError = {
  department: boolean | string;
  degree: boolean | string;
  university: boolean | string;
  honors: boolean | string;
  gpa: boolean | string;
  date_start: boolean | string;
  date_end: boolean | string;
};

function AddEducation({
  education,
  onHandleEducationUpdate,
  onCloseModal,
}: AddEducationProps) {
  const { user } = useEducation();

  const [form, setForm] = useState<Education>({
    id: education.length > 0 ? education[education.length - 1].id + 1 : 0,
    department: "",
    degree: "",
    university: "",
    honors: "",
    gpa: "",
    date_start: "",
    date_end: "",
    applicant_id: user?.id,
  });
  const [errors, setErrors] = useState<AddEducationError>({
    department: "",
    degree: "",
    university: "",
    honors: "",
    gpa: "",
    date_start: "",
    date_end: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validation(name as keyof Education, value);
    setErrors({ ...errors, [name]: error });
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof AddEducationError],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success");
    }
    onHandleEducationUpdate(form);
    onCloseModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 md:w-auto lg:w-auto"
    >
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="department">Department</Label>
        <TextField
          name="department"
          type="text"
          value={form.department}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.department}
        />
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="degree">Degree</Label>
          <TextField
            name="degree"
            type="text"
            value={form.degree}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.degree}
          />
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="university">University</Label>
          <TextField
            name="university"
            type="text"
            value={form.university}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.university}
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="honors">Honors</Label>
          <TextField
            name="honors"
            type="text"
            value={form.honors}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.honors}
          />
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="gpa">GPA</Label>
          <TextField
            name="gpa"
            type="text"
            value={form.gpa}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.gpa}
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="mt-4 flex flex-col gap-y-2">
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
        <div className="mt-4 flex flex-col gap-y-2">
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

export default AddEducation;
