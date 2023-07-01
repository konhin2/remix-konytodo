import { useLoaderData } from "@remix-run/react"
import * as React from "react"
import { Conditional } from "~/components/common"
import { loader } from "~/routes/dashboard+/notes/_dashboard-notes"
import { ITodoProp } from "~/types/dashboard"

const TextContent: React.FC<ITodoProp> = ({ id }) => {
	const { todos } = useLoaderData<typeof loader>()
	const singleTodo = todos.find((todo) => todo.id === id)
	if (!singleTodo) return null
	return (
		<div className="w-full ml-4 mr-3 text-sm leading-6">
			<Conditional condition={singleTodo.completed}>
				<p
					id="comments-description"
					className="text-konytool text-justify line-through"
				>
					{singleTodo.content}
				</p>
			</Conditional>
			<Conditional condition={!singleTodo.completed}>
				<p
					id="comments-description"
					className="text-gray-500 text-justify"
				>
					{singleTodo.content}
				</p>
			</Conditional>
		</div>
	)
}
export default TextContent
