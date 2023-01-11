import { RadioInput, RadioInputProps } from "./RadioInput";
import { FieldInputProps } from "./types";

type RadioInputGroupProps = Omit<FieldInputProps, "placeholder"> & {
  options: Array<RadioInputProps>;
};

export const RadioInputGroup = ({
  options = [],
  name,
  label,
  register,
  error,
}: RadioInputGroupProps) => (
  <div className="flex gap-2 w-full flex-col">
    <span>{label}</span>
    <div className="flex w-full justify-between">
      {options.map((option) => (
        <RadioInput
          key={option.label}
          label={option.label}
          name={name}
          register={register}
          value={option.value}
        />
      ))}
    </div>
    {error && <span className="text-red-600 text-xs">{error}</span>}
  </div>
);
