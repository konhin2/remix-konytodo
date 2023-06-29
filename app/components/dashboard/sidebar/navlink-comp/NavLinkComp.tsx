import { NavLink } from "@remix-run/react"
import { twMerge } from "tailwind-merge"
import { SidebarLinkClass } from "~/components/dashboard/constants"
import { INavLinkProps } from "~/types/dashboard"

const NavLinkComp: React.FC<INavLinkProps> = ({ path, text, icon }) => {
	const { activeText, inactiveText } = SidebarLinkClass
	return (
		<li>
			<NavLink
				to={path}
				className={({ isActive }) =>
					twMerge(inactiveText, isActive && activeText)
				}
				end
			>
				<svg
					className="h-6 w-6 shrink-0"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d={icon}
					/>
				</svg>
				{text}
			</NavLink>
		</li>
	)
}
export default NavLinkComp
