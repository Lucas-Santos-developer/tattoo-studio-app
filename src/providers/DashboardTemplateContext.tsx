"use client";
import React from "react";

type DashboardTemplatecontextDefaultValuesType = {
  isCollapsedAside: boolean;
  setIsCollapsedAside: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardTemplateContextDefaultValues: DashboardTemplatecontextDefaultValuesType =
  {
    isCollapsedAside: false,
    setIsCollapsedAside: () => {},
  };

export const DashboardTemplateContext = React.createContext(
  DashboardTemplateContextDefaultValues
);

export default function DashboardTemplateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsedAside, setIsCollapsedAside] = React.useState(false);
  return (
    <DashboardTemplateContext.Provider
      value={{ isCollapsedAside, setIsCollapsedAside }}
    >
      {children}
    </DashboardTemplateContext.Provider>
  );
}
