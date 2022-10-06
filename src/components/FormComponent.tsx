import { Form } from "antd";

export interface FormContainerProps {
	initialValues: any;
	onSubmit: (formValues: any) => void;
	labelCol?: { span?: number; offset?: number };
	wrapperCol?: { span?: number; offset?: number };
	children?: any;
}

export default function FormContainer({
	initialValues,
	onSubmit,
	labelCol,
	wrapperCol,
	children,
}: FormContainerProps) {
	const handleSubmit = (value: any) => {
		onSubmit(value);
	};

	return (
		<Form
			labelCol={labelCol}
			wrapperCol={wrapperCol}
			autoComplete="off"
			initialValues={initialValues}
			onFinish={handleSubmit}
		>
			{children}
		</Form>
	);
}
