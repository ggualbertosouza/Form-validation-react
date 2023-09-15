import { InputHTMLAttributes, forwardRef, useId } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ label = "", type = "", ...props }, ref) => {
    const inputId = useId();

    return (
      <div className="flex flex-col gap-1">
        <label className="italic text-sky-900" htmlFor={inputId}>
          {label}
        </label>
        <input
          id={inputId}
          type={type}
          ref={ref}
          {...props}
          className="p-2 rounded outline-none focus:shadow-lg shadow-stone-700 focus:border focus:border-sky-700 "
        />
      </div>
    );
  }
);
