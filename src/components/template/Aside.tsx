"use client";
import React from "react";
import AsideOpenButton from "../buttons/AsideOpenButton";
import NavigationList from "../list/NavigationList";
import MyAccountLink from "../buttons/MyAccountLink";

export default function Aside({ id }: { id: string }) {
  return (
    <aside className={`h-full px-2 relative pt-4`}>
      <AsideOpenButton />
      <NavigationList />
      <div className='absolute bottom-4'>
        <MyAccountLink id={id} />
      </div>
    </aside>
  );
}
