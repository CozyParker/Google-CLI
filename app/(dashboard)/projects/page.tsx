"use client";

import { projects } from "@/lib/mock";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, PlusCircle } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Project & Case Oversight</h1>
            <p className="text-sm text-slate-600">
              Track milestones, rubrics, and delivery readiness.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "New project", icon: <PlusCircle className="h-4 w-4" /> },
              { label: "Assign rubric", variant: "outline" },
              { label: "Share feedback", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Milestones</CardTitle>
              <CardDescription>Visualize progress across projects.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <ClipboardList className="h-4 w-4" /> Export status
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{project.name}</p>
                    <p className="text-xs text-slate-600">{project.cohort}</p>
                  </div>
                  <Badge variant="neutral">
                    {project.milestones.filter((m) => m.status === "done").length}/
                    {project.milestones.length} done
                  </Badge>
                </div>
                <div className="mt-3 grid gap-2 md:grid-cols-3">
                  {project.milestones.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 text-xs font-semibold"
                    >
                      <span>{m.label}</span>
                      <Badge
                        variant={
                          m.status === "done"
                            ? "success"
                            : m.status === "in-progress"
                            ? "warning"
                            : "neutral"
                        }
                      >
                        {m.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rubric checklist</CardTitle>
            <CardDescription>Standardized criteria for tutor reviews.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {projects[0].rubric.map((item) => (
              <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm font-semibold text-slate-800">
                {item}
                <p className="text-xs font-normal text-slate-600">
                  Ensure evidence before marking complete.
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="hidden xl:block">
          <InsightPanel
            title="Oversight"
            insights={[
              { title: "Upcoming defenses", description: "2 projects presenting this week.", badge: { label: "Schedule", variant: "warning" } },
              { title: "Rubric coverage", description: "Add creativity criterion for Lit projects.", badge: { label: "Add", variant: "neutral" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Oversight insights</summary>
          <p className="mt-2 text-sm text-slate-700">2 projects presenting this week. Check rubric coverage.</p>
        </details>
      </div>
    </div>
  );
}
