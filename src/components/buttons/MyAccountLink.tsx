import React from "react";
import Link from "next/link";
import { MdPerson } from "react-icons/md";

export default function MyAccountLink({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/account/${id}`}
      className='rounded-full bg-red-600 block p-1 w-fit mx-auto'
    >
      <MdPerson size={24} color='white' />
    </Link>
  );
}
