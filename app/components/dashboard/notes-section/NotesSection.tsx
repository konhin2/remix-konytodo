import { useLoaderData } from "@remix-run/react"
import { loader } from "~/routes/dashboard+/notes/_dashboard-notes"
import WraperAddNote from "./add-note"
import WraperHead from "./head"
import WraperNote from "./note"

const NotexSection: React.FC = () => {
	const { todos } = useLoaderData<typeof loader>()
	const todosSections = todos.map((todo) => {
		return <WraperNote key={todo.id} id={todo.id} />
	})
	return (
		<main className="w-full px-6 md:px-20 lg:px-44 xl:px-72 py-10 flex flex-col justify-content">
			<WraperHead />
			<div className="mx-4 overflow-hidden rounded-md bg-white shadow">
				<ul role="list" className="divide-y divide-gray-200">
					<WraperAddNote />
					{todosSections}
				</ul>
			</div>
		</main>
	)
}
export default NotexSection
