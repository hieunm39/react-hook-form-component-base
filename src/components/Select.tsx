import { Control, useController } from "react-hook-form";
import { Form, Select } from "antd";

const { Option } = Select;

export interface InputFieldProps {
	name: string;
	control?: Control;
	label?: string;
	placeholder?: string;
	required?: boolean;
	message?: string;
	type?: string;
}

export default function SelectField({
	name,
	control,
	label,
	placeholder,
	required,
	message,
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
			<Select
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				ref={ref}
			>
				<Option value="male">male</Option>
				<Option value="female">female</Option>
				<Option value="other">other</Option>
			</Select>
		</Form.Item>
	);
}
