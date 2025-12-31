"use client";

import { usePathname } from "next/navigation";
import SidebarNav from "@/components/dashboard/SidebarNav";
import React from "react";
import { TopBar } from "@/components/dashboard/TopBar";

const navItems = [
  { href: "/", label: "Today’s Command Center" },
  { href: "/classes", label: "Classes & Cohorts" },
  { href: "/progress", label: "Student Progress & Evaluation" },
  { href: "/homework", label: "Homework & Practice Manager" },
  { href: "/assessments", label: "Question & Assessment Builder" },
  { href: "/revision", label: "Revision & Reinforcement Planner" },
  { href: "/visuals", label: "Visual Teaching Tools" },
  { href: "/gamification", label: "Gamification Controls" },
  { href: "/projects", label: "Project & Case Oversight" },
  { href: "/reports", label: "Reports & Parent-Ready Summaries" },
  { href: "/automations", label: "Automation & Rules" },
  { href: "/settings", label: "Tutor Settings & Preferences" }
];

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <div className="hidden lg:block border-r border-slate-200 bg-white">
          <SidebarNav activePath={pathname} items={navItems} />
        </div>
        <div className="flex-1">
          <TopBar navItems={navItems} />
          <main className="px-4 py-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
