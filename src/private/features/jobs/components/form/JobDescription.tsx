import { useContext } from "react";
import TextArea from "../../../../../shared/components/form/TextArea";
import Label from "../../../../../shared/components/form/Label";
import { JobContext } from "../../../../context/JobContext";

function JobDescription() {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { newJob, handleChange, errors } = context;

  return (
    <>
      <h1 className="border-b-2 border-slate-300 py-4 text-2xl font-semibold xl:text-3xl">
        Job Description
      </h1>
      <div className="my-8">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="position_overview">Job Brief</Label>
          <TextArea
            name="position_overview"
            value={newJob.position_overview}
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
            value={newJob.responsibilities}
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
          <Label htmlFor="qualifications">Qualifications</Label>
          <TextArea
            name="qualifications"
            value={newJob.qualifications}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.qualifications}
          />
        </div>
      </div>
    </>
  );
}

export default JobDescription;
