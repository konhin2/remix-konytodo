import { getAuth } from "@clerk/remix/ssr.server"
import { V2_MetaFunction, json, type DataFunctionArgs } from "@remix-run/node"
import { useNavigation } from "@remix-run/react"
import { Conditional } from "~/components/common"
import { NotesSection } from "~/components/dashboard"
import { SortOptions } from "~/components/dashboard/constants"
import { createTodo, getAllTodos } from "~/models/todo.server"
import { todoSchema } from "~/utils/validations.server"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
export const loader = async (args: DataFunctionArgs) => {
	// Get the sort option from the query params
	const DEFAULT_SORT = SortOptions[2].value
	const url = new URL(args.request.url)
	const order = url.searchParams.get("order") || DEFAULT_SORT

	// Get the user id from clerk
	const { userId } = await getAuth(args)

	// Get all the todos from Prisma
	const todos = await getAllTodos(order)

	// Return the todos and the user id
	return json({ todos, userId })
}
export const action = async (args: DataFunctionArgs) => {
	// Construct the todo payload
	const { userId } = await getAuth(args)
	const formData = await args.request.formData()
	const content = formData.get("todo-content")
	const todoPayload = todoSchema.parse({
		content,
		creatorID: userId
	})

	// Create the todo
	await Promise.all([await createTodo(todoPayload)])
	return json({ message: "Todo created" }, { status: 201 })
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
