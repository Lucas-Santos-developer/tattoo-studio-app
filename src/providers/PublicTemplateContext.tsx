import React from "react";

type GlobalContextType = {
  isActiveMobileMenu: boolean;
  setIsActiveMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isScrolledHeader: boolean;
  setIsScrolledHeader: React.Dispatch<React.SetStateAction<boolean>>;
};

const PublicTemplateContextDefaultValues: GlobalContextType = {
  isActiveMobileMenu: false,
  setIsActiveMobileMenu: () => {},
  isScrolledHeader: false,
  setIsScrolledHeader: () => {},
};

export const PublicTemplateContext = React.createContext(
  PublicTemplateContextDefaultValues
);

export default function PublicTemplateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActiveMobileMenu, setIsActiveMobileMenu] = React.useState(false);
  const [isScrolledHeader, setIsScrolledHeader] = React.useState(false);
  return (
    <PublicTemplateContext.Provider
      value={{
        isActiveMobileMenu,
        setIsActiveMobileMenu,
        isScrolledHeader,
        setIsScrolledHeader,
      }}
    >
      {children}
    </PublicTemplateContext.Provider>
  );
}
