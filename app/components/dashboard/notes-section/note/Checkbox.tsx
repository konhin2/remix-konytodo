import { Link, useLoaderData } from "@remix-run/react"
import * as React from "react"
import { Conditional } from "~/components/common"
import { loader } from "~/routes/dashboard+/notes/_dashboard-notes"
import { ITodoProp } from "~/types/dashboard"

const Checkbox: React.FC<ITodoProp> = ({ id }) => {
	const { todos, todo } = useLoaderData<typeof loader>()
	const singleTodo = todos.find((todo) => todo.id === id)
	if (!singleTodo) return null
	const [status, setStatus] = React.useState(singleTodo.completed)
	return (
		<div className="h-6 items-center flex">
			<Conditional condition={todo === null}>
				<Link to={`?edit-checkbox=${id}-${!status}-.`}>
					<input
						id="comments"
						aria-describedby="comments-description"
						name="comments"
						type="checkbox"
						className="h-4 w-4 rounded accent-konytool"
						onChange={() => setStatus(!status)}
						checked={status}
					/>
				</Link>
			</Conditional>
			<Conditional condition={todo !== null}>
				<Link to={`?edit-checkbox=${id}-${!status}-?edit=${id}`}>
					<input
						id="comments"
						aria-describedby="comments-description"
						name="comments"
						type="checkbox"
						className="h-4 w-4 rounded accent-konytool"
						onChange={() => setStatus(!status)}
						checked={status}
					/>
				</Link>
			</Conditional>
		</div>
	)
}
export default Checkbox
