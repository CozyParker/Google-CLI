"use client";

import { DataTable } from "@/components/dashboard/DataTable";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { classGroups, sessions } from "@/lib/mock";
import { Button } from "@/components/ui/button";
import { Layers, Plus } from "lucide-react";

export default function ClassesPage() {
  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Classes & Cohorts</h1>
            <p className="text-sm text-slate-600">
              Manage rosters, schedules, and operational readiness.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "New cohort", icon: <Plus className="h-4 w-4" /> },
              { label: "Assign tutor", variant: "outline" },
              { label: "Audit schedule", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Active groups</CardTitle>
              <CardDescription>Roster size, cadence, and subject focus.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Layers className="h-4 w-4" /> Import classes
            </Button>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={[
                { key: "name", header: "Class" },
                { key: "subject", header: "Subject" },
                { key: "level", header: "Level" },
                { key: "schedule", header: "Schedule" },
                {
                  key: "students",
                  header: "Students",
                  render: (item) => (
                    <Badge variant={item.students > 18 ? "warning" : "neutral"}>
                      {item.students} enrolled
                    </Badge>
                  )
                }
              ]}
              data={classGroups}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming sessions</CardTitle>
            <CardDescription>Verify facilitators and room readiness.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {sessions.slice(0, 4).map((session) => (
              <div key={session.id} className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{session.title}</p>
                    <p className="text-xs text-slate-600">
                      {session.type} · {session.time}
                    </p>
                  </div>
                  <Badge variant="neutral">{session.status}</Badge>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm">Launch</Button>
                  <Button size="sm" variant="outline">
                    Prep deck
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
            title="Readiness"
            insights={[
              { title: "Roster health", description: "2 cohorts near capacity.", badge: { label: "Review", variant: "warning" } },
              { title: "Coverage", description: "Substitute needed for Thursday lab.", badge: { label: "Assign", variant: "danger" } },
              { title: "Curriculum", description: "Upload new SAT drill set by Friday.", badge: { label: "Upcoming", variant: "neutral" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Readiness insights</summary>
          <p className="mt-2 text-sm text-slate-700">2 cohorts near capacity. Substitute needed for Thursday lab.</p>
        </details>
      </div>
    </div>
  );
}
