import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export function EmptyState({
  title,
  description,
  action
}: {
  title: string;
  description: string;
  action?: { label: string; onClick?: () => void; href?: string };
}) {
  return (
    <Card className="border-dashed bg-slate-50">
      <CardContent className="flex flex-col items-center gap-2 py-10 text-center">
        <p className="text-base font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600 max-w-xl">{description}</p>
        {action && (
          <Button onClick={action.onClick}>
            {action.label}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
