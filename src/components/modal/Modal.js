import React from "react";
import ReactDOM from "react-dom";
const Modal = ({ open = true, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative z-10 w-full p-10 bg-white rounded-lg madal-content max-w-[482px]">
        <span
          onClick={handleClose}
          className="text-red-500 font-bold absolute top-0 right-0 cursor-pointer w-10 h-10 flex items-center justify-center p-1 bg-white rounded-full -translate-y-2/4 translate-x-2/4"
        >
          X
        </span>
        <h2 className="text-black text-4xl font-bold mb-5">Welcome back!</h2>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email
          </label>
          <input
            type="email"
            className=" w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4 mb-5"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className=" w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4 mb-5"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg"
        >
          Sign in
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
