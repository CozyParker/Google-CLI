import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;
export const TabsList = ({ className, ...props }: TabsPrimitive.TabsListProps) => (
  <TabsPrimitive.List
    className={cn(
      "inline-flex items-center rounded-lg border border-slate-200 bg-white p-1 text-sm",
      className
    )}
    {...props}
  />
);
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = ({
  className,
  ...props
}: TabsPrimitive.TabsTriggerProps) => (
  <TabsPrimitive.Trigger
    className={cn(
      "inline-flex min-w-[120px] items-center justify-center rounded-md px-3 py-1.5 font-medium text-slate-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700",
      className
    )}
    {...props}
  />
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = ({
  className,
  ...props
}: TabsPrimitive.TabsContentProps) => (
  <TabsPrimitive.Content
    className={cn("mt-3 focus-visible:outline-none", className)}
    {...props}
  />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;
