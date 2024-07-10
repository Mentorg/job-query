import { useState } from "react";
import Label from "../../../../shared/components/form/Label";
import Select from "../../../../shared/components/form/Select";
import Option from "../../../../shared/components/form/Option";
import TextField from "../../../../shared/components/form/TextField";
import Button from "../../../../shared/components/ui/Button";
import { User } from "../../../../shared/types/user";

type UpdateSecurityQuestionProps = {
  resource: User | null;
  onResourceUpdate: (update: Partial<User>) => void;
  onCloseModal: () => void;
};

type UpdateSecurityQuestionError = {
  security_question: boolean | string;
  security_answer: boolean | string;
};

function UpdateSecurityQuestion({
  resource,
  onResourceUpdate,
  onCloseModal,
}: UpdateSecurityQuestionProps) {
  const [errors, setErrors] = useState<UpdateSecurityQuestionError>({
    security_question: "",
    security_answer: "",
  });

  const validation = (
    name: keyof UpdateSecurityQuestionError,
    value: string,
  ): string | null => {
    if (name === "security_question" && !value) {
      return "Please select an option";
    }
    if (
      name === "security_answer" &&
      (!value || !/^[a-zA-Z\s]{4,}$/.test(value))
    ) {
      return "Please enter a security answer with a minimum of 4 characters";
    }
    return null;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const error = validation(name as keyof UpdateSecurityQuestionError, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    if (resource) {
      onResourceUpdate({
        ...resource,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof UpdateSecurityQuestionError],
    );
    if (errorFields.length === 0) {
      console.log("Success");
      onCloseModal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="security_question">Security question</Label>
        <Select
          name="security_question"
          value={resource?.security_question}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.security_question}
        >
          {[
            "What is the name of your first pet?",
            "What city were you born in?",
            "What is your favorite movie?",
            "What is the name of your high school?",
          ].map((question) => (
            <Option value={question} key={question}>
              {question}
            </Option>
          ))}
        </Select>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="security_answer">Your answer</Label>
        <TextField
          name="security_answer"
          type="text"
          value={resource?.security_answer}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.security_answer}
        />
      </div>
      <Button className="mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70">
        submit
      </Button>
    </form>
  );
}

export default UpdateSecurityQuestion;
