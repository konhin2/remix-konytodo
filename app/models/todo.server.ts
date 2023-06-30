import { CreateNoteProps } from "~/types/models"
import { db } from "~/utils/db.server"

export const getAllTodos = async () => {
	return db.todo.findMany({
		select: {
			id: true,
			content: true,
			completed: true,
			creatorID: true
		},
		orderBy: {
			createdAt: "desc"
		}
	})
}

export const createTodo = async (data: CreateNoteProps) => {
	return db.todo.create({ data })
}
