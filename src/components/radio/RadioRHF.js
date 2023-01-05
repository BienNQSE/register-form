import React from "react";
import { useController } from "react-hook-form";

const RadioRHF = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });
  return (
    <label className="w-5 h-5 cursor-pointer custom-radio">
      <input
        type="radio"
        name={props.name}
        {...field}
        {...props}
        className="hidden"
        value={props.values}
        checked={props.checked}
      />
      <div className="bg-white w-full h-full rounded-full"></div>
    </label>
  );
};

export default RadioRHF;
