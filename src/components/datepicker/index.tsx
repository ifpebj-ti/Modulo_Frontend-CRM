"use client"
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const Picker = () => {
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(11)),
    });

    const handleValueChange = (newValue: DateValueType) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return <Datepicker
        primaryColor={"green"}
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
        displayFormat={"DD/MM/YYYY"}
        inputClassName="w-full h-[56px] focus:ring-fc-color-100 focus:border-fc-color-100 bg-fc-color-90 rounded-2xl border border-solid border-fc-color-80 px-2.5 text-[12px] cursor-pointer"
        toggleClassName="absolute bg-fc-color-100 rounded-r-2xl text-white right-0 h-full px-3 text-fc-color-100 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
    />;
};

export default Picker;