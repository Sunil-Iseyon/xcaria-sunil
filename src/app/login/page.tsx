import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/projects");
  };

  // const signUp = async (formData: FormData) => {
  //   "use server";

  //   const origin = headers().get("origin");
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;
  //   const supabase = createClient();

  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${origin}/auth/callback`,
  //     },
  //   });

  //   if (error) {
  //     return redirect("/login?message=Could not authenticate user");
  //   }

  //   return redirect("/login?message=Check email to continue sign in process");
  // };

  return (
    <div className="flex items-center justify-center w-full min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-white max-w-md rounded-md group mx-auto">
        <label className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border border-zinc-300/50 mb-6 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-700" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border border-zinc-300/50 mb-6 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton
          formAction={signIn}
          className="bg-gradient-to-r from-cyan-500 to-green-700 rounded-md px-4 py-2 text-white mb-2 hover:from-cyan-600 hover:to-green-800"
          pendingText="Signing In..."
        >
          Sign In
        </SubmitButton >
        {/* <button 
        formAction={signUp}
        className="bg-gradient-to-r from-cyan-500 to-green-700 rounded-md px-4 py-2 text-white mb-2 hover:from-cyan-600 hover:to-green-800">
          Sign Up</button> */}
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-zinc-800/50 text-white text-center rounded-md">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
