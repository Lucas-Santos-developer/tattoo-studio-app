import React from "react";
import Aside from "./Aside";
import { auth } from "@/auth";
export default async function () {
  const session = await auth();
  return (
    <div>
      <Aside id={`${session?.user?.id}`} />
    </div>
  );
}
