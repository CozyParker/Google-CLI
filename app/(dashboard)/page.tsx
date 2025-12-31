"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/dashboard/DataTable";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { homeworkItems, evaluations, sessions, students } from "@/lib/mock";
import { CheckCircle2, Clock3, NotebookPen, ShieldAlert } from "lucide-react";

export default function Page() {
  const pendingHomework = homeworkItems.filter((item) => item.status === "pending");
  const pendingEvaluations = evaluations.filter((item) => item.status === "pending");
  const flaggedStudents = students.filter((s) => s.flagged);

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Tutor Ops · Today
          </p>
          <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">
                Today’s Command Center
              </h1>
              <p className="text-sm text-slate-600">
                Prioritize live sessions, approvals, evaluations, and interventions.
              </p>
            </div>
            <QuickActions
              actions={[
                { label: "Send reminders", icon: <Clock3 className="h-4 w-4" /> },
                { label: "Approve all", icon: <CheckCircle2 className="h-4 w-4" />, variant: "outline" },
                { label: "Create revision plan", icon: <NotebookPen className="h-4 w-4" />, variant: "ghost" }
              ]}
              className="justify-end"
            />
          </div>
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Today’s sessions</CardTitle>
              <CardDescription>Join live rooms and monitor readiness.</CardDescription>
            </div>
            <Button variant="outline">Start attendance</Button>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={[
                { key: "time", header: "Time" },
                { key: "title", header: "Class / Session" },
                { key: "type", header: "Type" },
                {
                  key: "status",
                  header: "Status",
                  render: (item) => (
                    <Badge
                      variant={
                        item.status === "live"
                          ? "success"
                          : item.status === "upcoming"
                          ? "neutral"
                          : "default"
                      }
                    >
                      {item.status}
                    </Badge>
                  )
                },
                {
                  key: "action",
                  header: "Action",
                  render: () => <Button size="sm">Join</Button>
                }
              ]}
              data={sessions}
            />
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Homework to review</CardTitle>
              <CardDescription>Pending submissions needing approval.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingHomework.slice(0, 4).map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-slate-600">{item.student}</p>
                  </div>
                  <Badge variant="warning">Due {item.due}</Badge>
                </div>
              ))}
              {pendingHomework.length === 0 && (
                <p className="text-sm text-slate-500">No pending homework today.</p>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Evaluations pending</CardTitle>
              <CardDescription>Quick score + feedback queue.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingEvaluations.slice(0, 4).map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                  <div>
                    <p className="text-sm font-medium">{item.student}</p>
                    <p className="text-xs text-slate-600">{item.category}</p>
                  </div>
                  <Badge variant="neutral">{item.score}%</Badge>
                </div>
              ))}
              {pendingEvaluations.length === 0 && (
                <p className="text-sm text-slate-500">No evaluations waiting.</p>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Students flagged</CardTitle>
              <CardDescription>Escalate support and send nudges.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {flaggedStudents.slice(0, 4).map((student) => (
                <div key={student.id} className="flex items-center justify-between rounded-lg bg-rose-50/60 p-3">
                  <div>
                    <p className="text-sm font-medium">{student.name}</p>
                    <p className="text-xs text-rose-700">{student.weakAreas.join(", ")}</p>
                  </div>
                  <Button variant="outline" size="sm">Flag actions</Button>
                </div>
              ))}
              {flaggedStudents.length === 0 && (
                <p className="text-sm text-slate-500">No flagged students today.</p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>At-risk insights</CardTitle>
              <CardDescription>AI-suggested interventions and quick sends.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <ShieldAlert className="h-4 w-4" /> Run risk scan
            </Button>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2">
            {students
              .filter((s) => s.flagged)
              .map((student) => (
                <div key={student.id} className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold">{student.name}</p>
                      <p className="text-xs text-slate-600">{student.cohort}</p>
                    </div>
                    <Badge variant="danger">At-risk</Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    Focus on {student.weakAreas.join(", ")}. Suggest short visual recap + two mastery checks.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button size="sm" variant="outline">
                      Send reminder
                    </Button>
                    <Button size="sm" variant="ghost">
                      Schedule revision
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
            caption="Live"
            insights={[
              {
                title: "Attendance risk",
                description: "3 students not checked in yet for Algebra.",
                badge: { label: "Monitor", variant: "warning" }
              },
              {
                title: "Feedback aging",
                description: "4 evaluations older than 48h.",
                badge: { label: "Act now", variant: "danger" }
              },
              {
                title: "Parent updates",
                description: "2 reports ready to share.",
                badge: { label: "Ready", variant: "success" }
              }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Insights</summary>
          <div className="mt-3 space-y-3 text-sm text-slate-700">
            <p>Attendance risk: 3 students not checked in yet for Algebra.</p>
            <p>Feedback aging: 4 evaluations older than 48h.</p>
            <p>Parent updates: 2 reports ready to share.</p>
          </div>
        </details>
      </div>
    </div>
  );
}
