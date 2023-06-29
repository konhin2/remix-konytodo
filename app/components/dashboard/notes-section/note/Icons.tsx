import { NoteIconsPath } from "../../constants"

const Icons: React.FC = () => {
	return (
		<div className="flex flex-col">
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
		</div>
	)
}
export default Icons
