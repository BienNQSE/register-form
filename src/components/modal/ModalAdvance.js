import React from "react";
import ModalBase from "./ModalBase";

const ModalAdvance = ({ children, heading, ...props }) => {
  return (
    <ModalBase {...props}>
      <div className="relative z-10 w-full p-10 bg-white rounded-lg madal-content max-w-[482px]">
        <span
          className="text-red-500 font-bold absolute top-0 right-0 cursor-pointer w-10 h-10 flex items-center justify-center p-1 bg-white rounded-full -translate-y-2/4 translate-x-2/4"
          onClick={props.onClose}
        >
          X
        </span>
        <h2 className="text-black text-4xl font-bold mb-5">{heading}</h2>
        {children}
      </div>
    </ModalBase>
  );
};

export default ModalAdvance;
