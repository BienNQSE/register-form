import React from "react";
import { useController } from "react-hook-form";

const InputRHF = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="w-full p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-5000"
      {...field}
      {...props}
    ></input>
  );
};

export default InputRHF;
