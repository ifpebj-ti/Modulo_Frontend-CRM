import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-lg bg-fc-color-300 w-[350px] h-[40px] text-white">
      {children}
    </button>
  );
}
