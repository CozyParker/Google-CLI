"use client";

import { useState } from "react";
import { InsightPanel } from "@/components/dashboard/InsightPanel";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Settings2 } from "lucide-react";

export default function SettingsPage() {
  const [strictness, setStrictness] = useState(6);

  return (
    <div className="section-grid">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold">Tutor Settings & Preferences</h1>
            <p className="text-sm text-slate-600">
              Configure tone, limits, and operational defaults.
            </p>
          </div>
          <QuickActions
            actions={[
              { label: "Save changes", icon: <Settings2 className="h-4 w-4" /> },
              { label: "Reset", variant: "outline" },
              { label: "Preview", variant: "ghost" }
            ]}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Set communication tone, strictness, and limits.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-800">
                Strictness level: {strictness}
              </label>
              <input
                type="range"
                min={1}
                max={10}
                value={strictness}
                onChange={(e) => setStrictness(Number(e.target.value))}
                className="mt-2 w-full accent-blue-600"
              />
              <p className="text-xs text-slate-600">Higher = tighter deadlines and reminders.</p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Select defaultValue="professional">
                <option value="professional">Tone: Professional</option>
                <option value="concise">Tone: Concise</option>
                <option value="warm">Tone: Warm</option>
              </Select>
              <Input placeholder="Daily action limit" defaultValue="25" />
            </div>
            <Textarea placeholder="Default tutor note footer" />
            <div className="flex justify-end gap-2">
              <Button variant="ghost">Cancel</Button>
              <Button>Save</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="hidden xl:block">
          <InsightPanel
            title="Guardrails"
            insights={[
              { title: "Reminder limit", description: "Set to 25 per day.", badge: { label: "Balanced", variant: "success" } },
              { title: "Tone", description: "Professional tone active.", badge: { label: "Default", variant: "neutral" } }
            ]}
          />
        </div>
        <details className="xl:hidden rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold">Guardrails</summary>
          <p className="mt-2 text-sm text-slate-700">Reminder limits and tone defaults applied.</p>
        </details>
      </div>
    </div>
  );
}
