import { useState } from "react";
import Label from "../../shared/components/form/Label";
import TextField from "../../shared/components/form/TextField";
import Button from "../../shared/components/ui/Button";
import { User } from "../../shared/types/user";

type UpdatePasswordProps = {
  resource: User | null;
  onResourceUpdate: (update: Partial<User>) => void;
  onCloseModal: () => void;
};

type UpdatePasswordData = {
  current_password: string;
  new_password: string;
  confirm_password: string;
};

type UpdatePasswordError = Partial<UpdatePasswordData> & {
  general?: string; // for any general validation errors
};

function UpdatePassword({
  resource,
  onResourceUpdate,
  onCloseModal,
}: UpdatePasswordProps) {
  const [passwordData, setPasswordData] = useState<UpdatePasswordData>({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState<UpdatePasswordError>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const error =
      name === "current_password"
        ? undefined // Reset current password error on change
        : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)
          ? "Please enter a stronger password."
          : undefined;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setPasswordData((prevPasswordData) => ({
      ...prevPasswordData,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (passwordData.current_password !== resource?.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        current_password: "Current password is incorrect",
      }));
      return;
    }
    if (passwordData.new_password !== passwordData.confirm_password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirm_password: "New password and confirm password do not match",
      }));
      return;
    }
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof UpdatePasswordError],
    );

    if (errorFields.length > 0) {
      return;
    }
    onResourceUpdate({ password: passwordData.new_password });
    onCloseModal();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row md:gap-x-10"
    >
      <div>
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="current_password">Current Password</Label>
          <TextField
            name="current_password"
            type="password"
            value={passwordData.current_password}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.current_password}
          />
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="new_password">New Password</Label>
          <TextField
            name="new_password"
            type="password"
            value={passwordData.new_password}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.new_password}
          />
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="confirm_password">Confirm New Password</Label>
          <TextField
            name="confirm_password"
            type="password"
            value={passwordData.confirm_password}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.confirm_password}
          />
        </div>
        <Button className="mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70">
          Submit
        </Button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-medium">Instructions</h2>
        <ul className="mt-2">
          <li className="list-inside list-disc text-sm">
            At least one uppercase letter
          </li>
          <li className="list-inside list-disc text-sm">
            At least one lowercase letter
          </li>
          <li className="list-inside list-disc text-sm">At least one digit</li>
          <li className="list-inside list-disc text-sm">
            Minimum length of 8 characters
          </li>
        </ul>
      </div>
    </form>
  );
}

export default UpdatePassword;
