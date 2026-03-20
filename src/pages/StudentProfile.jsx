import { useState } from "react";
import {
  Bell,
  Menu,
  X,
  Music,
  ChevronDown,
  LogOut,
  User,
  Settings,
  BookOpen,
  FileText,
  Headphones,
  Check,
  Download,
  Eye,
  TrendingUp,
  Award,
  Hash,
  MapPin,
  GraduationCap,
  Calendar,
  ChevronRight,
  AlertCircle,
  Home,
  ClipboardList,
  Mic,
} from "lucide-react";

// MOCK DATA
const student = {
  name: "Aryan Sharma",
  studentId: "MM-2024-0412",
  campus: "DPS RK Puram",
  class: "8",
  section: "B",
  grade: "Senior",
  semester: "Semester 2 · 2025–26",
  enrolledLevel: "Grade 8 – Music Level 3",
  instrumentPreference: "Piano",
  board: "CBSE",
  enrollmentStatus: "Active",
  pastPerformance: [
    {
      semester: "Sem 1 · 2025–26",
      level: "Music Level 2",
      theory: 88,
      practical: 82,
      grade: "A",
    },
    {
      semester: "Sem 2 · 2024–25",
      level: "Music Level 2",
      theory: 74,
      practical: 79,
      grade: "B+",
    },
    {
      semester: "Sem 1 · 2024–25",
      level: "Music Level 1",
      theory: 91,
      practical: 88,
      grade: "A+",
    },
  ],
  syllabus: [
    {
      unit: "Unit 1",
      title: "Fundamentals of Western Music",
      topics: ["Staff notation", "Clefs & time signatures", "Rhythm patterns"],
      status: "Completed",
    },
    {
      unit: "Unit 2",
      title: "Keyboard Harmony",
      topics: ["Major/Minor scales", "Chord progressions", "Arpeggios"],
      status: "In Progress",
    },
    {
      unit: "Unit 3",
      title: "Sight Reading",
      topics: ["Reading sheet music", "Tempo recognition", "Aural exercises"],
      status: "Upcoming",
    },
    {
      unit: "Unit 4",
      title: "Music Appreciation",
      topics: ["Indian Classical", "Western Classical", "Contemporary"],
      status: "Upcoming",
    },
  ],
  resources: [
    {
      title: "Music Level 3 – Theory Workbook",
      type: "PDF",
      uploadedBy: "Admin",
      size: "2.4 MB",
    },
    {
      title: "Keyboard Practice Scales – Grade 8",
      type: "PDF",
      uploadedBy: "Mrs. Priya Nair",
      size: "1.1 MB",
    },
    {
      title: "CBSE Music Syllabus 2025–26",
      type: "PDF",
      uploadedBy: "Admin",
      size: "540 KB",
    },
    {
      title: "Aural Training – Audio Set 1",
      type: "Audio",
      uploadedBy: "Mrs. Priya Nair",
      size: "18 MB",
    },
  ],
};

const INSTRUMENTS = [
  { id: "Singing", icon: "🎤", label: "Singing" },
  { id: "Flute", icon: "🪈", label: "Flute" },
  { id: "Drum", icon: "🥁", label: "Drum" },
  { id: "Piano", icon: "🎹", label: "Piano" },
];

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "syllabus", label: "Syllabus", icon: BookOpen },
  { id: "resources", label: "Resources", icon: FileText },
  { id: "history", label: "History", icon: TrendingUp },
];

const notifications = [
  {
    id: 1,
    text: "Monthly exam scheduled for 25 March",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    text: "Practice session: Piano – 8/10 attempts done",
    time: "5h ago",
    unread: true,
  },
  {
    id: 3,
    text: "Your quarterly report is ready",
    time: "1d ago",
    unread: false,
  },
];

const navLinks = [
  { label: "Dashboard", icon: Home, href: "#" },
  { label: "Theory Exam", icon: ClipboardList, href: "#" },
  { label: "Practical Exam", icon: Mic, href: "#" },
  { label: "My Profile", icon: User, href: "#", active: true },
];

