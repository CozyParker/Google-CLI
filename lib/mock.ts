import {
  AutomationRule,
  ClassGroup,
  EvaluationItem,
  HomeworkItem,
  Project,
  QuestionItem,
  Report,
  RevisionPlan,
  Session,
  Student,
  Tutor
} from "./types";

export const tutor: Tutor = {
  id: "tutor-1",
  name: "Amelia Rivers",
  role: "Lead Tutor Administrator",
  focus: "STEM acceleration, parental reporting, operations",
  contact: "amelia.rivers@academy.edu"
};

export const classGroups: ClassGroup[] = [
  {
    id: "cls-1",
    name: "Algebra Cohort A",
    subject: "Math",
    level: "Grade 8",
    schedule: "Mon/Wed 4:00 PM",
    students: 18
  },
  {
    id: "cls-2",
    name: "Chemistry Honors",
    subject: "Science",
    level: "Grade 10",
    schedule: "Tue/Thu 5:30 PM",
    students: 14
  },
  {
    id: "cls-3",
    name: "SAT Prep - Quant",
    subject: "Test Prep",
    level: "Mixed",
    schedule: "Sat 10:00 AM",
    students: 22
  },
  {
    id: "cls-4",
    name: "Literature Deep Dive",
    subject: "English",
    level: "Grade 11",
    schedule: "Fri 3:30 PM",
    students: 16
  },
  {
    id: "cls-5",
    name: "Geometry Cohort B",
    subject: "Math",
    level: "Grade 9",
    schedule: "Mon/Wed 6:00 PM",
    students: 20
  },
  {
    id: "cls-6",
    name: "Physics Olympiad Lab",
    subject: "Science",
    level: "Advanced",
    schedule: "Thu 7:00 PM",
    students: 12
  },
  {
    id: "cls-7",
    name: "APUSH Seminar",
    subject: "History",
    level: "AP",
    schedule: "Sun 4:00 PM",
    students: 15
  },
  {
    id: "cls-8",
    name: "Writing Studio",
    subject: "English",
    level: "Grade 8",
    schedule: "Wed 5:00 PM",
    students: 13
  }
];

export const sessions: Session[] = [
  {
    id: "ses-1",
    time: "09:00 AM",
    title: "Algebra Cohort A",
    type: "Class",
    classId: "cls-1",
    status: "live",
    joinLink: "#"
  },
  {
    id: "ses-2",
    time: "10:30 AM",
    title: "1:1 Progress Check - Maya",
    type: "1:1",
    classId: "cls-1",
    status: "upcoming",
    joinLink: "#"
  },
  {
    id: "ses-3",
    time: "12:00 PM",
    title: "Chemistry Honors",
    type: "Class",
    classId: "cls-2",
    status: "upcoming",
    joinLink: "#"
  },
  {
    id: "ses-4",
    time: "02:30 PM",
    title: "SAT Quant Drills",
    type: "Workshop",
    classId: "cls-3",
    status: "upcoming",
    joinLink: "#"
  },
  {
    id: "ses-5",
    time: "04:00 PM",
    title: "Writing Studio Feedback",
    type: "1:Many",
    classId: "cls-8",
    status: "upcoming",
    joinLink: "#"
  },
  {
    id: "ses-6",
    time: "05:30 PM",
    title: "Physics Lab",
    type: "Lab",
    classId: "cls-6",
    status: "upcoming",
    joinLink: "#"
  },
  {
    id: "ses-7",
    time: "07:00 PM",
    title: "APUSH Seminar",
    type: "Seminar",
    classId: "cls-7",
    status: "upcoming",
    joinLink: "#"
  },
  {
    id: "ses-8",
    time: "08:30 PM",
    title: "Revision Clinic - Geometry",
    type: "Clinic",
    classId: "cls-5",
    status: "upcoming",
    joinLink: "#"
  }
];

