import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function QuickActions({
  actions,
  className
}: {
  actions: { label: string; variant?: "default" | "outline" | "ghost"; icon?: ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {actions.map((action) => (
        <Button
          key={action.label}
          variant={action.variant === "outline" ? "outline" : action.variant === "ghost" ? "ghost" : "default"}
          className="gap-2"
        >
          {action.icon}
          {action.label}
        </Button>
      ))}
    </div>
  );
}
