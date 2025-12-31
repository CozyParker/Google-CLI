"use client";

import { useState } from "react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Sparkles, ToggleLeft } from "lucide-react";

export default function GamificationPage() {
  const [reward, setReward] = useState(true);
  const [streaks, setStreaks] = useState(false);

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Gamification Controls</h1>
            <p className="text-sm text-slate-600">
              Tutor-facing toggles and rule editors—no student UI.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "Save rules", icon: <Sparkles className="h-4 w-4" /> },
              { label: "Preview impact", variant: "outline" },
              { label: "Pause all", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Toggles</CardTitle>
            <CardDescription>Enable or pause reward systems quickly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <ToggleRow
              label="Reward badges"
              description="Allow tutors to award badges for behaviors."
              value={reward}
              onChange={setReward}
            />
            <ToggleRow
              label="Consistency streaks"
              description="Track weekly attendance streaks."
              value={streaks}
              onChange={setStreaks}
            />
            <ToggleRow
              label="Time-boxed quests"
              description="Add short challenges tied to revision plans."
              value={true}
              onChange={() => {}}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rule editor</CardTitle>
            <CardDescription>Define triggers → actions → channel.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Flag resolution", "Weekly streak", "Homework early submit"].map((rule) => (
              <div key={rule} className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{rule}</p>
                    <p className="text-xs text-slate-600">Trigger → action → channel</p>
                  </div>
                  <Badge variant="neutral">Tutor controlled</Badge>
                </div>
                <div className="mt-2 grid gap-2 md:grid-cols-3">
                  <Input placeholder="Trigger" defaultValue="Completed 3 revision plans" />
                  <Input placeholder="Action" defaultValue="Grant bonus drill" />
                  <Input placeholder="Channel" defaultValue="In-app" />
                </div>
                <div className="mt-2 flex gap-2">
                  <Button size="sm">Save</Button>
                  <Button size="sm" variant="outline">
                    Preview
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
            title="Impact checks"
            insights={[
              { title: "Reward usage", description: "12 badges issued this week.", badge: { label: "Healthy", variant: "success" } },
              { title: "Risk", description: "Avoid over-rewarding homework speed.", badge: { label: "Caution", variant: "warning" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Insights</summary>
          <p className="mt-2 text-sm text-slate-700">Monitor reward usage and keep focus on mastery.</p>
        </details>
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  description,
  value,
  onChange
}: {
  label: string;
  description: string;
  value?: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-xs text-slate-600">{description}</p>
      </div>
      <Switch checked={value} onCheckedChange={onChange} />
    </div>
  );
}
