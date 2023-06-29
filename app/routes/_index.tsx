import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Home" }]
}

const Index: React.FC = () => {
	return (
		<main className="py-10">
			<div className="mx-auto max-w-7xl px-4 px-6">
				Welcome to Konytodo!
			</div>
		</main>
	)
}
export default Index
