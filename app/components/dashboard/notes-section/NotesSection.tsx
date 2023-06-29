import WraperHead from "./head"
import WraperNote from "./note"

const NotexSection: React.FC = () => {
	return (
		<main className="w-full px-6 md:px-20 lg:px-44 xl:px-72 py-10 flex flex-col justify-content">
			<WraperHead />
			<div className="mx-4 overflow-hidden rounded-md bg-white shadow">
				<ul role="list" className="divide-y divide-gray-200">
					<li className="px-6 py-4">Add Note</li>
					<WraperNote />
					<WraperNote />
				</ul>
			</div>
		</main>
	)
}
export default NotexSection
