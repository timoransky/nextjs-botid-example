"use server";

import { checkBotId } from "botid/server";

export async function submitForm(formData: FormData) {
  const verification = await checkBotId();

  if (verification.isBot) {
    return { success: false, message: "Bot detected! Access denied." };
  }

  // Simulate some processing time
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const text = formData.get("text") as string;

  return {
    success: true,
    message: `Form submitted successfully! You entered: "${text}"`,
  };
}
