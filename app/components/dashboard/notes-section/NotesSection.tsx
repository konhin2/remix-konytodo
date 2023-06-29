const NotexSection: React.FC = () => {
	return (
		<main className="w-full px-6 md:px-28 lg:px-44 xl:px-72 py-10 flex flex-col justify-content">
			<h2 className="text-lg max-w-7xl mb-4 font-semibold">
				<span className="inline-flex items-center gap-x-2">
					<svg
						className="h-2.5 w-2.5 fill-konytool"
						viewBox="0 0 6 6"
						aria-hidden="true"
					>
						<circle cx={3} cy={3} r={3} />
					</svg>
					To Do
				</span>
			</h2>
			<div className="ml-4 overflow-hidden rounded-md bg-white shadow">
				<ul role="list" className="divide-y divide-gray-200">
					<li className="px-6 py-4">Add Note</li>
					<li className="px-6 py-4">Note 1</li>
				</ul>
			</div>
		</main>
	)
}
export default NotexSection
