import { getAuth } from "@clerk/remix/ssr.server"
import { V2_MetaFunction, json, type DataFunctionArgs } from "@remix-run/node"
import { useNavigation } from "@remix-run/react"
import { Conditional } from "~/components/common"
import { NotesSection } from "~/components/dashboard"
import { createTodo, getAllTodos } from "~/models/todo.server"
import { todoSchema } from "~/utils/validations.server"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
export const loader = async (_: DataFunctionArgs) => {
	const todos = await getAllTodos()
	return json({ todos })
}
export const action = async (args: DataFunctionArgs) => {
	const { userId } = await getAuth(args)
	const formData = await args.request.formData()
	const content = formData.get("todo-content")
	const todoPayload = todoSchema.parse({
		content,
		creatorID: userId
	})
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
