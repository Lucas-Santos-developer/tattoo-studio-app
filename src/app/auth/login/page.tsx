import React from "react";

import { signIn } from "@/auth";

function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("nodemailer", formData);
      }}
    >
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Insira seu email'
        className='border px-2 py-1 rounded-lg block w-full mb-4'
      />
      <button
        type='submit'
        className='mx-auto block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold'
      >
        Entrar
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <section className='min-h-screen w-full flex items-center justify-center'>
      <div className='w-full shadow-xl max-w-xl p-8'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>
          Entre ou cadastre sua conta com o seu email
        </h2>
        <SignIn />
      </div>
    </section>
  );
}
