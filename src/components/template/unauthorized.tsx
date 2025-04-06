import Link from "next/link";
import React from "react";

export default function Unauthorized() {
  return (
    <section className='min-h-screen w-full flex items-center justify-center'>
      <div>
        <h2 className='text-2xl font-semibold text-red-600'>
          Ops! você não está autorizado para entrar aqui.
        </h2>
        <p className='mb-4'>
          Faça login para aproveitar nossas funcionalidades
        </p>
        <Link
          href={"/auth/login"}
          className='px-4 py-2 rounded-xl bg-blue-500 text-whtie hover:bg-blue-600 block w-fit text-white'
        >
          Fazer login
        </Link>
      </div>
    </section>
  );
}
