import { z } from "zod"

export const todoSchema = z.object({
	content: z.string().min(1).max(200).nonempty(),
	creatorID: z.string().nonempty()
})