export const students: Student[] = [
  {
    id: "stu-1",
    name: "Maya Chen",
    cohort: "Algebra Cohort A",
    mastery: 82,
    flagged: true,
    lastEvaluation: "2024-06-03",
    notes: "Needs reinforcement on factoring; anxious before quizzes.",
    weakAreas: ["Quadratics", "Factoring"]
  },
  {
    id: "stu-2",
    name: "Leo Patel",
    cohort: "Chemistry Honors",
    mastery: 91,
    flagged: false,
    lastEvaluation: "2024-06-02",
    notes: "High performer; assign stretch problems.",
    weakAreas: ["Stoichiometry"]
  },
  {
    id: "stu-3",
    name: "Sofia Martinez",
    cohort: "SAT Prep - Quant",
    mastery: 74,
    flagged: true,
    lastEvaluation: "2024-06-01",
    notes: "Careless errors in word problems.",
    weakAreas: ["Rates", "Data Tables"]
  },
  {
    id: "stu-4",
    name: "Ethan Brooks",
    cohort: "Algebra Cohort A",
    mastery: 67,
    flagged: true,
    lastEvaluation: "2024-06-03",
    notes: "Attendance gaps; prefers visuals.",
    weakAreas: ["Functions", "Graphing"]
  },
  {
    id: "stu-5",
    name: "Nora Khan",
    cohort: "Literature Deep Dive",
    mastery: 88,
    flagged: false,
    lastEvaluation: "2024-06-03",
    notes: "Strong analysis; pacing needed.",
    weakAreas: ["Timed Writing"]
  },
  {
    id: "stu-6",
    name: "Julian Wright",
    cohort: "Geometry Cohort B",
    mastery: 71,
    flagged: false,
    lastEvaluation: "2024-06-02",
    notes: "Spatial reasoning improving.",
    weakAreas: ["Proofs", "Similarity"]
  },
  {
    id: "stu-7",
    name: "Isabella Rossi",
    cohort: "Writing Studio",
    mastery: 83,
    flagged: false,
    lastEvaluation: "2024-06-01",
    notes: "Needs more concise thesis statements.",
    weakAreas: ["Thesis", "Transitions"]
  },
  {
    id: "stu-8",
    name: "Kai Nguyen",
    cohort: "Physics Olympiad Lab",
    mastery: 79,
    flagged: true,
    lastEvaluation: "2024-06-02",
    notes: "Conceptual leaps; assign visual aids.",
    weakAreas: ["Circuits", "Waves"]
  },
  {
    id: "stu-9",
    name: "Priya Das",
    cohort: "APUSH Seminar",
    mastery: 86,
    flagged: false,
    lastEvaluation: "2024-06-04",
    notes: "Needs evidence-to-claim clarity.",
    weakAreas: ["Synthesis"]
  },
  {
    id: "stu-10",
    name: "Caleb Ortiz",
    cohort: "SAT Prep - Quant",
    mastery: 69,
    flagged: true,
    lastEvaluation: "2024-06-03",
    notes: "Rusty on geometry basics.",
    weakAreas: ["Geometry", "Proportions"]
  }
];

export const homeworkItems: HomeworkItem[] = [
  {
    id: "hw-1",
    title: "Quadratic Practice Set",
    student: "Maya Chen",
    due: "Today",
    status: "pending",
    priority: "high"
  },
  {
    id: "hw-2",
    title: "Lab Safety Reflection",
    student: "Leo Patel",
    due: "Today",
    status: "pending",
    priority: "medium"
  },
  {
    id: "hw-3",
    title: "Reading Log",
    student: "Nora Khan",
    due: "Tomorrow",
    status: "scheduled",
    priority: "low"
  },
  {
    id: "hw-4",
    title: "Word Problems Drill",
    student: "Sofia Martinez",
    due: "Today",
    status: "pending",
    priority: "high"
  },
  {
    id: "hw-5",
    title: "SAT Geometry Review",
    student: "Caleb Ortiz",
    due: "Tomorrow",
    status: "scheduled",
    priority: "medium"
  },
  {
    id: "hw-6",
    title: "Thesis Draft",
    student: "Isabella Rossi",
    due: "Friday",
    status: "completed",
    priority: "low"
  },
  {
    id: "hw-7",
    title: "Circuit Analysis",
    student: "Kai Nguyen",
    due: "Today",
    status: "pending",
    priority: "high"
  },
  {
    id: "hw-8",
    title: "Proof Practice",
    student: "Julian Wright",
    due: "Tomorrow",
    status: "scheduled",
    priority: "medium"
  },
  {
    id: "hw-9",
    title: "DBQ Outline",
    student: "Priya Das",
    due: "Friday",
    status: "completed",
    priority: "low"
  }
];

