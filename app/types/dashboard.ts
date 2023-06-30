export interface INavLinkProps {
	path: string
	text: string
	icon: string
}
export interface ITodoProps {
	id: number
	content: string
	completed: boolean
	creatorID?: string
	createdAt?: string
}
export interface ITextContentProps {
	content: string
	completed: boolean
}
export interface ICheckboxTodoProps {
	completed: boolean
}
