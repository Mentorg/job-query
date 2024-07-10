import { useContext } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Button from "../../../../../shared/components/ui/Button";
import { JobContext } from "../../../../context/JobContext";
import { JobErrors } from "../../../../types/jobContext";

type FormNavigationProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function FormNavigation({ step, setStep, onSubmit }: FormNavigationProps) {
  const context = useContext(JobContext);
  if (!context) throw new Error("JobContext is not provided");

  const { errors, handleSaveAsDraft } = context;

  let buttonContent = "";

  if (step === 1) buttonContent = "Continue";
  if (step === 2) buttonContent = "Next";
  if (step === 3) buttonContent = "Publish Now";

  const nextStep = () => step < 3 && setStep(step + 1);
  const previousStep = () => step > 1 && setStep(step - 1);

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        {step > 1 && (
          <Button
            onClick={previousStep}
            className="flex items-center text-lg font-medium text-slate-400"
          >
            <span className="mr-2">
              <MdOutlineArrowBackIos className="h-[15px] w-[15px]" />
            </span>
            Previous
          </Button>
        )}
      </div>
      <div className="flex items-center gap-x-5">
        <p className="text-xs text-slate-400 sm:text-base">
          {step} out of 3 Steps
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          {step === 3 && (
            <Button
              onClick={handleSaveAsDraft}
              className="rounded-md border border-primary px-8 py-2 text-xs text-primary md:text-base"
            >
              Save as Draft
            </Button>
          )}
          <Button
            onClick={step < 3 ? nextStep : onSubmit}
            hasError={Object.keys(errors).filter(
              (field) => errors[field as keyof JobErrors],
            )}
            className="rounded-md border border-primary bg-primary px-8 py-2 text-xs text-white md:text-base"
          >
            {buttonContent}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FormNavigation;
