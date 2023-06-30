import { db } from "~/utils/db.server"
export const getAllTodos = async () => {
	return db.todo.findMany()
}
