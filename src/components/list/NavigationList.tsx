import { DashboardTemplateContext } from "@/providers/DashboardTemplateContext";
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

type NavLinkType = {
  id: number;
  path: string;
  label: string;
  icon: React.ReactNode;
};

const NavLinksList: NavLinkType[] = [
  { id: 1, label: "dashboard", path: "/", icon: <MdDashboard size={24} /> },
  {
    id: 2,
    label: "clientes",
    path: "/clientes",
    icon: <MdPeopleAlt size={24} />,
  },
];
export default function NavigationList() {
  const { isCollapsedAside } = React.useContext(DashboardTemplateContext);
  return (
    <nav className='w-fit mx-auto space-y-4'>
      {NavLinksList.map((item: NavLinkType) => (
        <Link
          href={item.path}
          key={item.id}
          className='flex items-center gap-2 py-2'
        >
          <div>{item.icon}</div>
          <span
            className={`${
              isCollapsedAside === false ? "hidden" : "block"
            } text-lg font-semibold`}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
