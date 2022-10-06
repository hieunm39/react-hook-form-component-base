import { Control, useController } from "react-hook-form";
import { Input, Form } from "antd";

export interface InputFieldProps {
	name: string;
	control?: Control;
	label?: string;
	placeholder?: string;
	required?: boolean;
	message?: string;
	type?: string;
}

export default function InputField({
	name,
	control,
	label,
	placeholder,
	required,
	message,
	type,
}: InputFieldProps) {
	const {
		field: { value, onChange, onBlur, ref },
	} = useController({
		name,
		control,
	});

	return (
		<Form.Item
			label={label}
			name={name}
			rules={[{ required: required, message: message }]}
		>
			{name === "password" ? (
				<Input.Password
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					ref={ref}
				/>
			) : (
				<Input
					type={type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					ref={ref}
				/>
			)}
		</Form.Item>
	);
}
