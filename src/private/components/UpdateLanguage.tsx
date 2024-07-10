import { useState } from "react";
import Label from "../../shared/components/form/Label";
import Select from "../../shared/components/form/Select";
import Option from "../../shared/components/form/Option";
import Button from "../../shared/components/ui/Button";
import { User } from "../../shared/types/user";

type UpdateLanguageProps = {
  resource: Partial<User> | null;
  onResourceUpdate: (update: Partial<User>) => void;
  onCloseModal: () => void;
};

type UpdateLanguageError = {
  language: boolean | string;
};

function UpdateLanguage({
  resource,
  onResourceUpdate,
  onCloseModal,
}: UpdateLanguageProps) {
  const [language, setLanguage] = useState(resource?.language || "");
  const [errors, setErrors] = useState<UpdateLanguageError>({ language: "" });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLanguage(value);

    const error = !value && "Please select an option";
    setErrors({ ...errors, [name]: error });
    onResourceUpdate({ language: value });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof UpdateLanguageError],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success", resource);
    }
    onCloseModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full flex-col gap-y-2">
        <Label htmlFor="language">Language</Label>
        <Select
          name="language"
          value={language}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.language}
        >
          {["English", "German", "French"].map((language) => (
            <Option value={language} key={language}>
              {language}
            </Option>
          ))}
        </Select>
      </div>
      <Button className="mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70">
        Submit
      </Button>
    </form>
  );
}

export default UpdateLanguage;
