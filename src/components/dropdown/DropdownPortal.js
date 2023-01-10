import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import ReactDOM from "react-dom";
const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[400px] p-5" ref={nodeRef}>
      <div
        className="border p-5 border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="absolute border border-gray-200 rounded-lg top-full left-0 w-full bg-white"
      style={{
        left: coords.left,
        width: coords.width,
        right: coords.right,
        top: coords.top + coords.height + window.scrollY,
      }}
    >
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">ReactJS</div>
      <div className="p-5 cursor-pointer">VueJS</div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
