import Wraper from "./head"

const NotexSection: React.FC = () => {
	return (
		<main className="w-full px-6 md:px-28 lg:px-44 xl:px-72 py-10 flex flex-col justify-content">
			<Wraper />
			<div className="mx-4 overflow-hidden rounded-md bg-white shadow">
				<ul role="list" className="divide-y divide-gray-200">
					<li className="px-6 py-4">Add Note</li>
					<li className="px-6 py-4">Note 1</li>
				</ul>
			</div>
		</main>
	)
}
export default NotexSection