export const evaluations: EvaluationItem[] = [
  {
    id: "ev-1",
    student: "Maya Chen",
    category: "Algebra Checkpoint",
    score: 72,
    submittedAt: "2024-06-04",
    status: "pending"
  },
  {
    id: "ev-2",
    student: "Leo Patel",
    category: "Chem Lab Report",
    score: 90,
    submittedAt: "2024-06-03",
    status: "reviewed"
  },
  {
    id: "ev-3",
    student: "Sofia Martinez",
    category: "SAT Mock",
    score: 76,
    submittedAt: "2024-06-04",
    status: "pending"
  },
  {
    id: "ev-4",
    student: "Ethan Brooks",
    category: "Algebra Quiz",
    score: 64,
    submittedAt: "2024-06-03",
    status: "pending"
  },
  {
    id: "ev-5",
    student: "Nora Khan",
    category: "Lit Analysis",
    score: 88,
    submittedAt: "2024-06-02",
    status: "reviewed"
  },
  {
    id: "ev-6",
    student: "Kai Nguyen",
    category: "Physics Concept Check",
    score: 79,
    submittedAt: "2024-06-04",
    status: "pending"
  },
  {
    id: "ev-7",
    student: "Caleb Ortiz",
    category: "SAT Quant Drill",
    score: 68,
    submittedAt: "2024-06-02",
    status: "reviewed"
  },
  {
    id: "ev-8",
    student: "Priya Das",
    category: "APUSH Essay",
    score: 85,
    submittedAt: "2024-06-04",
    status: "pending"
  }
];

export const questions: QuestionItem[] = [
  {
    id: "q-1",
    type: "MCQ",
    topic: "Quadratic Forms",
    difficulty: "Medium",
    usage: 124,
    updatedAt: "2024-06-03"
  },
  {
    id: "q-2",
    type: "Case Study",
    topic: "Lab Safety Incident",
    difficulty: "Hard",
    usage: 56,
    updatedAt: "2024-06-02"
  },
  {
    id: "q-3",
    type: "MCQ",
    topic: "Data Analysis",
    difficulty: "Medium",
    usage: 88,
    updatedAt: "2024-06-01"
  },
  {
    id: "q-4",
    type: "MCQ",
    topic: "Historical Interpretation",
    difficulty: "Easy",
    usage: 65,
    updatedAt: "2024-06-01"
  },
  {
    id: "q-5",
    type: "Case Study",
    topic: "Electric Circuits",
    difficulty: "Hard",
    usage: 42,
    updatedAt: "2024-06-04"
  },
  {
    id: "q-6",
    type: "MCQ",
    topic: "Grammar Mechanics",
    difficulty: "Easy",
    usage: 110,
    updatedAt: "2024-06-03"
  },
  {
    id: "q-7",
    type: "Case Study",
    topic: "Environmental Policy",
    difficulty: "Medium",
    usage: 47,
    updatedAt: "2024-06-02"
  },
  {
    id: "q-8",
    type: "MCQ",
    topic: "Probability",
    difficulty: "Hard",
    usage: 73,
    updatedAt: "2024-06-02"
  },
  {
    id: "q-9",
    type: "MCQ",
    topic: "Essay Evaluation",
    difficulty: "Medium",
    usage: 90,
    updatedAt: "2024-06-04"
  }
];

export const revisionPlans: RevisionPlan[] = [
  {
    id: "rp-1",
    student: "Maya Chen",
    focusAreas: ["Quadratics", "Factoring"],
    cadence: "3x weekly drills",
    owner: "Amelia Rivers",
    startDate: "2024-06-05"
  },
  {
    id: "rp-2",
    student: "Sofia Martinez",
    focusAreas: ["Data", "Rates"],
    cadence: "Alternate-day mocks",
    owner: "Amelia Rivers",
    startDate: "2024-06-06"
  },
  {
    id: "rp-3",
    student: "Ethan Brooks",
    focusAreas: ["Graphing", "Functions"],
    cadence: "Visual practice twice weekly",
    owner: "Amelia Rivers",
    startDate: "2024-06-05"
  },
  {
    id: "rp-4",
    student: "Caleb Ortiz",
    focusAreas: ["Geometry", "Proportions"],
    cadence: "Daily micro-drills",
    owner: "Amelia Rivers",
    startDate: "2024-06-07"
  },
  {
    id: "rp-5",
    student: "Kai Nguyen",
    focusAreas: ["Circuits", "Waves"],
    cadence: "Lab visuals weekly",
    owner: "Amelia Rivers",
    startDate: "2024-06-05"
  }
];

