import { useState } from "react";
import AvatarUpload from "../../../../components/AvatarUpload";
import Label from "../../../../../shared/components/form/Label";
import TextField from "../../../../../shared/components/form/TextField";
import TextArea from "../../../../../shared/components/form/TextArea";
import Button from "../../../../../shared/components/ui/Button";
import { companyValidation as validation } from "../../validation/companyValidation";
import { User } from "../../../../../shared/types/user";
import { Recruiter } from "../../../../../shared/types/recruiter";
import { Company } from "../../../../../shared/types/company";

type CompanyProps = {
  profile: Company | undefined | null;
  onHandleProfileUpdate: (updatedProfile: User | Recruiter | Company) => void;
  onCloseModal: () => void;
};

export interface CompanyErrors {
  avatar: boolean | string;
  name: boolean | string;
  slug: boolean | string;
  description: boolean | string;
  email: boolean | string;
  socials: boolean | string;
  website: boolean | string;
  phone: boolean | string;
}

function CompanyForm({
  profile,
  onHandleProfileUpdate,
  onCloseModal,
}: CompanyProps) {
  const [errors, setErrors] = useState<CompanyErrors>({
    avatar: "",
    name: "",
    slug: "",
    phone: "",
    email: "",
    socials: "",
    website: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });

    if (profile) {
      const updatedData: Company = {
        ...profile,
        [name]: value,
      };
      onHandleProfileUpdate(updatedData);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof CompanyErrors],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success");
    }
    console.log(errorFields);
    onCloseModal();
  }

  return (
    <div className="flex w-full flex-col gap-y-10">
      <div className="pt-4">
        <h1 className="text-2xl font-medium lg:text-3xl">Company Profile</h1>
      </div>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex justify-end">
          <Button className="rounded-md bg-primary px-6 py-2 text-white hover:bg-opacity-80">
            Submit
          </Button>
        </div>
        <div className="mt-5 flex flex-col gap-10 md:w-auto lg:w-fit">
          <div className="flex flex-col 2xl:grid 2xl:grid-cols-[1fr_4fr] 2xl:grid-rows-1">
            <div className="w-max">
              <h2 className="font-medium">Company Brand</h2>
            </div>
            <div className="mt-4 flex w-full flex-col">
              <div className="flex flex-col">
                <TextField
                  name="name"
                  type="text"
                  value={profile?.name}
                  onChange={handleChange}
                  errors={errors}
                  hasError={!!errors.name}
                />
              </div>
              <div className="mt-2 flex flex-col sm:flex-row">
                <p className="rounded-md border-2 border-slate-300 bg-slate-100 px-6 py-2 text-slate-400">
                  jobquery.com/company/
                </p>
                <TextField
                  name="slug"
                  type="text"
                  value={profile?.slug}
                  onChange={handleChange}
                  errors={errors}
                  hasError={!!errors.slug}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col 2xl:grid 2xl:grid-cols-[1fr_4fr] 2xl:grid-rows-1">
            <div className="w-max">
              <h2 className="font-medium">Company Logo</h2>
            </div>
            <div className="mt-4 flex flex-col gap-5 lg:items-center">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-10">
                <img
                  src={profile?.avatar}
                  alt="Company's logo"
                  className="rounded-full border-2 border-slate-100 p-1 sm:w-[10%]"
                />
                <AvatarUpload
                  resource={profile}
                  onResourceUpdate={(
                    updatedProfile: User | Recruiter | Company,
                  ) => onHandleProfileUpdate(updatedProfile as User)}
                />
              </div>
              <p className="text-sm">
                <span className="font-medium">Note</span>: Max file size is 1MB,
                Minimum dimension: 136 x 136 And Suitable files are .jpg, .png &
                svg
              </p>
            </div>
          </div>
          <div className="flex flex-col 2xl:grid 2xl:grid-cols-[1fr_4fr] 2xl:grid-rows-1">
            <div className="w-max">
              <h2 className="font-medium">Company Overview</h2>
            </div>
            <div className="mt-4 flex w-full flex-col">
              <div className="flex w-full flex-col">
                <TextArea
                  name="description"
                  value={profile?.description}
                  onChange={handleChange}
                  errors={errors}
                  hasError={!!errors.description}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col 2xl:grid 2xl:grid-cols-[1fr_4fr] 2xl:grid-rows-1">
            <div className="w-max">
              <h2 className="font-medium">Contact</h2>
            </div>
            <div className="mt-4 flex flex-col">
              <div className="mt-2 flex flex-col sm:flex-row">
                <TextField
                  name="email"
                  type="text"
                  value={profile?.email}
                  onChange={handleChange}
                  errors={errors}
                  hasError={!!errors.email}
                />
              </div>
              <div className="mt-2 flex flex-col rounded-md border-2 border-slate-300 sm:flex-row">
                <p className="border-r-2 border-r-slate-300 bg-slate-100 px-6 py-2 text-slate-400">
                  twitter.com/
                </p>
                <TextField
                  name="socials"
                  type="text"
                  value={profile?.socials}
                  onChange={handleChange}
                  errors={errors}
                  hasError={!!errors.socials}
                />
              </div>
              <div className="mt-2 flex flex-col rounded-md border-2 border-slate-300 sm:flex-row">
                <p className="border-r-2 border-r-slate-300 bg-slate-100 px-6 py-2 text-slate-400">
                  facebook.com/
                </p>
                <TextField
                  name="socials"
                  type="text"
                  value={profile?.socials}
                  onChange={handleChange}
                  errors={errors}
                  hasError={!!errors.socials}
                />
              </div>
              <div className="mt-2 flex flex-col rounded-md border-2 border-slate-300 sm:flex-row">
                <p className="border-r-2 border-r-slate-300 bg-slate-100 px-6 py-2 text-slate-400">
                  linkedin.com/company/
                </p>
                <TextField
                  name="socials"
                  type="text"
                  value={profile?.socials}
                  onChange={handleChange}
                  errors={errors}
                  hasError={!!errors.socials}
                />
              </div>
              <div className="mt-2 flex flex-col">
                <Label htmlFor="website">Website</Label>
                <div className="mt-4 flex flex-col rounded-md border-2 border-slate-300 sm:flex-row">
                  <p className="border-r-2 border-r-slate-300 bg-slate-100 px-6 py-2 text-slate-400">
                    https://
                  </p>
                  <TextField
                    name="website"
                    type="text"
                    value={profile?.website}
                    onChange={handleChange}
                    errors={errors}
                    hasError={!!errors.website}
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-col">
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CompanyForm;
