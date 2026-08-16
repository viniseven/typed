import * as z from "zod";

export const createUserSchema = z.object({
  firstName: z
    .string("O nome é obrigatório")
    .min(1)
    .trim()
    .max(20, "O primeiro nome não pode ultrapassar 20 caracteres")
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
      "O primeiro nome deve conter apenas letras"
    ),
  lastName: z
    .string("O sobrenome é obrigatório")
    .min(1)
    .trim()
    .max(20, "O sobrenome não pode ultrapassar 20 caracteres")
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/,
      "O primeiro nome deve conter apenas letras"
    ),
  username: z
    .string("O nome de usuário é obrigatório")
    .min(6, "O nome de usuário deve conter no mínimo 6 caracteres")
    .trim()
    .max(12, "O nome de usuário não pode ultrapassar 12 caracteres")
    .regex(
      /^[a-zA-Z0-9]+$/,
      "O nome de usuário deve conter apenas letras e números, sem acentos, espaços ou caracteres especiais."
    ),
  email: z
    .email("Endereço de email inválido")
    .min(1, "O endereço de email é obrigatório"),
  password: z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .max(12, "A senha deve ter no máximo 12 caracteres.")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número.")
    .regex(
      /[^a-zA-Z0-9]/,
      "A senha deve conter pelo menos um caractere especial."
    )
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
