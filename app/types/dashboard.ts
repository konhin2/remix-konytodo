export interface INavLinkProps {
	path: string
	text: string
	icon: string
}
export interface ITodoProps {
	content: string
	completed: boolean
	creatorID: string
	id: number
}
export interface ITextContentProps {
	content: string
	completed: boolean
}
export interface ICheckboxTodoProps {
	completed: boolean
}
export interface ISortOptionsProps {
	tKey: string
	value: string
}
export interface INavIconProps {
	id: number
}
