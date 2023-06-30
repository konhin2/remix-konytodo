import { V2_MetaFunction, json, type DataFunctionArgs } from "@remix-run/node"
import { NotesSection } from "~/components/dashboard"
import { getAllTodos } from "~/models/todo.server"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
export const loader = async (_: DataFunctionArgs) => {
	const todos = await getAllTodos()
	return json({ todos })
}

const DashboardNotes = () => {
	return <NotesSection />
}
export default DashboardNotes
