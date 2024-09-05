import { z } from "zod"

export const contactSchema = z.object({
    massage: z.string().min(4),
    email: z.string().min(4),
    name: z.string().min(4),

  })