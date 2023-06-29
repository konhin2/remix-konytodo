import { V2_MetaFunction } from "@remix-run/node"
import { NotesSection } from "~/components/dashboard"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Dashboard" }]
}
const DashboardNotes = () => {
	return <NotesSection />
}
export default DashboardNotes
