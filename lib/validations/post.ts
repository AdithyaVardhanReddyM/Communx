import * as z from "zod";

export const PostValidation = z.object({
  post_photo: z.string().url().nullable(),
  post: z.string().min(3, { message: "Minimum 3 characters." }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  post_photo: z.string().url().nullable(),
  post: z.string().min(3, { message: "Minimum 3 characters." }),
});
