"use client";

import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/dashboard/DataTable";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { homeworkItems } from "@/lib/mock";
import { CheckCircle2, Clock3, Send } from "lucide-react";

export default function HomeworkPage() {
  const [tab, setTab] = useState<"pending" | "scheduled" | "completed">("pending");

  const filtered = useMemo(
    () => homeworkItems.filter((item) => item.status === tab),
    [tab]
  );

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Homework & Practice Manager</h1>
            <p className="text-sm text-slate-600">
              Approve submissions, schedule practice, and close feedback loops fast.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "Bulk approve", icon: <CheckCircle2 className="h-4 w-4" /> },
              { label: "Schedule batch", variant: "outline" },
              { label: "Send nudges", icon: <Send className="h-4 w-4" />, variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Workflow tabs</CardTitle>
              <CardDescription>Track pending review, scheduled drops, and completed sets.</CardDescription>
            </div>
            <Badge variant="neutral">Bulk actions ready</Badge>
          </CardHeader>
          <CardContent>
            <Tabs value={tab} onValueChange={(value) => setTab(value as any)}>
              <TabsList>
                <TabsTrigger value="pending">Pending Review</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="pending">
                <HomeworkTable data={filtered} emptyLabel="No pending homework." />
              </TabsContent>
              <TabsContent value="scheduled">
                <HomeworkTable data={filtered} emptyLabel="No scheduled homework." />
              </TabsContent>
              <TabsContent value="completed">
                <HomeworkTable data={filtered} emptyLabel="No completed homework." />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bulk action shortcuts</CardTitle>
            <CardDescription>Apply feedback, publish status, or reschedule.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {["Approve all pending", "Send reminder to late", "Reschedule to tomorrow"].map((action) => (
              <div key={action} className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm font-semibold text-slate-800">
                {action}
                <p className="mt-1 text-xs font-normal text-slate-600">
                  Confirm and notify assigned tutor.
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="hidden xl:block">
          <InsightPanel
            title="Queue health"
            insights={[
              { title: "Pending today", description: `${homeworkItems.filter((i) => i.status === "pending").length} items waiting`, badge: { label: "Today", variant: "warning" } },
              { title: "Scheduled", description: `${homeworkItems.filter((i) => i.status === "scheduled").length} upcoming drops`, badge: { label: "Planned", variant: "neutral" } },
              { title: "Completion", description: `${homeworkItems.filter((i) => i.status === "completed").length} completed`, badge: { label: "Done", variant: "success" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Queue insights</summary>
          <p className="mt-2 text-sm text-slate-700">Monitor pending, scheduled, and completed homework volume.</p>
        </details>
      </div>
    </div>
  );
}

function HomeworkTable({
  data,
  emptyLabel
}: {
  data: typeof homeworkItems;
  emptyLabel: string;
}) {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="gap-2">
          <Clock3 className="h-4 w-4" /> Bulk defer
        </Button>
        <Button size="sm" className="gap-2">
          <CheckCircle2 className="h-4 w-4" /> Mark reviewed
        </Button>
      </div>
      <DataTable
        columns={[
          { key: "title", header: "Homework" },
          { key: "student", header: "Student" },
          { key: "due", header: "Due" },
          {
            key: "priority",
            header: "Priority",
            render: (item) => (
              <Badge variant={item.priority === "high" ? "danger" : item.priority === "medium" ? "warning" : "neutral"}>
                {item.priority}
              </Badge>
            )
          },
          {
            key: "actions",
            header: "Actions",
            render: () => (
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  View
                </Button>
                <Button size="sm" variant="outline">
                  Approve
                </Button>
              </div>
            )
          }
        ]}
        data={data}
        emptyLabel={emptyLabel}
      />
    </div>
  );
}
