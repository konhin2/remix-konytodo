import { useTranslation } from "react-i18next"

const Title: React.FC = () => {
	const { t } = useTranslation()
	return (
		<h2 className="text-xl font-semibold">
			<span className="inline-flex items-center gap-x-2">
				<svg
					className="h-2.5 w-2.5 fill-konytool"
					viewBox="0 0 6 6"
					aria-hidden="true"
				>
					<circle cx={3} cy={3} r={3} />
				</svg>
				{t("dashboard.NOTES_TITLE")}
			</span>
		</h2>
	)
}
export default Title
