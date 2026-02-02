// schemas/contact.schema.ts
import { z } from "zod";

export const useContact = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactInput = z.infer<typeof useContact>;
