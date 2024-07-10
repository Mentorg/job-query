import { useContext, useState } from "react";
import BasicInformation from "../features/jobs/components/form/BasicInformation";
import FormNavigation from "../features/jobs/components/ui/FormNavigation";
import JobDescription from "../features/jobs/components/form/JobDescription";
import Confirmation from "../features/jobs/components/ui/Confirmation";
import { JobContext } from "../context/JobContext";

function JobAdForm() {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { handleSubmit } = context;
  const [step, setStep] = useState(1);

  function renderForm() {
    switch (step) {
      case 1:
        return <BasicInformation />;
      case 2:
        return <JobDescription />;
      case 3:
        return <Confirmation />;
    }
  }

  return (
    <div className="flex w-full flex-col px-6 py-4 md:px-14">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-full 2xl:w-[80dvw]"
      >
        {renderForm()}
      </form>
      <FormNavigation
        step={step}
        setStep={setStep}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </div>
  );
}

export default JobAdForm;
