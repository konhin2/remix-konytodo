import { ICheckboxTodoProps } from "~/types/dashboard"

const Checkbox: React.FC<ICheckboxTodoProps> = ({ completed }) => {
	return (
		<div className="h-6 items-center flex">
			<input
				id="comments"
				aria-describedby="comments-description"
				name="comments"
				type="checkbox"
				className="h-4 w-4 rounded border-gray-300 text-konytool"
				checked={completed}
			/>
		</div>
	)
}
export default Checkbox