export const projects: Project[] = [
  {
    id: "prj-1",
    name: "Chem Lab Portfolio",
    cohort: "Chemistry Honors",
    milestones: [
      { label: "Safety Proposal", status: "done" },
      { label: "Trial Run", status: "in-progress" },
      { label: "Final Report", status: "pending" }
    ],
    rubric: ["Safety compliance", "Data accuracy", "Reflection depth"]
  },
  {
    id: "prj-2",
    name: "DBQ Showcase",
    cohort: "APUSH Seminar",
    milestones: [
      { label: "Outline", status: "done" },
      { label: "Draft", status: "in-progress" },
      { label: "Defense", status: "pending" }
    ],
    rubric: ["Claim clarity", "Evidence", "Counterpoints"]
  },
  {
    id: "prj-3",
    name: "Geometry Portfolio",
    cohort: "Geometry Cohort B",
    milestones: [
      { label: "Proof Set", status: "in-progress" },
      { label: "Presentation", status: "pending" },
      { label: "Peer Review", status: "pending" }
    ],
    rubric: ["Logic", "Precision", "Communication"]
  },
  {
    id: "prj-4",
    name: "Literary Analysis Anthology",
    cohort: "Literature Deep Dive",
    milestones: [
      { label: "Text Selection", status: "done" },
      { label: "Draft Essays", status: "in-progress" },
      { label: "Peer Critique", status: "pending" }
    ],
    rubric: ["Insight", "Structure", "Evidence"]
  }
];

export const reports: Report[] = [
  {
    id: "rep-1",
    student: "Maya Chen",
    period: "May 2024",
    status: "draft",
    nextActions: "Add visuals for factoring progress."
  },
  {
    id: "rep-2",
    student: "Leo Patel",
    period: "May 2024",
    status: "ready",
    nextActions: "Send to parents with lab badge."
  },
  {
    id: "rep-3",
    student: "Sofia Martinez",
    period: "May 2024",
    status: "draft",
    nextActions: "Include data table drill outcomes."
  },
  {
    id: "rep-4",
    student: "Ethan Brooks",
    period: "May 2024",
    status: "ready",
    nextActions: "Highlight attendance plan."
  },
  {
    id: "rep-5",
    student: "Nora Khan",
    period: "May 2024",
    status: "sent",
    nextActions: "Await parent acknowledgement."
  },
  {
    id: "rep-6",
    student: "Priya Das",
    period: "May 2024",
    status: "ready",
    nextActions: "Share rubric notes."
  },
  {
    id: "rep-7",
    student: "Kai Nguyen",
    period: "May 2024",
    status: "draft",
    nextActions: "Attach visuals for circuits."
  }
];

export const automationRules: AutomationRule[] = [
  {
    id: "rule-1",
    title: "Flagged student daily digest",
    trigger: "Daily 7:30 AM",
    action: "Compile flagged students and send tasks",
    channel: "email",
    status: "active"
  },
  {
    id: "rule-2",
    title: "Homework overdue nudges",
    trigger: "Due date passed",
    action: "Notify tutor and send reminder",
    channel: "sms",
    status: "active"
  },
  {
    id: "rule-3",
    title: "Evaluation pending escalation",
    trigger: "Pending review > 48h",
    action: "Alert operations channel",
    channel: "in-app",
    status: "paused"
  },
  {
    id: "rule-4",
    title: "Report ready to share",
    trigger: "Report marked ready",
    action: "Send parent-ready PDF",
    channel: "email",
    status: "active"
  },
  {
    id: "rule-5",
    title: "Gamification toggle digest",
    trigger: "Weekly Friday",
    action: "Summarize reward rule changes",
    channel: "email",
    status: "active"
  }
];
