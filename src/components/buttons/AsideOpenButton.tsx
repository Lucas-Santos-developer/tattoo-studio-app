"use client";

import { DashboardTemplateContext } from "@/providers/DashboardTemplateContext";
import React from "react";
import { CgSidebarOpen, CgSidebar } from "react-icons/cg";

export default function AsideOpenButton() {
  const { isCollapsedAside, setIsCollapsedAside } = React.useContext(
    DashboardTemplateContext
  );
  return (
    <div>
      {isCollapsedAside === false ? (
        <button onClick={() => setIsCollapsedAside(true)}>
          <CgSidebarOpen size={32} />
        </button>
      ) : (
        <button onClick={() => setIsCollapsedAside(false)}>
          <CgSidebar size={32} />
        </button>
      )}
    </div>
  );
}
