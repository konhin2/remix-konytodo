import { useLoaderData } from "@remix-run/react"
import { Conditional } from "~/components/common"
import { loader } from "~/routes/dashboard+/notes/_dashboard-notes"
import { ITodoProp } from "~/types/dashboard"
import Checkbox from "./Checkbox"
import Icons from "./Icons"
import TextContent from "./TextContent"

const Wraper: React.FC<ITodoProp> = ({ id }) => {
	const { userId, todos } = useLoaderData<typeof loader>()
	const singleTodo = todos.find((todo) => todo.id === id)
	if (!singleTodo) return null
	return (
		<li className="px-6 py-4">
			<fieldset>
				<legend className="sr-only">Notifications</legend>
				<div className="space-y-5">
					<div className="relative flex items-center">
						<Checkbox id={id} />
						<TextContent id={id} />
						<Conditional
							condition={singleTodo.creatorID === userId}
						>
							<Icons id={id} />
						</Conditional>
					</div>
				</div>
			</fieldset>
		</li>
	)
}
export default Wraper
