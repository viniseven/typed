import * as z from "zod";

export const createAuthUserSchema = z.object({
  username: z.string("O nome de usuário é obrigatório").min(1).trim(),

  password: z.string("A senha é obrigatória").min(1)
});

export type CreateAuthUserSchema = z.infer<typeof createAuthUserSchema>;
