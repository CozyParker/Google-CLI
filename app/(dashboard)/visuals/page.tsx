"use client";

import { useState } from "react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Image as ImageIcon, Sparkles } from "lucide-react";

export default function VisualsPage() {
  const [prompt, setPrompt] = useState("Illustrate quadratic vertex shift");
  const [preview, setPreview] = useState(
    "Diagram placeholder: arrows showing vertex shift on parabola"
  );

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Visual Teaching Tools</h1>
            <p className="text-sm text-slate-600">
              Generate diagrams and visual anchors for tricky concepts.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "Generate diagram", icon: <Sparkles className="h-4 w-4" /> },
              { label: "Save library", variant: "outline" },
              { label: "Share to class", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Generate diagram</CardTitle>
            <CardDescription>Mock prompt input; preview before sharing.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <Input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the diagram"
              />
              <Textarea placeholder="Add tutor notes for this visual" />
              <Button
                className="gap-2"
                onClick={() =>
                  setPreview(`Diagram placeholder: ${prompt.slice(0, 80)}...`)
                }
              >
                <Sparkles className="h-4 w-4" /> Generate preview
              </Button>
            </div>
            <div className="flex items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
              <div className="space-y-2 text-sm text-slate-700">
                <ImageIcon className="mx-auto h-8 w-8 text-slate-400" />
                <p className="font-semibold">Preview</p>
                <p>{preview}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visual library</CardTitle>
            <CardDescription>Recent visuals and classroom tags.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {["Circuit flow", "DBQ evidence map", "Sat data table", "Parabola shift"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-white p-3 shadow-sm"
                >
                  <div>
                    <p className="text-sm font-semibold">{item}</p>
                    <p className="text-xs text-slate-600">Tag: share with algebra cohort</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Share
                  </Button>
                </div>
              )
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="hidden xl:block">
          <InsightPanel
            title="Visual cues"
            insights={[
              { title: "Math needs visuals", description: "Quadratics, probability, geometry visuals requested.", badge: { label: "Priority", variant: "warning" } },
              { title: "Reuse count", description: "12 visuals reused this week.", badge: { label: "Healthy", variant: "success" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Visual insights</summary>
          <p className="mt-2 text-sm text-slate-700">Quadratics visuals are most requested.</p>
        </details>
      </div>
    </div>
  );
}
