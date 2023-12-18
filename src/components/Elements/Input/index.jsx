import React from "react";
import Label from "./Label";
import Input from "./Input";

export default function InputForm({name, placeholder, type, label}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} id={name} />
    </div>
  );
}
