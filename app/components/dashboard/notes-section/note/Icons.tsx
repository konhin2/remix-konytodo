import { Form, Link, useLoaderData } from "@remix-run/react"
import { Conditional } from "~/components/common"
import { loader } from "~/routes/dashboard+/notes/_dashboard-notes"
import { ITodoProp } from "~/types/dashboard"
import { NoteIconsPath } from "../../constants"

const Icons: React.FC<ITodoProp> = ({ id }) => {
	const { todos, todo } = useLoaderData<typeof loader>()
	const singleTodo = todos.find((todo) => todo.id === id)
	if (!singleTodo) return null
	return (
		<div className="flex flex-col">
			<Conditional condition={todo !== null}>
				<Link to={`.`}>
					<svg
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						aria-hidden="true"
						className="p-1 h-6 w-6 text-white bg-konytool-m group flex rounded-md my-2 text-sm leading-6 font-semibold"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d={NoteIconsPath.editPath}
						/>
					</svg>
				</Link>
			</Conditional>
			<Conditional condition={todo === null}>
				<Link to={`?edit=${id}`}>
					<svg
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						aria-hidden="true"
						className="p-1 h-6 w-6 text-gray-400  hover:text-konytool hover:bg-gray-100 group flex rounded-md my-2 text-sm leading-6 font-semibold"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d={NoteIconsPath.editPath}
						/>
					</svg>
				</Link>
			</Conditional>
			<Form method="DELETE" action="/dashboard/notes">
				<input
					type="number"
					name="todo-id"
					id="todo-id"
					className="hidden"
					value={id}
				/>
				<input
					type="text"
					name="todo-creator-id"
					id="todo-creator-id"
					className="hidden"
					value={singleTodo.creatorID}
				/>
				<button type="submit">
					<svg
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						aria-hidden="true"
						className="p-1 h-6 w-6 text-gray-400  hover:text-konytool-r hover:bg-gray-50 group flex gap-x-3 rounded-md my-2 text-sm leading-6 font-semibold"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d={NoteIconsPath.trashPath}
						/>
					</svg>
				</button>
			</Form>
		</div>
	)
}
export default Icons
