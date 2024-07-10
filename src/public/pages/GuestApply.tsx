import { useState } from "react";
import Navigation from "../components/Navigation";
import Label from "../../shared/components/form/Label";
import TextField from "../../shared/components/form/TextField";
import Select from "../../shared/components/form/Select";
import Option from "../../shared/components/form/Option";
import Button from "../../shared/components/ui/Button";
import { useHomePageJobAds } from "../hooks/useHomePageJobAds";
import { countries } from "../../private/features/settings/data/locale/countries";
import { timezones } from "../../private/features/settings/data/locale/timezones";
import { applicationValidation as validation } from "../data/validation/applicationValidation";
import { GuestApplyData, GuestApplyErrors } from "../types/guestApply";

function GuestApply() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState<GuestApplyData>({
    id: 0,
    name: "",
    birthday: "",
    email: "",
    phone: "",
    linkedin_profile: "",
    portfolio: "",
    country: "",
    city: "",
    timezone: "",
    address: "",
    education_level: "",
    experience: "",
    created_at: currentDate,
  });
  const [errors, setErrors] = useState<GuestApplyErrors>({
    ...form,
  });
  const { jobList } = useHomePageJobAds();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof GuestApplyErrors],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success");
    }
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto flex min-h-svh flex-col px-8 py-20 lg:p-16 xl:min-h-max xl:py-[6.75rem]">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-xl">
            You are applying for{" "}
            <span className="font-medium">{jobList?.position_title}</span>
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-slate-50 p-5 md:p-10 lg:p-16"
        >
          <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="name">Full Name</Label>
              <TextField
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.name}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="birthday">Date of Birth</Label>
              <TextField
                name="birthday"
                type="text"
                value={form.birthday}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.birthday}
              />
            </div>
          </div>
          <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="email">Email Address</Label>
              <TextField
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.email}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <TextField
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.phone}
              />
            </div>
          </div>
          <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="linkedin_profile">Linkedin Profile</Label>
              <TextField
                name="linkedin_profile"
                type="url"
                value={form.linkedin_profile}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.linkedin_profile}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="portfolio">Portfolio</Label>
              <TextField
                name="portfolio"
                type="url"
                value={form.portfolio}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.portfolio}
              />
            </div>
          </div>
          <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="country">Country</Label>
              <Select
                name="country"
                value={form.country}
                onChange={handleChange}
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
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="city">City</Label>
              <TextField
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.city}
              />
            </div>
          </div>
          <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="timezone">Time Zone</Label>
              <Select
                name="timezone"
                value={form.timezone}
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
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="address">Address</Label>
              <TextField
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.address}
              />
            </div>
          </div>
          <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="education_level">Education Level</Label>
              <Select
                name="education_level"
                value={form.education_level}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.education_level}
              >
                {["High school diploma", "Bachelor's", "Master's", "Ph.D"].map(
                  (education_level) => (
                    <Option value={education_level} key={education_level}>
                      {education_level}
                    </Option>
                  ),
                )}
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="experience">
                Minimum Qualification Level Required (YoE)
              </Label>
              <Select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                errors={errors}
                hasError={!!errors.experience}
              >
                {[
                  "1 Year of Experience",
                  "2 Years of Experience",
                  "3 Years of Experience",
                  "4 Years of Experience",
                  "+5 Years of Experience",
                ].map((experience) => (
                  <Option value={experience} key={experience}>
                    {experience}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="my-8 flex justify-center gap-4">
            <Button className="rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary/70">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default GuestApply;
