"use client";

import { useState } from "react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { revisionPlans } from "@/lib/mock";
import { Lightbulb, Wand2 } from "lucide-react";

export default function RevisionPage() {
  const [focus, setFocus] = useState("Quadratics");
  const [generated, setGenerated] = useState<typeof revisionPlans>(revisionPlans);

  const handleGenerate = () => {
    setGenerated([
      ...revisionPlans,
      {
        id: "generated",
        student: "New plan",
        focusAreas: [focus, "Confidence"],
        cadence: "2x weekly visual drills",
        owner: "Amelia Rivers",
        startDate: "2024-06-06"
      }
    ]);
  };

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Revision & Reinforcement Planner</h1>
            <p className="text-sm text-slate-600">
              Generate weak-area plans with cadence, owner, and quick publishing.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "New plan", icon: <Wand2 className="h-4 w-4" /> },
              { label: "Share template", variant: "outline" },
              { label: "Send reminders", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Weak-area based generator</CardTitle>
            <CardDescription>Define focus, cadence, and notes to create plans.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3 md:grid-cols-3">
              <Input
                placeholder="Focus area"
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
              />
              <Input placeholder="Cadence (e.g., 3x weekly)" defaultValue="3x weekly drills" />
              <Input placeholder="Owner" defaultValue="Amelia Rivers" />
            </div>
            <Textarea placeholder="Notes for tutor handoff" />
            <Button className="gap-2" onClick={handleGenerate}>
              <Wand2 className="h-4 w-4" /> Generate plan
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generated plans</CardTitle>
            <CardDescription>Share, export, or send nudges to tutors.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {generated.map((plan) => (
              <div key={plan.id} className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{plan.student}</p>
                  <Badge variant="neutral">{plan.cadence}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-700">
                  Focus: {plan.focusAreas.join(", ")}
                </p>
                <p className="text-xs text-slate-500">Owner: {plan.owner}</p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm">Publish</Button>
                  <Button size="sm" variant="outline">
                    Export
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="hidden xl:block">
          <InsightPanel
            title="Reinforcement tips"
            insights={[
              { title: "Visual learners", description: "Add diagrams to circuits and waves.", badge: { label: "Add visuals", variant: "success" } },
              { title: "Cadence drift", description: "2 plans missed last week.", badge: { label: "Nudge", variant: "warning" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Insights</summary>
          <p className="mt-2 text-sm text-slate-700">Add visuals to STEM plans and nudge missed cadences.</p>
        </details>
        <Card className="border-dashed bg-slate-50">
          <CardContent className="flex gap-3 py-4 text-sm text-slate-700">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Keep plans concise: focus area + cadence + owner + success metric.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
