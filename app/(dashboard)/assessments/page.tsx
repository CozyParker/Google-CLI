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
import { Textarea } from "@/components/ui/textarea";
import { questions } from "@/lib/mock";
import { FilePlus, SlidersHorizontal } from "lucide-react";

export default function AssessmentsPage() {
  const [open, setOpen] = useState<"mcq" | "case" | null>(null);

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Question & Assessment Builder</h1>
            <p className="text-sm text-slate-600">
              Refresh question banks, assign difficulty, and publish quickly.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "Create MCQ", icon: <FilePlus className="h-4 w-4" /> },
              { label: "Create Case Study", variant: "outline" },
              { label: "Import bank", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Question bank</CardTitle>
              <CardDescription>Filter by type and difficulty for reuse.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </Button>
          </CardHeader>
          <CardContent>
            <div className="mb-3 flex flex-wrap gap-2">
              <Button size="sm" onClick={() => setOpen("mcq")}>
                Create MCQ
              </Button>
              <Button size="sm" variant="outline" onClick={() => setOpen("case")}>
                Create Case Study
              </Button>
            </div>
            <DataTable
              columns={[
                { key: "topic", header: "Topic" },
                { key: "type", header: "Type" },
                { key: "difficulty", header: "Difficulty" },
                {
                  key: "usage",
                  header: "Usage",
                  render: (item) => (
                    <Badge variant="neutral">{item.usage} uses</Badge>
                  )
                },
                { key: "updatedAt", header: "Updated" }
              ]}
              data={questions}
              emptyLabel="No questions yet."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Templates</CardTitle>
            <CardDescription>Save time with vetted shells for new prompts.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {["Concept check", "Application", "Case anchor"].map((template) => (
              <div key={template} className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm">
                <p className="font-semibold text-slate-900">{template}</p>
                <p className="text-xs text-slate-600">
                  Prefilled stem, distractors, and scoring guide.
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="hidden xl:block">
          <InsightPanel
            title="Bank health"
            insights={[
              { title: "Coverage gaps", description: "Add 3 more probability MCQs.", badge: { label: "Add", variant: "warning" } },
              { title: "Recency", description: "5 items older than 90 days.", badge: { label: "Refresh", variant: "danger" } },
              { title: "Balance", description: "Case studies at 30% usage—on track.", badge: { label: "Good", variant: "success" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Bank insights</summary>
          <p className="mt-2 text-sm text-slate-700">Add probability MCQs and refresh aged items.</p>
        </details>
      </div>

      <AssessmentModal
        title="Create MCQ"
        open={open === "mcq"}
        onOpenChange={(val) => setOpen(val ? "mcq" : null)}
      />
      <AssessmentModal
        title="Create Case Study"
        open={open === "case"}
        onOpenChange={(val) => setOpen(val ? "case" : null)}
      />
    </div>
  );
}

function AssessmentModal({
  title,
  open,
  onOpenChange
}: {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-900/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl focus:outline-none">
          <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
          <Dialog.Description className="text-sm text-slate-600">
            Enter prompt, answer key, and tagging for faster publishing.
          </Dialog.Description>
          <div className="mt-4 space-y-3">
            <Input placeholder="Prompt stem" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Answer key" />
              <Input placeholder="Difficulty" />
            </div>
            <Textarea placeholder="Tutor guidance or rubric" />
          </div>
          <div className="mt-5 flex justify-end gap-2">
            <Button variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button>Save</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
