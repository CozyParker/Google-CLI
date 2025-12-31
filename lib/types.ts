export type Tutor = {
  id: string;
  name: string;
  role: string;
  focus: string;
  contact: string;
};

export type ClassGroup = {
  id: string;
  name: string;
  subject: string;
  level: string;
  schedule: string;
  students: number;
};

export type Session = {
  id: string;
  time: string;
  title: string;
  type: string;
  classId: string;
  status: "upcoming" | "live" | "completed";
  joinLink: string;
};

export type Student = {
  id: string;
  name: string;
  cohort: string;
  mastery: number;
  flagged: boolean;
  lastEvaluation: string;
  notes: string;
  weakAreas: string[];
};

export type HomeworkItem = {
  id: string;
  title: string;
  student: string;
  due: string;
  status: "pending" | "scheduled" | "completed";
  priority: "high" | "medium" | "low";
};

export type EvaluationItem = {
  id: string;
  student: string;
  category: string;
  score: number;
  submittedAt: string;
  status: "pending" | "reviewed";
};

export type QuestionItem = {
  id: string;
  type: "MCQ" | "Case Study";
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  usage: number;
  updatedAt: string;
};

export type RevisionPlan = {
  id: string;
  student: string;
  focusAreas: string[];
  cadence: string;
  owner: string;
  startDate: string;
};

export type Project = {
  id: string;
  name: string;
  cohort: string;
  milestones: { label: string; status: "pending" | "in-progress" | "done" }[];
  rubric: string[];
};

export type Report = {
  id: string;
  student: string;
  period: string;
  status: "draft" | "ready" | "sent";
  nextActions: string;
};

export type AutomationRule = {
  id: string;
  title: string;
  trigger: string;
  action: string;
  channel: "email" | "sms" | "in-app";
  status: "active" | "paused";
};
