import { FieldInputWrapper } from "@components/FieldInputWrapper/FieldInputWrapper";
import { FieldInputProps } from "./types";

export type RadioInputProps = FieldInputProps & {
  value: string;
};

export const RadioInput = ({
  label,
  placeholder,
  register,
  name,
  value,
}: RadioInputProps) => (
  <FieldInputWrapper label={label} className="items-center">
    <input
      placeholder={placeholder}
      id={label}
      {...register?.(name)}
      className="text-black py-2 px-3"
      type="radio"
      name={name}
      value={value}
      data-testid={label}
    />
  </FieldInputWrapper>
);
