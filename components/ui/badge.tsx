import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants: Record<string, string> = {
  default: "bg-blue-50 text-blue-700 border border-blue-200",
  success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border border-amber-200",
  danger: "bg-rose-50 text-rose-700 border border-rose-200",
  neutral: "bg-slate-100 text-slate-700 border border-slate-200"
};

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof badgeVariants;
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
}
