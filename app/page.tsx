"use client";

import { useActionState } from "react";
import { submitForm } from "./actions";

type FormState = {
  success: boolean;
  message: string;
} | null;

export default function Home() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (_prevState, formData) => {
      return await submitForm(formData);
    },
    null
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col gap-8 p-8">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
          BotID Demo Form
        </h1>

        <form action={formAction} className="flex flex-col gap-4">
          <input
            type="text"
            name="text"
            placeholder="Enter any text..."
            required
            className="rounded-lg border border-zinc-300 px-4 py-3 text-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          />

          <button
            type="submit"
            disabled={isPending}
            className="rounded-lg bg-black px-4 py-3 font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>

        {state && (
          <div
            className={`rounded-lg p-4 ${
              state.success
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {state.message}
          </div>
        )}
      </main>
    </div>
  );
}
