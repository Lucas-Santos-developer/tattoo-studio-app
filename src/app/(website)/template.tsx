"use client";
import PublicWrapperHeader from "@/components/template/PublicWrapperHeader";
import PublicTemplateContextProvider from "@/providers/PublicTemplateContext";
import React from "react";

type Props = { children: React.ReactNode };

export default function PublicTemplate({ children }: Props) {
  return (
    <>
      <PublicTemplateContextProvider>
        <PublicWrapperHeader />
        <main>{children}</main>
      </PublicTemplateContextProvider>
    </>
  );
}
