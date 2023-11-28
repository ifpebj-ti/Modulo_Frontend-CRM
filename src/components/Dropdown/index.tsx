import { CaretDown } from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";

interface DropdownProps {
  name?: string;
  options?: string[];
}

const Dropdown = ({ name, options }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full">
      <button
        type="button"
        className="inline-flex items-center gap-1 px-2 py-2 border border-gray-300 text-xs font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition ease-in-out duration-150"
        data-dropdown-toggle="dropdown-menu"
        onClick={handleClick}
      >
        {name}
        <CaretDown size={16}/>
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
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 1
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 2
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Option 3
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
