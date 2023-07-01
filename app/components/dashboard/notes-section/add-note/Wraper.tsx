import { PlusIcon } from "@heroicons/react/20/solid"
import { Form, useLoaderData, useNavigation } from "@remix-run/react"
import * as React from "react"
import { useTranslation } from "react-i18next"
import { Conditional } from "~/components/common"
import { loader } from "~/routes/dashboard+/notes/_dashboard-notes"

const Wraper: React.FC = () => {
	const { t } = useTranslation()
	const navigation = useNavigation()
	const { todo } = useLoaderData<typeof loader>()

	const formRef = React.useRef<HTMLFormElement>(null)
	React.useEffect(() => {
		if (navigation.state === "idle") formRef.current?.reset()
	}, [navigation.state])
	return (
		<li className="px-6 py-4">
			<Conditional condition={todo !== null}>
				<p className="mb-3 text-sm text-konytool-d" id="todo-content">
					{t("dashboard.EDIT_MODE")}
				</p>
				<Form
					method="PUT"
					action={`/dashboard/notes?edit=${todo?.id}`}
					className="flex flex-row items-center"
					ref={formRef}
				>
					<div className="w-full mr-4 isolate -space-y-px rounded-md shadow-sm">
						<div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool">
							<input
								type="text"
								name="todo-content"
								id="todo-content"
								className="px-2 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
								placeholder={t("dashboard.INPUT_NOTE")}
								defaultValue={todo?.content}
							/>
						</div>
					</div>

					<Conditional condition={navigation.state === "submitting"}>
						<button
							type="submit"
							className="h-full rounded-full bg-gray-400 p-1.5 text-white shadow-sm outline-none focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool-d"
							disabled
						>
							<PlusIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</Conditional>
					<Conditional condition={navigation.state !== "submitting"}>
						<button
							type="submit"
							className="h-full rounded-full bg-konytool p-1.5 text-white shadow-sm hover:bg-konytool-m outline-none focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool-d cursor-pointer"
						>
							<PlusIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</Conditional>
				</Form>
			</Conditional>
			<Conditional condition={todo === null}>
				<Form
					method="POST"
					action="/dashboard/notes"
					className="flex flex-row items-center"
					ref={formRef}
				>
					<div className="w-full mr-4 isolate -space-y-px rounded-md shadow-sm">
						<div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool">
							<input
								type="text"
								name="todo-content"
								id="todo-content"
								className="px-2 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
								placeholder={t("dashboard.INPUT_NOTE")}
							/>
						</div>
					</div>

					<Conditional condition={navigation.state === "submitting"}>
						<button
							type="submit"
							className="h-full rounded-full bg-gray-400 p-1.5 text-white shadow-sm outline-none focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool-d"
							disabled
						>
							<PlusIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</Conditional>
					<Conditional condition={navigation.state !== "submitting"}>
						<button
							type="submit"
							className="h-full rounded-full bg-konytool p-1.5 text-white shadow-sm hover:bg-konytool-m outline-none focus-within:z-10 focus-within:ring-2 focus-within:ring-konytool-d cursor-pointer"
						>
							<PlusIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</Conditional>
				</Form>
			</Conditional>
		</li>
	)
}
export default Wraper
