import { CaretDown } from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";

interface DropdownProps {
  name?: string;
  options?: string[];
  handleGetSelectedOption?: (option: any) => void;
}

const Dropdown = ({ name, options, handleGetSelectedOption }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      <button
        type="button"
        className=" w-fit inline-flex items-center gap-1 px-2 py-2 border border-gray-300 text-sm max-[1279px]:text-xs font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        data-dropdown-toggle="dropdown-menu"
        onClick={handleClick}
      >
        {selectedOption || name}
        <CaretDown size={16} />
      </button>
      <div
        id="dropdown-menu"
        className={`${
          !isDropdownOpen && "hidden"
        } z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-200 absolute`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-trigger"
      >
        {options?.map((option: any, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setSelectedOption(option);
                handleGetSelectedOption && handleGetSelectedOption(option);
                setIsDropdownOpen(false);
              }}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
