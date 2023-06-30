import type { Todo } from "@prisma/client"

export interface CreateNoteProps {
	content: Todo["content"]
	creatorID: Todo["creatorID"]
}
