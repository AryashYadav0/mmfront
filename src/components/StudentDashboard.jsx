import { useState } from "react";
import {
  BookOpen, Music2, TrendingUp, Award, Clock, ChevronRight,
  CheckCircle2, Circle, Lock, PlayCircle, FileText, Mic, Star, AlertCircle
} from "lucide-react";

// ─── Stat Card ───────────────────────────────────────────────────
const StatCard = ({ label, value, sub, icon: Icon, color }) => {
  const colorMap = {
    blue: "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400",
    green: "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400",
    amber: "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
    purple: "bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400",
  };
  return (
    <div className="rounded-xl border border-border bg-card p-4 flex items-start gap-3">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colorMap[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-xl font-semibold text-foreground">{value}</p>
        {sub && <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>}
      </div>
    </div>
  );
};

// ─── Exam Cycle Row ──────────────────────────────────────────────
const examCycles = [
  { cycle: "Monthly", questions: 10, status: "completed", score: 85, attempts: 2, date: "15 Mar 2026" },
  { cycle: "Quarterly", questions: 25, status: "available", score: null, attempts: 0, date: "30 Mar 2026" },
  { cycle: "Half-Yearly", questions: 50, status: "locked", score: null, attempts: 0, date: "Jun 2026" },
  { cycle: "Yearly", questions: 72, status: "locked", score: null, attempts: 0, date: "Dec 2026" },
];

const statusConfig = {
  completed: { label: "Completed", icon: CheckCircle2, className: "text-green-600", badge: "bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400" },
  available: { label: "Available", icon: PlayCircle, className: "text-blue-600", badge: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400" },
  locked: { label: "Locked", icon: Lock, className: "text-muted-foreground", badge: "bg-muted text-muted-foreground" },
};

// ─── Practical Stage ─────────────────────────────────────────────
const practicalStages = [
  { stage: 1, name: "Tune Matching", status: "completed", desc: "Practice 10x minimum then attempt" },
  { stage: 2, name: "Sight Reading", status: "available", desc: "Timer-based, play the tune in time" },
  { stage: 3, name: "Aural Test", status: "locked", desc: "MCQ based on audio clips" },
];

// ─── Main Dashboard ──────────────────────────────────────────────
const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "theory", label: "Theory Exams" },
    { id: "practical", label: "Practical Exams" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">

        {/* Welcome Banner */}
        <div className="mb-6 rounded-2xl border border-border bg-gradient-to-r from-primary/5 via-primary/10 to-transparent p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Good morning,</p>
              <h1 className="text-xl sm:text-2xl font-semibold text-foreground">Rahul Sharma 👋</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Class 7-A &middot; Flute &middot; CBSE Curriculum
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-muted-foreground">Current Session</p>
                <p className="text-sm font-medium text-foreground">Jan – Jun 2026</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                RS
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs text-muted-foreground">Semester Progress</p>
              <p className="text-xs font-medium text-foreground">40%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-primary/10">
              <div className="h-2 w-[40%] rounded-full bg-primary transition-all" />
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="Theory Score" value="85%" sub="Monthly exam" icon={BookOpen} color="blue" />
          <StatCard label="Practice Attempts" value="8/10" sub="Tune matching" icon={Music2} color="purple" />
          <StatCard label="Overall Progress" value="40%" sub="This semester" icon={TrendingUp} color="green" />
          <StatCard label="Certificates" value="0" sub="Earn on completion" icon={Award} color="amber" />
        </div>

        {/* Tabs */}
        <div className="mb-5 flex gap-1 rounded-xl border border-border bg-muted/40 p-1 w-full sm:w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 sm:flex-none rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Overview Tab ── */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Quick Actions */}
            <div className="lg:col-span-2 space-y-3">
              <h2 className="text-sm font-semibold text-foreground">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Start Theory Exam", sub: "Quarterly · 25 questions", icon: FileText, color: "blue", cta: true },
                  { label: "Continue Practice", sub: "Flute · 8/10 attempts done", icon: Music2, color: "purple", cta: false },
                  { label: "View Syllabus", sub: "CBSE Class 7 Music", icon: BookOpen, color: "green", cta: false },
                  { label: "Stage 2 – Sight Reading", sub: "Unlocked · Ready to attempt", icon: Mic, color: "amber", cta: false },
                ].map((item) => (
                  <button
                    key={item.label}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all hover:shadow-sm active:scale-[0.98] ${
                      item.cta ? "border-primary/30 bg-primary/5 hover:bg-primary/10" : "border-border bg-card hover:bg-accent"
                    }`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      item.cta ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm font-medium ${item.cta ? "text-primary" : "text-foreground"}`}>{item.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.sub}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming & Alerts */}
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-foreground">Upcoming</h2>
              <div className="rounded-xl border border-border bg-card divide-y divide-border overflow-hidden">
                {[
                  { label: "Quarterly Theory Exam", date: "30 Mar", icon: FileText, urgent: true },
                  { label: "Practical Stage 2", date: "1 Apr", icon: Mic, urgent: false },
                  { label: "Half-Yearly Exam", date: "Jun 2026", icon: BookOpen, urgent: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.urgent ? "bg-amber-50 dark:bg-amber-950/30" : "bg-muted"}`}>
                      <item.icon className={`h-4 w-4 ${item.urgent ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground"}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground truncate">{item.label}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${item.urgent ? "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400" : "bg-muted text-muted-foreground"}`}>
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* Alert */}
              <div className="flex gap-2.5 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-3">
                <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 dark:text-amber-300">
                  Complete <strong>2 more practice attempts</strong> to unlock the practical exam.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Theory Tab ── */}
        {activeTab === "theory" && (
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-foreground">Exam Cycles</h2>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {/* Desktop header */}
              <div className="hidden sm:grid grid-cols-5 gap-4 border-b border-border bg-muted/30 px-4 py-2.5 text-xs font-medium text-muted-foreground">
                <span>Cycle</span>
                <span className="text-center">Questions</span>
                <span className="text-center">Status</span>
                <span className="text-center">Score</span>
                <span className="text-right">Action</span>
              </div>
              <div className="divide-y divide-border">
                {examCycles.map((exam) => {
                  const s = statusConfig[exam.status];
                  const StatusIcon = s.icon;
                  return (
                    <div key={exam.cycle} className="flex flex-col sm:grid sm:grid-cols-5 gap-2 sm:gap-4 sm:items-center px-4 py-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">{exam.cycle}</p>
                        <p className="text-xs text-muted-foreground">{exam.date}</p>
                      </div>
                      <div className="hidden sm:flex justify-center">
                        <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{exam.questions} Qs</span>
                      </div>
                      <div className="sm:flex sm:justify-center">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${s.badge}`}>
                          <StatusIcon className="h-3 w-3" />
                          {s.label}
                        </span>
                      </div>
                      <div className="hidden sm:flex justify-center">
                        {exam.score ? (
                          <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-16 rounded-full bg-muted overflow-hidden">
                              <div className="h-1.5 rounded-full bg-green-500" style={{ width: `${exam.score}%` }} />
                            </div>
                            <span className="text-xs font-medium text-foreground">{exam.score}%</span>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">—</span>
                        )}
                      </div>
                      <div className="sm:flex sm:justify-end">
                        <button
                          disabled={exam.status === "locked"}
                          className={`w-full sm:w-auto rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                            exam.status === "locked"
                              ? "border-border text-muted-foreground cursor-not-allowed opacity-50"
                              : exam.status === "available"
                              ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                              : "border-border bg-background text-foreground hover:bg-accent"
                          }`}
                        >
                          {exam.status === "completed" ? "View Result" : exam.status === "available" ? "Start Exam" : "Locked"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── Practical Tab ── */}
        {activeTab === "practical" && (
          <div className="space-y-4">
            {/* Practice Counter */}
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-foreground">Practice Log</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">Minimum 10 attempts required to unlock exam</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2.5 w-2.5 rounded-full ${i < 8 ? "bg-primary" : "bg-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">8 / 10</span>
                </div>
              </div>
            </div>

            {/* Stages */}
            <h2 className="text-sm font-semibold text-foreground">Exam Stages</h2>
            <div className="space-y-3">
              {practicalStages.map((stage, idx) => {
                const s = statusConfig[stage.status];
                const StatusIcon = s.icon;
                return (
                  <div
                    key={stage.stage}
                    className={`flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border p-4 sm:p-5 transition-all ${
                      stage.status === "locked" ? "border-border opacity-60" : "border-border bg-card hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-bold text-sm ${
                        stage.status === "completed" ? "border-green-500 text-green-600" :
                        stage.status === "available" ? "border-primary text-primary" :
                        "border-border text-muted-foreground"
                      }`}>
                        {stage.stage}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-foreground">{stage.name}</p>
                          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${s.badge}`}>
                            <StatusIcon className="h-3 w-3" />
                            {s.label}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{stage.desc}</p>
                      </div>
                    </div>
                    <button
                      disabled={stage.status === "locked"}
                      className={`sm:shrink-0 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                        stage.status === "locked"
                          ? "border-border text-muted-foreground cursor-not-allowed opacity-50"
                          : stage.status === "available"
                          ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border-border bg-background text-foreground hover:bg-accent"
                      }`}
                    >
                      {stage.status === "completed" ? "View Result" : stage.status === "available" ? "Begin Stage" : "Locked"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default StudentDashboard;