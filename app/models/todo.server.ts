import { CreateNoteProps } from "~/types/models"
import { db } from "~/utils/db.server"

export const getAllTodos = async () => {
	return db.todo.findMany({
		orderBy: {
			createdAt: "desc"
		}
	})
}

export const createTodo = async (data: CreateNoteProps) => {
	return db.todo.create({ data })
}
