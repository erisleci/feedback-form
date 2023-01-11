import { FieldInputWrapper } from "@components/FieldInputWrapper/FieldInputWrapper";
import { FieldInputProps } from "./types";

export const TextAreaInput = ({
  label,
  placeholder,
  register,
  name,
  error,
}: FieldInputProps) => (
  <FieldInputWrapper error={error} label={label}>
    <textarea
      placeholder={placeholder}
      id={label}
      {...register?.(name)}
      className="text-black py-2 px-3"
      rows={4}
      data-testid={name}
    />
  </FieldInputWrapper>
);
