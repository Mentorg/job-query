import { useState } from "react";
import AvatarUpload from "../../../../components/AvatarUpload";
import Label from "../../../../../shared/components/form/Label";
import TextField from "../../../../../shared/components/form/TextField";
import Option from "../../../../../shared/components/form/Option";
import Select from "../../../../../shared/components/form/Select";
import Button from "../../../../../shared/components/ui/Button";
import { timezones } from "../../../settings/data/locale/timezones";
import { countries } from "../../../settings/data/locale/countries";
import { applicantValidation as validation } from "../../validation/applicantValidation";
import { User } from "../../../../../shared/types/user";

type ApplicantFormProps = {
  profile: User | null;
  onProfileUpdate: (updatedProfile: Partial<User>) => void;
  onCloseModal: () => void;
};

type ApplicantFormError = {
  name: boolean | string;
  email: boolean | string;
  timezone: boolean | string;
  phone: boolean | string;
  linkedin_profile: boolean | string;
  country: boolean | string;
  city: boolean | string;
};

function ApplicantForm({
  profile,
  onProfileUpdate,
  onCloseModal,
}: ApplicantFormProps) {
  const [errors, setErrors] = useState<ApplicantFormError>({
    name: "",
    email: "",
    timezone: "",
    phone: "",
    linkedin_profile: "",
    country: "",
    city: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });
    onProfileUpdate({ ...profile!, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof ApplicantFormError],
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
          src={profile?.avatar || ""}
          alt="User's avatar"
          className="h-[5rem] w-[5rem] rounded-full border-2 border-slate-100 p-1"
        />
        <h2 className="text-2xl font-semibold">{profile?.name}</h2>
        <AvatarUpload resource={profile} onResourceUpdate={onProfileUpdate} />
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
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.name}
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="flex w-full flex-col gap-y-2">
          <Label htmlFor="email">Email Address</Label>
          <TextField
            name="email"
            type="email"
            value={profile?.email}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.email}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="timezone">Time Zone</Label>
          <Select
            name="timezone"
            value={profile?.timezone}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.timezone}
          >
            {timezones.map((timezone) => (
              <Option value={timezone} key={timezone}>
                {timezone}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-x-4 md:grid md:grid-cols-2">
        <div className="flex w-full flex-col gap-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <TextField
            name="phone"
            type="text"
            value={profile?.phone}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.phone}
          />
        </div>
        <div className="flex w-full flex-col gap-y-2">
          <Label htmlFor="linkedin_profile">Phone Number</Label>
          <TextField
            name="linkedin_profile"
            type="text"
            value={profile?.linkedin_profile}
            onChange={handleChange}
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
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.country}
          >
            {countries.map((country) => (
              <Option value={country.name} key={country.id}>
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
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.city}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mt-4 w-fit rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/75">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ApplicantForm;
