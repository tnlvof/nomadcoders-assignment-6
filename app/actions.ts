"use server";

import z from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  username: z.string(),
  password: z.string(),
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
    if (result.data.password !== "12345") {
      return {
        success: false,
        fieldErrors: {
          password: ["Wrong password"],
        },
      };
    } else {
      return {
        success: true,
      };
    }
  }
}
