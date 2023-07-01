import { useLoaderData } from "@remix-run/react"
import * as React from "react"
import { loader } from "~/routes/dashboard+/notes/_dashboard-notes"
import { ITodoProp } from "~/types/dashboard"

const Checkbox: React.FC<ITodoProp> = ({ id }) => {
	const { todos } = useLoaderData<typeof loader>()
	const singleTodo = todos.find((todo) => todo.id === id)
	const [status, setDtatys] = React.useState(singleTodo?.completed)
	return (
		<div className="h-6 items-center flex">
			<input
				id="comments"
				aria-describedby="comments-description"
				name="comments"
				type="checkbox"
				className="h-4 w-4 rounded border-gray-300 text-konytool"
				checked={status}
			/>
		</div>
	)
}
export default Checkbox