// navbar
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const unread = notifications.filter((n) => n.unread).length;
  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const close = () => {
    setDropdownOpen(false);
    setNotifOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center shadow-md">
              <Music className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-slate-800 text-sm tracking-tight">
                Music Masters
              </span>
              <span className="ml-2 text-[10px] font-semibold bg-violet-100 text-violet-700 rounded-full px-2 py-0.5">
                Student
              </span>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-violet-50 text-violet-700"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setNotifOpen(!notifOpen);
                  setDropdownOpen(false);
                }}
                className="relative w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <Bell className="w-4 h-4 text-slate-500" />
                {unread > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-violet-600 rounded-full text-[9px] font-bold text-white flex items-center justify-center">
                    {unread}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div
                  className="absolute right-0 mt-2 w-76 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden"
                  style={{ width: "300px" }}
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                    <p className="text-sm font-semibold text-slate-800">
                      Notifications
                    </p>
                    <span className="text-[10px] font-semibold bg-violet-100 text-violet-700 rounded-full px-2 py-0.5">
                      {unread} new
                    </span>
                  </div>
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`flex gap-3 px-4 py-3 border-b border-slate-50 ${n.unread ? "bg-violet-50/50" : ""}`}
                    >
                      <div
                        className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${n.unread ? "bg-violet-500" : "bg-slate-300"}`}
                      />
                      <div>
                        <p className="text-xs text-slate-700 leading-snug">
                          {n.text}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          {n.time}
                        </p>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-2.5 text-xs font-semibold text-violet-600 hover:bg-violet-50 transition-colors">
                    View all
                  </button>
                </div>
              )}
            </div>

            {/* Profile pill */}
            <div className="relative">
              <button
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  setNotifOpen(false);
                }}
                className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-2 py-1.5 hover:bg-slate-50 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                  {initials}
                </div>
                <div className="hidden sm:block text-left leading-tight">
                  <p className="text-xs font-semibold text-slate-800">
                    {student.name}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Class {student.class}-{student.section}
                  </p>
                </div>
                <ChevronDown
                  className={`w-3 h-3 text-slate-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                    <p className="text-sm font-semibold text-slate-800">
                      {student.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {student.studentId}
                    </p>
                  </div>
                  <div className="p-1.5">
                    {[
                      { icon: User, label: "My Profile" },
                      { icon: BookOpen, label: "My Syllabus" },
                      { icon: Settings, label: "Settings" },
                    ].map((item) => (
                      <button
                        key={item.label}
                        className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-slate-400" />{" "}
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 p-1.5">
                    <button className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              {mobileOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu  */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                link.active
                  ? "bg-violet-50 text-violet-700"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
              }`}
            >
              <link.icon className="w-4 h-4" /> {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// st profile
function StudentProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [instrument, setInstrument] = useState(student.instrumentPreference);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const statusStyle = {
    Completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    "In Progress": "bg-amber-100 text-amber-700 border-amber-200",
    Upcoming: "bg-slate-100 text-slate-500 border-slate-200",
  };

  const unitBg = {
    Completed: "border-emerald-100 bg-emerald-50/60",
    "In Progress": "border-amber-200 bg-amber-50/60",
    Upcoming: "border-slate-100 bg-slate-50",
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 sm:py-7 space-y-5">
        {/* ── Hero Card ── */}
        <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-5 sm:p-7 overflow-hidden shadow-xl">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-14 -left-8 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute top-4 right-24 w-20 h-20 rounded-full bg-white/5" />

          <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Avatar */}
            <div className="flex items-center gap-4 sm:contents">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg shrink-0">
                AS
              </div>
              {/* Mobile name */}
              <div className="sm:hidden flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-lg font-bold text-white leading-tight">
                    {student.name}
                  </h1>
                  <span className="text-[10px] font-semibold bg-white/20 text-white rounded-full px-2 py-0.5">
                    {student.enrollmentStatus}
                  </span>
                </div>
                <p className="text-indigo-200 text-xs mt-0.5">
                  {student.studentId}
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="hidden sm:flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {student.name}
                </h1>
                <span className="text-xs font-semibold bg-white/20 text-white rounded-full px-2.5 py-0.5">
                  {student.enrollmentStatus}
                </span>
              </div>
              <p className="hidden sm:block text-indigo-200 text-sm mt-0.5">
                {student.studentId}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { icon: MapPin, label: student.campus },
                  {
                    icon: GraduationCap,
                    label: `Class ${student.class}–${student.section}`,
                  },
                  { icon: Hash, label: student.board },
                  { icon: Music, label: student.instrumentPreference },
                ].map((b) => (
                  <span
                    key={b.label}
                    className="flex items-center gap-1.5 text-xs bg-white/15 text-indigo-100 rounded-lg px-2.5 py-1 backdrop-blur-sm"
                  >
                    <b.icon className="w-3 h-3" /> {b.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats — right side on sm+ */}
            <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 sm:w-36 shrink-0">
              {[
                { label: "Semester", value: "Sem 2" },
                { label: "Level", value: "L3" },
                { label: "Section", value: student.section },
                { label: "Class", value: `${student.class}th` },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-2 text-center"
                >
                  <p className="text-sm sm:text-base font-bold text-white">
                    {s.value}
                  </p>
                  <p className="text-[10px] text-indigo-200 mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Semester progress */}
          <div className="relative mt-5">
            <div className="flex justify-between text-xs text-indigo-200 mb-1.5">
              <span>Semester Progress</span>
              <span className="font-semibold text-white">40%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/20">
              <div className="h-2 w-[40%] rounded-full bg-white/80 transition-all" />
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-1 bg-white rounded-2xl p-1.5 border border-slate-100 shadow-sm overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 flex-1 min-w-max justify-center py-2 px-3 sm:px-4 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── PROFILE TAB ── */}
        {activeTab === "profile" && (
          <div className="space-y-4">
            {/* Enrollment grid */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="mb-4">
                <h2 className="text-sm font-semibold text-slate-800">
                  Enrollment Details
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Current academic placement
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Enrolled Level", value: student.enrolledLevel },
                  { label: "Semester", value: student.semester },
                  { label: "Campus", value: student.campus },
                  { label: "Board", value: student.board },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="bg-slate-50 rounded-xl px-4 py-3"
                  >
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {row.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-800 mt-1 leading-tight">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Instrument preference */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="mb-4">
                <h2 className="text-sm font-semibold text-slate-800">
                  Instrument Preference
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Used for practice sessions and practical exams
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {INSTRUMENTS.map((ins) => (
                  <button
                    key={ins.id}
                    onClick={() => setInstrument(ins.id)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 border-2 transition-all duration-200 text-left ${
                      instrument === ins.id
                        ? "border-violet-500 bg-violet-50 shadow-md"
                        : "border-slate-100 bg-white hover:border-violet-200 hover:bg-violet-50/30"
                    }`}
                  >
                    <span className="text-2xl">{ins.icon}</span>
                    <div>
                      <p
                        className={`text-sm font-semibold ${instrument === ins.id ? "text-violet-700" : "text-slate-700"}`}
                      >
                        {ins.label}
                      </p>
                      {instrument === ins.id && (
                        <p className="text-[10px] text-violet-500 font-medium">
                          Selected
                        </p>
                      )}
                    </div>
                    {instrument === ins.id && (
                      <div className="ml-auto w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {instrument !== student.instrumentPreference && (
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    <p className="text-xs text-amber-700">
                      Change from{" "}
                      <strong>{student.instrumentPreference}</strong> →{" "}
                      <strong>{instrument}</strong>
                    </p>
                  </div>
                  <button
                    onClick={handleSave}
                    className="shrink-0 text-xs font-bold bg-amber-500 text-white rounded-xl px-4 py-2 hover:bg-amber-600 transition-colors"
                  >
                    {saved ? "✓ Saved!" : "Save Change"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── SYLLABUS TAB ── */}
        {activeTab === "syllabus" && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-slate-800">
                Syllabus · 2025–26
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Curriculum assigned by your school — view only
              </p>
            </div>
            <div className="space-y-3">
              {student.syllabus.map((unit, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-4 transition-all ${unitBg[unit.status]}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {unit.unit}
                      </span>
                      <h3 className="text-sm font-semibold text-slate-800 mt-0.5">
                        {unit.title}
                      </h3>
                    </div>
                    <span
                      className={`shrink-0 text-xs font-semibold rounded-full px-2.5 py-1 border ${statusStyle[unit.status]}`}
                    >
                      {unit.status}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {unit.topics.map((topic, j) => (
                      <span
                        key={j}
                        className="text-xs bg-white border border-slate-200 text-slate-600 rounded-lg px-2.5 py-1"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── RESOURCES TAB ── */}
        {activeTab === "resources" && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-slate-800">
                Shared Resources
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Files shared by school & teachers — view only
              </p>
            </div>
            <div className="space-y-2">
              {student.resources.map((res, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      res.type === "PDF" ? "bg-red-100" : "bg-violet-100"
                    }`}
                  >
                    {res.type === "PDF" ? (
                      <FileText className="w-5 h-5 text-red-500" />
                    ) : (
                      <Headphones className="w-5 h-5 text-violet-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {res.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      By {res.uploadedBy} · {res.size}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors">
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-50 transition-colors">
                      <Download className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── HISTORY TAB ── */}
        {activeTab === "history" && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-slate-800">
                Past Performance
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Previous semester results — read only
              </p>
            </div>
            <div className="space-y-3">
              {student.pastPerformance.map((row, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">
                        {row.semester}
                      </p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">
                        {row.level}
                      </p>
                    </div>
                    <span
                      className={`text-base font-bold rounded-xl px-3 py-1.5 ${
                        row.grade === "A+"
                          ? "bg-emerald-100 text-emerald-700"
                          : row.grade === "A"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {row.grade}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        label: "Theory",
                        value: row.theory,
                        color: "from-violet-500 to-indigo-500",
                      },
                      {
                        label: "Practical",
                        value: row.practical,
                        color: "from-indigo-500 to-blue-500",
                      },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-xs text-slate-400 font-medium">
                            {bar.label}
                          </span>
                          <span className="text-xs font-bold text-slate-700">
                            {bar.value}%
                          </span>
                        </div>
                        <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${bar.color} transition-all`}
                            style={{ width: `${bar.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-3">
              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse shrink-0" />
              <p className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">
                  Sem 2 · 2025–26
                </span>{" "}
                is currently in progress. Results appear after semester
                completion.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentProfile;
