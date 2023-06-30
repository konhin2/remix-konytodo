import { ITodoProps } from "~/types/dashboard"
import Checkbox from "./Checkbox"
import Icons from "./Icons"
import TextContent from "./TextContent"

const Wraper: React.FC<ITodoProps> = ({ completed, content }) => {
	return (
		<li className="px-6 py-4">
			<fieldset>
				<legend className="sr-only">Notifications</legend>
				<div className="space-y-5">
					<div className="relative flex items-center">
						<Checkbox completed={completed} />
						<TextContent completed={completed} content={content} />
						<Icons />
					</div>
				</div>
			</fieldset>
		</li>
	)
}
export default Wraper
