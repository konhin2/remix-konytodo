import { PlusIcon } from "@heroicons/react/20/solid"
import { useTranslation } from "react-i18next"

const Wraper: React.FC = () => {
	const { t } = useTranslation()
	return (
		<li className="px-6 py-4">
			<form className="flex flex-row items-center">
				<div className="w-full mr-4 isolate -space-y-px rounded-md shadow-sm">
					<div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool">
						<input
							type="text"
							name="note-name"
							id="note-name"
							className="px-2 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
							placeholder={t("dashboard.INPUT_NAME")}
						/>
					</div>
					<div className="relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool">
						<input
							type="text"
							name="note-content"
							id="note-content"
							className="px-2 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
							placeholder={t("dashboard.INPUT_CONTENT")}
						/>
					</div>
				</div>
				<button
					type="button"
					className="h-full rounded-full bg-konytool p-1.5 text-white shadow-sm hover:bg-konytool-m outline-none focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool-d"
				>
					<PlusIcon className="h-5 w-5" aria-hidden="true" />
				</button>
			</form>
		</li>
	)
}
export default Wraper
