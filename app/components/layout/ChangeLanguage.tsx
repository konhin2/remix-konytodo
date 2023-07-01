import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import i18n from "~/i18n"
import { LanguageOptions } from "./constants"

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ")
}

export default function Example() {
	const { t } = useTranslation()
	const handleChangeLanguage = (language: string) => {
		i18n.changeLanguage(language)
	}
	const options = LanguageOptions.map((option) => {
		return (
			<Menu.Item>
				{({ active }) => (
					<button
						onClick={() => handleChangeLanguage(option.value)}
						className={classNames(
							active
								? "bg-gray-100 text-gray-900"
								: "text-gray-700",
							"block px-4 py-2 text-sm text-right w-full"
						)}
					>
						{t(`dashboard.${option.tKey}`)}
					</button>
				)}
			</Menu.Item>
		)
	})
	return (
		<Menu as="div" className="ml-4 relative inline-block text-left">
			<div>
				<Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
						/>
					</svg>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">{options}</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
