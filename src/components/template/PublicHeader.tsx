"use client";
import { PublicTemplateContext } from "@/providers/PublicTemplateContext";
import Link from "next/link";
import React from "react";

export default function PublicHeader() {
  const { isScrolledHeader, setIsScrolledHeader } = React.useContext(
    PublicTemplateContext
  );
  const handleScroll = React.useCallback(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setIsScrolledHeader(true);
        console.log(isScrolledHeader);
      } else {
        setIsScrolledHeader(false);
        console.log(isScrolledHeader);
      }
    });
  }, [setIsScrolledHeader]);
  React.useEffect(handleScroll, [isScrolledHeader, setIsScrolledHeader]);
  return (
    <header
      className={`${
        isScrolledHeader === false ? "bg-transparent" : "bg-blue-600"
      } sticky top-0 py-4 px-24 w-full flex justify-between items-center shadow-xl`}
    >
      <Link href={`/`}>logo</Link> <nav>navigation</nav>
    </header>
  );
}
