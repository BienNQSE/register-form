import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownRHF = ({ control, setValue, name, data, labelDropdown }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(!show);
    setLabel(e.target.textContent);
  };
  const [label, setLabel] = useState(labelDropdown);
  useEffect(() => {
    if (dropdownValue === "") setLabel(labelDropdown);
  }, [dropdownValue]);
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span> {label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownRHF;
