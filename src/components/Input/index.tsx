import React from "react";

interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
}

export default function Input({ type = "text", placeholder }: InputProps) {
  return (
    <div>
      <input type={type} className="rounded-lg border-gray-300 bg-gray-200 w-[350px] h-[60px] p-3 mt-2" placeholder={placeholder}/>
    </div>
  );
}
