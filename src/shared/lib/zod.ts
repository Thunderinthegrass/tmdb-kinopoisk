import { z } from "zod";

export const validate =
  <T>(schema: z.ZodSchema<T>) =>
    (response: unknown): T => {
      const parsed = schema.safeParse(response);

      if (!parsed.success) {
        console.error("API validation error:", parsed.error);
        throw new Error("Invalid API response");
      }

      return parsed.data;
    };

export const validateAndTransform =
  <T>(schema: z.ZodSchema<T>, transform: (data: T) => T) =>
    (response: unknown): T => {
      const data = validate(schema)(response);
      return transform(data);
    };