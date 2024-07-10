import { useContext } from "react";
import Label from "../../../../../shared/components/form/Label";
import TextField from "../../../../../shared/components/form/TextField";
import Option from "../../../../../shared/components/form/Option";
import Select from "../../../../../shared/components/form/Select";
import TextArea from "../../../../../shared/components/form/TextArea";
import Button from "../../../../../shared/components/ui/Button";
import { JobContext } from "../../../../context/JobContext";
import { Job } from "../../../../../shared/types/job";
import { JobErrors } from "../../../../types/jobContext";

type JobEditProps = {
  job: Job;
  onHandleUpdate: (id: number, updatedJob: Job) => void;
  onCloseModal: () => void;
};

function JobEdit({ job, onHandleUpdate, onCloseModal }: JobEditProps) {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { handleChangeUpdate, errors } = context;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    handleChangeUpdate(
      e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      job.id,
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onHandleUpdate(job.id, job);
    onCloseModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="border-b-2 border-slate-300 py-4 text-2xl font-medium">
        Basic Information
      </h2>
      <div className="my-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="position_title">Job Title</Label>
          <TextField
            name="position_title"
            type="text"
            value={job.position_title}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.position_title}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="location">Location</Label>
          <Select
            name="location"
            value={job.location}
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
      <div className="my-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="work_preference">Work Preference</Label>
          <Select
            name="work_preference"
            value={job.work_preference}
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
            value={job.employment_type}
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
      <div className="my-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="seniority">Job Seniority</Label>
          <Select
            name="seniority"
            value={job.seniority}
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
            value={job.experience}
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
      <div className="my-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="education">Education Level</Label>
          <Select
            name="education"
            value={job.education}
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
            value={job.requires_visa_sponsorship}
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
      <div className="my-8 grid grid-cols-1 grid-rows-[1fr_auto_1fr_1fr] gap-4 lg:grid-cols-[1fr_auto_1fr_1fr] lg:grid-rows-1">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="salary_from">Salary From</Label>
          <TextField
            name="salary_from"
            type="number"
            value={job.salary_from}
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
            value={job.salary_to}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.salary_to}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="salary_frequency">Salary Frequency</Label>
          <Select
            name="salary_frequency"
            value={job.salary_frequency}
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
      <div className="my-8">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="position_overview">Job Brief</Label>
          <TextArea
            name="position_overview"
            value={job.position_overview}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.position_overview}
          />
        </div>
      </div>
      <div className="my-8">
        <p className="text-xs font-medium text-slate-500">
          <span className="font-semibold">Important:</span> Add a semicolon (;)
          at the end of each responsibility.
        </p>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="responsibilities">Responsibilities</Label>
          <TextArea
            name="responsibilities"
            value={job.responsibilities}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.responsibilities}
          />
        </div>
      </div>
      <div className="my-8">
        <p className="text-xs font-medium text-slate-500">
          <span className="font-semibold">Important:</span> Add a semicolon (;)
          at the end of each qualification row.
        </p>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="qualifications">Responsibilities</Label>
          <TextArea
            name="qualifications"
            value={job.qualifications}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.qualifications}
          />
        </div>
      </div>
      <div className="my-8 flex gap-4">
        <Button
          hasError={Object.keys(errors).filter(
            (field) => errors[field as keyof JobErrors],
          )}
          className="rounded-md border border-primary bg-primary px-8 py-2 text-xs text-white md:text-base"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default JobEdit;
