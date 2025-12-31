import Link from "next/link";
import { LayoutDashboard, Layers, BarChart3, ClipboardCheck, FileEdit, RefreshCcw, Sparkles, Gamepad2, FolderKanban, FileText, Workflow, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
};

const iconMap: Record<string, React.ReactNode> = {
  "/": <LayoutDashboard className="h-4 w-4" />,
  "/classes": <Layers className="h-4 w-4" />,
  "/progress": <BarChart3 className="h-4 w-4" />,
  "/homework": <ClipboardCheck className="h-4 w-4" />,
  "/assessments": <FileEdit className="h-4 w-4" />,
  "/revision": <RefreshCcw className="h-4 w-4" />,
  "/visuals": <Sparkles className="h-4 w-4" />,
  "/gamification": <Gamepad2 className="h-4 w-4" />,
  "/projects": <FolderKanban className="h-4 w-4" />,
  "/reports": <FileText className="h-4 w-4" />,
  "/automations": <Workflow className="h-4 w-4" />,
  "/settings": <Settings className="h-4 w-4" />
};

export default function SidebarNav({
  items,
  activePath
}: {
  items: NavItem[];
  activePath: string | null;
}) {
  return (
    <div className="flex h-full w-72 flex-col bg-white">
      <div className="flex h-16 items-center border-b border-slate-200 px-5 text-left">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Tutor Ops
          </p>
          <p className="text-lg font-semibold text-slate-900">
            Admin Dashboard
          </p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = activePath === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  {iconMap[item.href] ?? <LayoutDashboard className="h-4 w-4" />}
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-slate-200 px-4 py-3 text-xs text-slate-500">
        Fast lane for tutor decisions, with dummy data only.
      </div>
    </div>
  );
}
