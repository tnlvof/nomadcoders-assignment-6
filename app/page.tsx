"use client";

import Input from "@/components/input";
import { useFormState } from "react-dom";
import { EnvelopeIcon, UserIcon, KeyIcon } from "@heroicons/react/20/solid";
import { logIn } from "./actions";
import FormButton from "@/components/button";

export default function LogIn() {
  const [state, dispatch] = useFormState(logIn, null);

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24 bg-gray-100">
      <p className="text-4xl">🔥</p>
      <form className="flex flex-col space-y-3 min-w-96" action={dispatch}>
        <Input
          icon={<EnvelopeIcon className="size-4" />}
          name="email"
          type="email"
          required={true}
          placeholder="Email"
          errors={state?.fieldErrors?.email || []}
        />
        <Input
          icon={<UserIcon className="size-4" />}
          name="username"
          type="text"
          required={true}
          placeholder="Username"
          errors={state?.fieldErrors?.username || []}
        />
        <Input
          icon={<KeyIcon className="size-4" />}
          name="password"
          type="password"
          required={true}
          placeholder="Password"
          errors={state?.fieldErrors?.password || []}
        />
        <FormButton text="Log In" />
        {state?.success && (
          <p className={`bg-emerald-500 p-4 rounded-xl text-sm font-semibold `}>
            Welcome Back!
          </p>
        )}
      </form>
    </main>
  );
}
