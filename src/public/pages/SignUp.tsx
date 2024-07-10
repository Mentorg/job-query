import { NavLink } from "react-router-dom";
import AuthenticationContainer from "../components/AuthenticationContainer";
import Label from "../../shared/components/form/Label";
import TextField from "../../shared/components/form/TextField";
import Button from "../../shared/components/ui/Button";
import { useState } from "react";

type FormData = {
  full_name: string;
  email: string;
  password: string;
};

type FormError = {
  full_name: boolean | string;
  email: boolean | string;
  password: boolean | string;
};

export function SignUp() {
  const [form, setForm] = useState<FormData>({
    full_name: "",
    email: "",
    password: "",
  });
  const [errors] = useState<FormError>({ ...form });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit() {
    return;
  }

  return (
    <AuthenticationContainer>
      <form
        onSubmit={handleSubmit}
        className="m-auto flex w-[90dvw] flex-col rounded-md bg-white p-10 md:m-0 md:w-max"
      >
        <h1 className="py-4 text-xl font-medium lg:py-10 lg:text-3xl">
          Welcome to JobQuery <br />
          Join Us Today: Register Now!
        </h1>
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="full_name">Full Name</Label>
          <TextField
            name="full_name"
            type="text"
            value={form.full_name}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.full_name}
          />
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="email_address">Email Address</Label>
          <TextField
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.email}
          />
        </div>
        <div className="mt-4 flex flex-col gap-y-2">
          <Label htmlFor="password">Password</Label>
          <TextField
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            errors={errors}
            hasError={!!errors.password}
          />
        </div>
        <Button className="mt-4 rounded-md bg-primary px-4 py-2 text-white">
          Create Account
        </Button>
        <p className="mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="font-medium text-primary">
            Sign in now
          </NavLink>
        </p>
      </form>
    </AuthenticationContainer>
  );
}
