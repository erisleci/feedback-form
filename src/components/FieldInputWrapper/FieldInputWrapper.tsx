import { PropsWithChildren } from "react";

type FieldInputWrapperProps = PropsWithChildren & {
  label: string;
  error?: string;
  className?: string;
};

export const FieldInputWrapper = ({
  label,
  error,
  children,
  className,
}: FieldInputWrapperProps) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <label htmlFor={label}>{label}</label>
    {children}
    {error && <span className="text-red-600 text-xs">{error}</span>}
  </div>
);
