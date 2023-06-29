import Dropdown from "./Dropdown"
import Title from "./Title"

const Wraper: React.FC = () => {
	return (
		<div className="py-4 flex justify-between content-center">
			<Title />
			<Dropdown />
		</div>
	)
}
export default Wraper
