const Checkbox: React.FC = () => {
	return (
		<div className="h-6 items-center">
			<input
				id="comments"
				aria-describedby="comments-description"
				name="comments"
				type="checkbox"
				className="h-4 w-4 rounded border-gray-300 text-konytool"
			/>
		</div>
	)
}
export default Checkbox
