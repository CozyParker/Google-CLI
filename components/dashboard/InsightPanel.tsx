import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Insight = {
  title: string;
  description: string;
  badge?: { label: string; variant?: "default" | "success" | "warning" | "danger" | "neutral" };
};

export function InsightPanel({
  insights,
  title = "Insights",
  caption
}: {
  insights: Insight[];
  title?: string;
  caption?: string;
}) {
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <span>{title}</span>
          {caption && <span className="text-xs font-medium text-slate-500">{caption}</span>}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="rounded-lg border border-slate-100 bg-slate-50/60 p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {insight.title}
                </p>
                <p className="text-xs text-slate-600">{insight.description}</p>
              </div>
              {insight.badge && (
                <Badge variant={insight.badge.variant ?? "neutral"}>
                  {insight.badge.label}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
