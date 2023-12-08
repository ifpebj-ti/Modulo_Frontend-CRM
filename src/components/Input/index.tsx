import React from "react"

interface InputProps {
	type: "text" | "email" | "password"
	placeholder: string
	name?: string
	id?: string
	onChange?: any
}

export default function Input({
	type = "text",
	name,
	id,
	onChange,
	placeholder,
}: InputProps) {
	return (
		<div>
			<input
				type={type}
				name={name}
				id={id}
				onClick={onChange}
				className="rounded-lg border-gray-300 bg-gray-200 w-[350px] h-[60px] p-3 mt-2"
				placeholder={placeholder}
			/>
		</div>
	)
}
