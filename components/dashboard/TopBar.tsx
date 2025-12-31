import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarNav from "./SidebarNav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TopBarProps = {
  navItems: { href: string; label: string }[];
};

export function TopBar({ navItems }: TopBarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex items-center gap-3 px-4 py-3 lg:px-6">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80">
              <SidebarNav activePath={pathname} items={navItems} />
            </SheetContent>
          </Sheet>
        </div>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search students, classes, or tasks"
            className="pl-10"
          />
        </div>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium">
          <User className="h-4 w-4" />
          <span>Lead Tutor</span>
        </div>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white shadow-md lg:hidden">
        <div className="flex justify-between px-4 py-2 text-xs font-medium">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-md px-2 py-1 text-center",
                pathname === item.href ? "text-blue-600" : "text-slate-500"
              )}
            >
              <span className="truncate">
                {item.label.replace("Today’s ", "")}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
