"use client";

import { useState } from "react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { reports } from "@/lib/mock";
import { FileDown, PlayCircle } from "lucide-react";

export default function ReportsPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Reports & Parent-Ready Summaries</h1>
            <p className="text-sm text-slate-600">
              Generate concise summaries and export to share with parents.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "Generate report", icon: <PlayCircle className="h-4 w-4" /> },
              { label: "Export all", variant: "outline" },
              { label: "Share via email", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Report generator wizard</CardTitle>
            <CardDescription>Three quick steps to craft a summary.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <Button
                  key={s}
                  variant={step === s ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStep(s)}
                >
                  Step {s}
                </Button>
              ))}
            </div>
            {step === 1 && (
              <div className="grid gap-3 md:grid-cols-2">
                <Input placeholder="Student" />
                <Input placeholder="Reporting period" defaultValue="May 2024" />
              </div>
            )}
            {step === 2 && (
              <Textarea placeholder="Highlights and growth areas" />
            )}
            {step === 3 && (
              <div className="grid gap-3 md:grid-cols-3">
                <Input placeholder="Recommended actions" />
                <Input placeholder="Parent tone" defaultValue="Concise, reassuring" />
                <Input placeholder="Next check-in" defaultValue="Next Monday" />
              </div>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="ghost">Back</Button>
              <Button>Continue</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Report queue</CardTitle>
            <CardDescription>Drafts, ready to send, and already shared.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {reports.map((report) => (
              <div key={report.id} className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{report.student}</p>
                    <p className="text-xs text-slate-600">{report.period}</p>
                  </div>
                  <Badge
                    variant={
                      report.status === "ready"
                        ? "success"
                        : report.status === "draft"
                        ? "warning"
                        : "neutral"
                    }
                  >
                    {report.status}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-slate-700">{report.nextActions}</p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline">
                    Preview
                  </Button>
                  <Button size="sm" className="gap-2">
                    <FileDown className="h-4 w-4" /> Export
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
            title="Share readiness"
            insights={[
              { title: "Ready to send", description: `${reports.filter((r) => r.status === "ready").length} reports ready.`, badge: { label: "Send", variant: "success" } },
              { title: "Drafts", description: `${reports.filter((r) => r.status === "draft").length} in draft.`, badge: { label: "Finish", variant: "warning" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Share readiness</summary>
          <p className="mt-2 text-sm text-slate-700">Send ready reports and finish drafts.</p>
        </details>
      </div>
    </div>
  );
}
