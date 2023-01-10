import { useField } from "formik";
import React from "react";

const RadioFormik = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
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
        {meta.touched && meta.error ? (
          <div className="text-sm text-red-500">{meta.error}</div>
        ) : null}
      </label>
      <span>{props.label}</span>
    </div>
  );
};

export default RadioFormik;
