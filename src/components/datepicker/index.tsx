"use client";
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

interface PickerProps extends React.HTMLAttributes<HTMLElement> {
  handleGetStartEndDate: (startDate: Date, endDate: Date) => void;
}

const Picker = ({ handleGetStartEndDate, ...args }: PickerProps) => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(11)),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    handleGetStartEndDate(
      newValue?.startDate as Date,
      newValue?.endDate as Date
    );
    setValue(newValue);
  };

  return (
    <Datepicker
      primaryColor={"green"}
      value={value}
      onChange={handleValueChange}
      showShortcuts={true}
      displayFormat={"DD/MM/YYYY"}
      inputClassName={`${args.className} w-full h-full focus:ring-fc-color-100 focus:border-fc-color-100 bg-fc-color-90 rounded-xl border border-solid border-fc-color-80 text-[12px] cursor-pointer max-sm:rounded-[5px] max-sm:text-[0.6rem]`}
      toggleClassName="absolute bg-fc-color-100 rounded-r-xl text-white right-0 h-full px-3 text-fc-color-100 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed max-sm:rounded-r-[5px]"
    />
  );
};

export default Picker;
