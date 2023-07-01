import { getAuth } from "@clerk/remix/ssr.server"
import {
	V2_MetaFunction,
	json,
	redirect,
	type DataFunctionArgs
} from "@remix-run/node"
import { useNavigation } from "@remix-run/react"
import { Conditional } from "~/components/common"
import { NotesSection } from "~/components/dashboard"
import { SortOptions } from "~/components/dashboard/constants"
import {
	createTodo,
	deleteTodo,
	getAllTodos,
	getTodoById,
	updateTodo,
	updateTodoStatus
} from "~/models/todo.server"
import { todoSchema } from "~/utils/validations.server"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
export const loader = async (args: DataFunctionArgs) => {
	// Get the sort option from the query params
	const DEFAULT_SORT = SortOptions[2].value
	const url = new URL(args.request.url)
	const order = url.searchParams.get("order") || DEFAULT_SORT

	const edit = url.searchParams.get("edit")
	const editCheckbox = url.searchParams.get("edit-checkbox")
	console.log(editCheckbox)
	// Get the user id from clerk
	const { userId } = await getAuth(args)

	// If the user is editing a todo, return the todo and the user id
	if (edit) {
		const todo = await getTodoById(Number(edit))
		const todos = await getAllTodos(order)
		return json({ todos, userId, todo })
	}
	if (editCheckbox) {
		const todoId = Number(editCheckbox.split("-")[0])
		const status = editCheckbox.split("-")[1] === "true"
		const redirectUrl = editCheckbox.split("-")[2]
		await updateTodoStatus(todoId, status)
		const todos = await getAllTodos(order)
		return json({ todos, userId, todo: null }), redirect(redirectUrl)
	}
	// Get all the todos from Prisma
	const todos = await getAllTodos(order)
	// Return the todos and the user id
	return json({ todos, userId, todo: null })
}
export const action = async (args: DataFunctionArgs) => {
	const { userId } = await getAuth(args)
	const formData = await args.request.formData()
	if (args.request.method === "POST") {
		// Construct the todo payload

		const content = formData.get("todo-content")
		const todoPayload = todoSchema.parse({
			content,
			creatorID: userId
		})
		// Create the todo
		await Promise.all([await createTodo(todoPayload)])
		return json({ message: "Todo created" }, { status: 201 })
	} else if (args.request.method === "PUT") {
		const url = new URL(args.request.url)
		const edit = url.searchParams.get("edit")
		const content = formData.get("todo-content") as string

		await Promise.all([await updateTodo(Number(edit), content)])
		return redirect("/dashboard/notes")
	} else if (args.request.method === "DELETE") {
		const todoId = Number(formData.get("todo-id"))
		const todoCreatorID = formData.get("todo-creator-id")
		if (todoCreatorID !== userId) {
			return json({ message: "Unauthorized" }, { status: 401 })
		}
		await Promise.all([await deleteTodo(todoId)])
		return json({ message: "Todo deleted" }, { status: 201 })
	}
}
const DashboardNotes = () => {
	const navigation = useNavigation()
	return (
		<>
			<NotesSection />
			<Conditional condition={navigation.state === "submitting"}>
				<div className="fixed flex w-screen h-100 bg-gray-700 bg-opacity-50 items-center">
					<div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 mb-40">
						<div className="border-t-transparent border-solid animate-spin  rounded-full border-konytool-m border-4 h-12 w-12"></div>
					</div>
				</div>
			</Conditional>
		</>
	)
}
export default DashboardNotes
