import { InputHTMLAttributes } from "react";

interface InputProps {
  icon?: React.ReactNode;
  name: string;
  errors: string[];
}

export default function Input({
  name,
  errors,
  icon,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  const hasErrors = errors.length > 0;
  return (
    <div className="flex flex-col space-y-3">
      <div
        className={`flex border items-center ${
          hasErrors
            ? "border-red-500 focus-within:outline-red-400"
            : "border-gray-300 focus-within:outline-gray-300"
        } rounded-full p-3 bg-gray-100 text-sm outline-none focus-within:outline-double focus-within:outline-2`}
      >
        {icon && <span className="text-gray-500">{icon}</span>}
        <input
          name={name}
          className="outline-none bg-transparent flex-grow pl-2"
          {...rest}
        ></input>
      </div>
      {errors.map((error, i) => (
        <span key={i} className="text-red-600 font-medium text-xs pl-1">
          {error}
        </span>
      ))}
    </div>
  );
}
