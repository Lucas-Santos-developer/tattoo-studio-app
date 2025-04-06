import { prisma } from "@/prisma";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const account = await prisma.user.findUnique({ where: { id } });

  return (
    <section className='w-full max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl'>
      {account?.name === null ? (
        <>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            Como você gostaria de ser chamado?
          </h2>
          <form
            action={async (formdata: FormData) => {
              "use server";
              await prisma.user.update({
                where: { id },
                data: { name: formdata.get("name") as string },
              });
            }}
            className='flex flex-col gap-4'
          >
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Seu nome'
              className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <button
              type='submit'
              className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            >
              Atualizar
            </button>
          </form>
        </>
      ) : (
        <h2 className='text-2xl font-bold text-gray-800'>
          👋 Bem-vindo, <span className='text-blue-600'>{account?.name}</span>!
        </h2>
      )}
    </section>
  );
}
