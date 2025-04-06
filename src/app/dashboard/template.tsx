import AsideWrapper from "@/components/template/AsideWrapper";
import DashboardTemplateContextProvider from "@/providers/DashboardTemplateContext";
import React from "react";

type Props = { children: React.ReactNode };

export default function DashboardTemplate({ children }: Props) {
  return (
    <div className='flex h-screen overflow-y-hidden'>
      <DashboardTemplateContextProvider>
        <AsideWrapper />
        <main className='bg-slate-100 h-full w-full p-4'>{children}</main>
      </DashboardTemplateContextProvider>
    </div>
  );
}
