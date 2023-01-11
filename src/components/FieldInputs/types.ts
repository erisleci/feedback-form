import { FieldValues } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";

export type FieldInputProps = {
  label: string;
  placeholder?: string;
  name: string;
  register?: UseFormRegister<FieldValues>;
  error?: string;
};
