import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  onClick?: any;
}

export default function Button({ children, onClick, ...args }: ButtonProps) {
  return (
    <button
      {...args}
      className={`${args.className} rounded-lg bg-fc-color-300 w-[350px] h-[40px] text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
