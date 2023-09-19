import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: any;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="rounded-lg bg-fc-color-300 w-[350px] h-[40px] text-white" onClick={onClick}>
      {children}
    </button>
  );
}
