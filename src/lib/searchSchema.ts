import z from "zod";

export const searchSchema = z.object({
  search: z.string().optional(),
  tags: z.array(z.string()).optional(),
});
