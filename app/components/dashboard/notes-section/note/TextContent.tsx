const TextContent: React.FC = () => {
	return (
		<div className="ml-4 mr-3 text-sm leading-6">
			<label htmlFor="comments" className="font-medium text-gray-900">
				Comments
			</label>
			<p id="comments-description" className="text-gray-500 text-justify">
				Get notified when someones posts a comment on a posting.
			</p>
		</div>
	)
}
export default TextContent
