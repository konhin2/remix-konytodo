import { Conditional } from "~/components/common"
import { ITextContentProps } from "~/types/dashboard"
const TextContent: React.FC<ITextContentProps> = ({ content, completed }) => {
	return (
		<div className="w-full ml-4 mr-3 text-sm leading-6">
			<Conditional condition={completed}>
				<p
					id="comments-description"
					className="text-konytool text-justify line-through"
				>
					{content}
				</p>
			</Conditional>
			<Conditional condition={!completed}>
				<p
					id="comments-description"
					className="text-gray-500 text-justify"
				>
					{content}
				</p>
			</Conditional>
		</div>
	)
}
export default TextContent
