import FormContainer from "./FormComponent";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./Select";
import { Form, Button } from "antd";

export default function PageContainer() {
	const handleFormSubmit = (formValues: any) => {
		console.log(formValues);
	};

	const initialValues = {};

	const { control, handleSubmit } = useForm<any>({
		defaultValues: initialValues,
	});

	return (
		<FormContainer
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 4 }}
			initialValues
			onSubmit={handleSubmit(handleFormSubmit)}
		>
			<InputField
				required={true}
				placeholder="UserName"
				name="username"
				label="Username"
				control={control}
			/>
			<InputField
				required={true}
				placeholder="Password"
				name="password"
				label="Password"
				control={control}
			/>

			<SelectField
				required={true}
				name="select"
				label="Select"
				control={control}
			/>

			<Form.Item wrapperCol={{ offset: 8 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</FormContainer>
	);
}
