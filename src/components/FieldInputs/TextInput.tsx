import { FieldInputWrapper } from "@components/FieldInputWrapper/FieldInputWrapper";
import { FieldInputProps } from "./types";

export const TextInput = ({
  label,
  placeholder,
  register,
  name,
  error,
}: FieldInputProps) => (
  <FieldInputWrapper error={error} label={label}>
    <input
      type="text"
      placeholder={placeholder}
      id={label}
      {...register?.(name)}
      className="text-black py-2 px-3"
      data-testid={name}
    />
  </FieldInputWrapper>
);
