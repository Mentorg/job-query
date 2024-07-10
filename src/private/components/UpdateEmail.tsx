import { useState } from "react";
import Button from "../../shared/components/ui/Button";
import Label from "../../shared/components/form/Label";
import TextField from "../../shared/components/form/TextField";
import { User } from "../../shared/types/user";

type UpdateEmailProps = {
  resource: Partial<User> | null;
  onResourceUpdate: (update: Partial<User>) => void;
  onCloseModal: () => void;
};

type UpdateEmailError = {
  email: boolean | string;
};

function UpdateEmail({
  resource,
  onResourceUpdate,
  onCloseModal,
}: UpdateEmailProps) {
  const [email, setEmail] = useState(resource?.email || "");
  const [errors, setErrors] = useState<UpdateEmailError>({ email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    const error =
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) &&
      "Please provide a valid email address";
    setErrors({ email: error });
    onResourceUpdate({ email: value });
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof UpdateEmailError],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success");
    }
    onCloseModal();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email">Email Address</Label>
          <TextField
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.email}
          />
        </div>
        <Button className="mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UpdateEmail;
