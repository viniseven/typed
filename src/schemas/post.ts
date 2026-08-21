import * as z from "zod";
import { request, type Request, type Response } from "express";

export const createPostSchema = z.object({
  title: z
    .string("O título é obrigatório")
    .min(1)
    .max(50, "O título não pode ultrapassar 50 caracteres"),

  content: z
    .string("O conteúdo é obrigatório")
    .min(1)
    .max(10000, "O tamanho extrapolou o limite definido")
});

export const createPostParamsSchema = z.object({
  idUser: z.string()
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
export type CreatePostParamsSchema = z.infer<typeof createPostParamsSchema>;
