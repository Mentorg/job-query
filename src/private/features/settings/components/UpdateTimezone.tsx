import { useState } from "react";
import Label from "../../../../shared/components/form/Label";
import Select from "../../../../shared/components/form/Select";
import Option from "../../../../shared/components/form/Option";
import Button from "../../../../shared/components/ui/Button";
import { timezones } from "../data/locale/timezones";
import { User } from "../../../../shared/types/user";

type UpdateTimezoneProps = {
  resource: Partial<User> | null;
  onResourceUpdate: (update: Partial<User>) => void;
  onCloseModal: () => void;
};

type UpdateTimezoneError = {
  timezone: boolean | string;
};

function UpdateTimezone({
  resource,
  onResourceUpdate,
  onCloseModal,
}: UpdateTimezoneProps) {
  const [timezone, setTimezone] = useState(resource?.timezone || "");
  const [errors, setErrors] = useState<UpdateTimezoneError>({ timezone: "" });

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setTimezone(value);

    const error = !value && "Please select an option.";
    setErrors({ ...errors, [name]: error });
    onResourceUpdate({ timezone: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof UpdateTimezoneError],
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
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="timezone">Time Zone</Label>
        <Select
          name="timezone"
          value={timezone}
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
      <Button className="mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70">
        Submit
      </Button>
    </form>
  );
}

export default UpdateTimezone;
