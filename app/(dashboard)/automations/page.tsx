"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { DataTable } from "@/components/dashboard/DataTable";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { automationRules } from "@/lib/mock";
import { Plus, Workflow } from "lucide-react";

export default function AutomationsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Automation & Rules</h1>
            <p className="text-sm text-slate-600">
              Tutor-friendly triggers that send reminders and nudges.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "New rule", icon: <Plus className="h-4 w-4" /> },
              { label: "Pause all", variant: "outline" },
              { label: "View logs", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Rules list</CardTitle>
              <CardDescription>Trigger → action → channel.</CardDescription>
            </div>
            <Button size="sm" onClick={() => setOpen(true)} className="gap-2">
              <Workflow className="h-4 w-4" /> Create rule
            </Button>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={[
                { key: "title", header: "Rule" },
                { key: "trigger", header: "Trigger" },
                { key: "action", header: "Action" },
                { key: "channel", header: "Channel" },
                {
                  key: "status",
                  header: "Status",
                  render: (item) => (
                    <Badge variant={item.status === "active" ? "success" : "warning"}>
                      {item.status}
                    </Badge>
                  )
                }
              ]}
              data={automationRules}
              emptyLabel="No automation rules yet."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Execution log (mock)</CardTitle>
            <CardDescription>Recent actions from rules.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-700">
            {automationRules.slice(0, 3).map((rule) => (
              <div key={rule.id} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                Triggered: {rule.title} · Channel: {rule.channel}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="hidden xl:block">
          <InsightPanel
            title="Stability"
            insights={[
              { title: "Active rules", description: `${automationRules.filter((r) => r.status === "active").length} running`, badge: { label: "Healthy", variant: "success" } },
              { title: "Paused", description: `${automationRules.filter((r) => r.status === "paused").length} paused`, badge: { label: "Review", variant: "warning" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Rule insights</summary>
          <p className="mt-2 text-sm text-slate-700">Review paused rules and monitor active runs.</p>
        </details>
      </div>

      <RuleModal open={open} onOpenChange={setOpen} />
    </div>
  );
}

function RuleModal({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-900/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl focus:outline-none">
          <Dialog.Title className="text-lg font-semibold">Create rule</Dialog.Title>
          <Dialog.Description className="text-sm text-slate-600">
            Define trigger, action, and delivery channel.
          </Dialog.Description>
          <div className="mt-4 space-y-3">
            <Input placeholder="Rule title" />
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Trigger" />
              <Input placeholder="Action" />
            </div>
            <Select defaultValue="email">
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="in-app">In-app</option>
            </Select>
          </div>
          <div className="mt-5 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button>Create</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
