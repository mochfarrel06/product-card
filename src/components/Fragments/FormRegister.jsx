import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

export default function FormRegister() {
  return (
    <form action="" className="flex flex-col gap-4">
      <InputForm
        name="fullname"
        type="text"
        placeholder="Your fullname"
        label="Full Name"
      />
      <InputForm
        name="email"
        type="email"
        placeholder="example@gmail.com"
        label="Email"
      />
      <InputForm
        name="password"
        type="password"
        placeholder="*****"
        label="Password"
      />
      <InputForm
        name="confirmPassword"
        type="password"
        placeholder="*****"
        label="Confirm Password"
      />
      <Button variant="bg-blue-600">Register</Button>
    </form>
  );
}
