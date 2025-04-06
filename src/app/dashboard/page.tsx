import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function DashboardPage() {
  const session = await auth();

  if (!session) return redirect("/auth/login");

  const response = await fetch(
    `http://localhost:3000/api/account/profil/${session.user?.id}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  const user = data.user;
  return (
    <>
      <section>
        <div className='max-w-xl'>
          <h2 className='text-2xl font-semibold mb-4'>
            Bem vindo <span className='text-blue-600'>{user.email}</span>
          </h2>
        </div>
      </section>
    </>
  );
}
