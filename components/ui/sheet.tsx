import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;

export const SheetContent = ({
  className,
  side = "left",
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  side?: "left" | "right";
}) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-slate-900/30" />
    <DialogPrimitive.Content
      className={cn(
        "fixed inset-y-0 z-50 w-80 bg-white shadow-xl focus:outline-none",
        side === "left" ? "left-0" : "right-0",
        className
      )}
      {...props}
    />
  </DialogPrimitive.Portal>
);
