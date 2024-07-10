import { useContext } from "react";
import { JobContext } from "../../../../context/JobContext";
import Label from "../../../../../shared/components/form/Label";
import Select from "../../../../../shared/components/form/Select";
import Option from "../../../../../shared/components/form/Option";
import TextField from "../../../../../shared/components/form/TextField";

function BasicInformation() {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { newJob, handleChange, errors } = context;

  return (
    <>
      <h1 className="border-b-2 border-slate-300 py-4 text-2xl font-semibold xl:text-3xl">
        Basic Information
      </h1>
      <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="position_title">Job Title</Label>
          <TextField
            name="position_title"
            type="text"
            value={newJob.position_title}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.position_title}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="location">Location</Label>
          <Select
            name="location"
            value={newJob.location}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.location}
          >
            {["Berlin, DE", "London, UK", "Paris, FR", "Vienna, AU"].map(
              (location) => (
                <Option value={location} key={location}>
                  {location}
                </Option>
              ),
            )}
          </Select>
        </div>
      </div>
      <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="work_preference">Work Preference</Label>
          <Select
            name="work_preference"
            value={newJob.work_preference}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.work_preference}
          >
            {["Onsite", "Remote", "Hybrid"].map((work) => (
              <Option value={work} key={work}>
                {work}
              </Option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="employment_type">Employment Type</Label>
          <Select
            name="employment_type"
            value={newJob.employment_type}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.employment_type}
          >
            {["Full time", "Part time"].map((employment) => (
              <Option value={employment} key={employment}>
                {employment}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="seniority">Job Seniority</Label>
          <Select
            name="seniority"
            value={newJob.seniority}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.seniority}
          >
            {["Entry", "Mid level", "Senior"].map((seniority) => (
              <Option value={seniority} key={seniority}>
                {seniority}
              </Option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="experience">
            Minimum Qualification Level Required (YoE)
          </Label>
          <Select
            name="experience"
            value={newJob.experience}
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
      <div className="my-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="education">Education Level</Label>
          <Select
            name="education"
            value={newJob.education}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.education}
          >
            {["High school diploma", "Bachelor's", "Master's", "Ph.D"].map(
              (education) => (
                <Option value={education} key={education}>
                  {education}
                </Option>
              ),
            )}
          </Select>
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="requires_visa_sponsorship">
            Can you provide Visa Sponsorship for this role?
          </Label>
          <Select
            name="requires_visa_sponsorship"
            value={newJob.requires_visa_sponsorship}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.requires_visa_sponsorship}
          >
            {["No", "Yes"].map((requires_visa_sponsorship) => (
              <Option
                value={requires_visa_sponsorship}
                key={requires_visa_sponsorship}
              >
                {requires_visa_sponsorship}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="my-8 grid grid-cols-1 grid-rows-[1fr_auto_1fr_1fr] gap-4 xl:grid-cols-[1fr_auto_1fr_1fr] xl:grid-rows-1">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="salary_from">Salary From</Label>
          <TextField
            name="salary_from"
            type="number"
            value={newJob.salary_from}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.salary_from}
          />
        </div>
        <span className="mb-3 flex items-end font-medium">to</span>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="salary_to">Salary To</Label>
          <TextField
            name="salary_to"
            type="number"
            value={newJob.salary_to}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.salary_to}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="salary_frequency">Salary Frequency</Label>
          <Select
            name="salary_frequency"
            value={newJob.salary_frequency}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.salary_frequency}
          >
            {["Month", "Year"].map((salary_frequency) => (
              <Option value={salary_frequency} key={salary_frequency}>
                {salary_frequency}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
}

export default BasicInformation;
