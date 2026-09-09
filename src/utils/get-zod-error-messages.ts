import { ZodFormattedError } from "zod";

export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[] {
  const { _errors, ...fieldErrors } = error;

  const nestedErrors = Object.values(fieldErrors).flatMap((field) => {
    if (field && typeof field === "object" && "_errors" in field) {
      return (field as { _errors: string[] })._errors;
    }
    return [];
  });

  return [..._errors, ...nestedErrors];
}
