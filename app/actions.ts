"use server";

import z from "zod";

const eamilCheck = async (email: string) => {
  return email.endsWith("@zod.com");
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(eamilCheck, "Only @zod.com emails are allowed"),
  username: z.string().min(5, "Username must be at least 5 characters long."),
  password: z
    .string()
    .min(10, "Password must be at least 10 characters long.")
    .refine(
      (password) => /\d/.test(password),
      "Password should contain at least one number (0123456789)."
    ),
});

export async function logIn(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const result = await formSchema.spa(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    if (result.data.password !== "1234512345") {
      return {
        success: false,
        fieldErrors: {
          password: ["Wrong password"],
          email: [],
          username: [],
        },
      };
    } else {
      return {
        success: true,
      };
    }
  }
}
