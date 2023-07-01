import { CreateNoteProps } from "~/types/models"
import { db } from "~/utils/db.server"

export const getAllTodos = async (order: string) => {
	const [key, value] = order.split("-")
	return db.todo.findMany({
		select: {
			id: true,
			content: true,
			completed: true,
			creatorID: true
		},
		orderBy: {
			[key]: value
		}
	})
}

export const createTodo = async (data: CreateNoteProps) => {
	return db.todo.create({ data })
}

export const deleteTodo = async (id: number) => {
	return db.todo.delete({ where: { id } })
}
