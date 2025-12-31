"use client";

import { useMemo, useState } from "react";
import { DataTable } from "@/components/dashboard/DataTable";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { students } from "@/lib/mock";
import { NotebookPen, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgressPage() {
  const [cohort, setCohort] = useState<string>("all");
  const [search, setSearch] = useState("");
  const cohorts = useMemo(
    () => Array.from(new Set(students.map((s) => s.cohort))),
    []
  );

  const filtered = students.filter((s) => {
    const matchesCohort = cohort === "all" || s.cohort === cohort;
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchesCohort && matchesSearch;
  });

  const [selectedId, setSelectedId] = useState<string | null>(filtered[0]?.id ?? null);
  const selectedStudent = filtered.find((s) => s.id === selectedId) ?? filtered[0];

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Student Progress & Evaluation</h1>
            <p className="text-sm text-slate-600">
              Track mastery, recent errors, and evaluator notes in one pass.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "Add evaluation", icon: <NotebookPen className="h-4 w-4" /> },
              { label: "Export cohort", variant: "outline" },
              { label: "Notify guardians", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <CardTitle>Student list</CardTitle>
              <CardDescription>Cohort filtering with mastery snapshots.</CardDescription>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Select
                value={cohort}
                onChange={(e) => setCohort(e.target.value)}
                className="w-48"
              >
                <option value="all">All cohorts</option>
                {cohorts.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Select>
              <Input
                placeholder="Search students"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-56"
              />
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" /> Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={[
                { key: "name", header: "Student" },
                { key: "cohort", header: "Cohort" },
                {
                  key: "mastery",
                  header: "Mastery",
                  render: (item) => (
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: `${item.mastery}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-700">{item.mastery}%</span>
                    </div>
                  )
                },
                {
                  key: "flagged",
                  header: "Status",
                  render: (item) => (
                    <Badge variant={item.flagged ? "danger" : "success"}>
                      {item.flagged ? "Flagged" : "On-track"}
                    </Badge>
                  )
                },
                {
                  key: "actions",
                  header: "Actions",
                  render: (item) => (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setSelectedId(item.id)}
                    >
                      View
                    </Button>
                  )
                }
              ]}
              data={filtered}
              emptyLabel="No students match the filters."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent evaluations</CardTitle>
            <CardDescription>Mastery trends with recency and weak areas.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {filtered.slice(0, 4).map((s) => (
              <div key={s.id} className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{s.name}</p>
                    <p className="text-xs text-slate-600">{s.cohort}</p>
                  </div>
                  <Badge variant={s.flagged ? "danger" : "success"}>
                    {s.mastery}% mastery
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-slate-700">
                  Weak areas: {s.weakAreas.join(", ")}
                </p>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" variant="outline">
                    Add note
                  </Button>
                  <Button size="sm" variant="ghost">
                    Start revision
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="hidden xl:block">
          <StudentDrawer student={selectedStudent} />
          <div className="mt-4">
            <InsightPanel
              insights={[
                {
                  title: "Mastery drift",
                  description: "Sofia and Caleb losing 5% over last two checks.",
                  badge: { label: "Watch", variant: "warning" }
                },
                {
                  title: "Notes aging",
                  description: "Update progress notes for 3 students > 7 days.",
                  badge: { label: "Update", variant: "neutral" }
                }
              ]}
            />
          </div>
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">
            Mastery snapshot
          </summary>
          {selectedStudent ? (
            <div className="mt-3 space-y-2 text-sm">
              <p className="font-semibold">{selectedStudent.name}</p>
              <p>Mastery: {selectedStudent.mastery}%</p>
              <p>Weak: {selectedStudent.weakAreas.join(", ")}</p>
              <p className="text-slate-600">{selectedStudent.notes}</p>
            </div>
          ) : (
            <p className="mt-2 text-sm text-slate-600">Select a student to preview.</p>
          )}
        </details>
      </div>
    </div>
  );
}

function StudentDrawer({ student }: { student: typeof students[number] | undefined }) {
  if (!student) {
    return null;
  }
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          {student.name}
          <Badge variant={student.flagged ? "danger" : "success"}>
            {student.flagged ? "Flagged" : "On-track"}
          </Badge>
        </CardTitle>
        <CardDescription>{student.cohort}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-xs uppercase text-slate-500">Mastery snapshot</p>
          <div className="mt-1 flex items-center gap-2">
            <div className="h-2 w-full rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: `${student.mastery}%` }}
              />
            </div>
            <span className="text-sm font-semibold">{student.mastery}%</span>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase text-slate-500">Recent errors</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {student.weakAreas.map((area) => (
              <li key={area}>{area} - assign targeted drill</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase text-slate-500">Tutor notes</p>
          <p className="mt-1 text-sm text-slate-700">{student.notes}</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm">Add intervention</Button>
          <Button size="sm" variant="outline">
            Parent-ready note
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
