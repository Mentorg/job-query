import { useState } from "react";
import AvatarUpload from "../../../../components/AvatarUpload";
import Label from "../../../../../shared/components/form/Label";
import TextField from "../../../../../shared/components/form/TextField";
import Select from "../../../../../shared/components/form/Select";
import Option from "../../../../../shared/components/form/Option";
import TextArea from "../../../../../shared/components/form/TextArea";
import Button from "../../../../../shared/components/ui/Button";
import { countries } from "../../../settings/data/locale/countries";
import { recruiterValidation as validation } from "../../validation/recruiterValidation";
import { User } from "../../../../../shared/types/user";
import { Company } from "../../../../../shared/types/company";
import { Recruiter } from "../../../../../shared/types/recruiter";

type RecruiterFormProps = {
  profile: User | null;
  recruiter: Recruiter | undefined;
  onHandleProfileUpdate: (updatedProfile: User | Recruiter | Company) => void;
  onHandleRecruiterUpdate: (updatedRecruiter: Recruiter) => void;
  onCloseModal: () => void;
};

type RecruiterErrors = {
  avatar: boolean | string;
  name: boolean | string;
  phone: boolean | string;
  linkedin_profile: boolean | string;
  country: boolean | string;
  city: boolean | string;
  expertise: boolean | string;
  description: boolean | string;
};

function RecruiterForm({
  profile,
  recruiter,
  onHandleProfileUpdate,
  onHandleRecruiterUpdate,
  onCloseModal,
}: RecruiterFormProps) {
  const [errors, setErrors] = useState<RecruiterErrors>({
    avatar: "",
    name: "",
    phone: "",
    linkedin_profile: "",
    country: "",
    city: "",
    expertise: "",
    description: "",
  });

  function handleProfileUpdate(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });
    onHandleProfileUpdate({ ...profile!, [name]: value } as User);
  }

  function handleRecruiterUpdate(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });
    onHandleRecruiterUpdate({ ...recruiter!, [name]: value } as Recruiter);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof RecruiterErrors],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success");
    }
    onCloseModal();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 md:w-auto lg:w-auto"
    >
      <div className="flex flex-col items-center gap-5">
        <img
          src={profile?.avatar}
          alt="User's avatar"
          className="h-[5rem] w-[5rem] rounded-full border-2 border-slate-100 p-1"
        />
        <AvatarUpload
          resource={profile}
          onResourceUpdate={(updatedProfile: User | Recruiter | Company) =>
            onHandleProfileUpdate(updatedProfile as User)
          }
        />
        <p className="text-sm">
          <span className="font-medium">Note</span>: Max file size is 1MB,
          Minimum dimension: 136 x 136 And Suitable files are .jpg, .png & svg
        </p>
      </div>
      <div className="flex">
        <div className="flex w-full flex-col gap-y-2">
          <Label htmlFor="name">Full Name</Label>
          <TextField
            name="name"
            type="text"
            value={profile?.name}
            onChange={handleProfileUpdate}
            errors={errors}
            hasError={!!errors.name}
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="flex w-full flex-col gap-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <TextField
            name="phone"
            type="text"
            value={profile?.phone}
            onChange={handleProfileUpdate}
            errors={errors}
            hasError={!!errors.phone}
          />
        </div>
        <div className="flex w-full flex-col gap-y-2">
          <Label htmlFor="linkedin_profile">LinkedIn Profile</Label>
          <TextField
            name="linkedin_profile"
            type="text"
            value={profile?.linkedin_profile}
            onChange={handleProfileUpdate}
            errors={errors}
            hasError={!!errors.linkedin_profile}
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="country">Country</Label>
          <Select
            name="country"
            value={profile?.country}
            onChange={handleProfileUpdate}
            errors={errors}
            hasError={!!errors.country}
          >
            {countries.map((country) => (
              <Option value={country.name} key={country.name}>
                {country.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="flex w-full flex-col gap-y-2">
          <Label htmlFor="city">City</Label>
          <TextField
            name="city"
            type="text"
            value={profile?.city}
            onChange={handleProfileUpdate}
            errors={errors}
            hasError={!!errors.city}
          />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="expertise">Expertise</Label>
          <TextArea
            name="expertise"
            value={recruiter?.expertise}
            onChange={handleRecruiterUpdate}
            errors={errors}
            hasError={!!errors.expertise}
          />
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="description">About Me</Label>
          <TextArea
            name="description"
            value={recruiter?.description}
            onChange={handleRecruiterUpdate}
            errors={errors}
            hasError={!!errors.description}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-primary px-6 py-2 text-white">
          Confirm
        </Button>
      </div>
    </form>
  );
}

export default RecruiterForm;
