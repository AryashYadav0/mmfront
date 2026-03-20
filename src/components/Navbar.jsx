import { useState } from "react";
import { Bell, BookOpen, Menu, X, Music, ChevronDown, LogOut, User, Settings } from "lucide-react";

const StudentNavbar = ({ studentName = "Rahul Sharma", studentClass = "Class 7 - A", avatar = null }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = [
    { id: 1, text: "Monthly exam scheduled for 25 March", time: "2h ago", unread: true },
    { id: 2, text: "Practice session reminder: Flute - 10 attempts pending", time: "5h ago", unread: true },
    { id: 3, text: "Your quarterly report is ready", time: "1d ago", unread: false },
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  const navLinks = [
    { label: "Dashboard", href: "#dashboard", active: true },
    { label: "Theory Exam", href: "#theory" },
    { label: "Practical Exam", href: "#practical" },
    { label: "My Profile", href: "#profile" },
  ];

  const initials = studentName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Music className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-semibold tracking-tight text-foreground">Music Masters</span>
              <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">Student</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => { setNotifOpen(!notifOpen); setDropdownOpen(false); }}
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-accent transition-colors"
              >
                <Bell className="h-4 w-4 text-muted-foreground" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-xl border border-border bg-background shadow-lg">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3">
                    <p className="text-sm font-semibold text-foreground">Notifications</p>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{unreadCount} new</span>
                  </div>
                  <div className="divide-y divide-border">
                    {notifications.map((n) => (
                      <div key={n.id} className={`flex gap-3 px-4 py-3 ${n.unread ? "bg-primary/5" : ""}`}>
                        <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${n.unread ? "bg-primary" : "bg-muted"}`} />
                        <div>
                          <p className="text-sm text-foreground">{n.text}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{n.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border p-2">
                    <button className="w-full rounded-lg py-2 text-center text-xs font-medium text-primary hover:bg-primary/10 transition-colors">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setDropdownOpen(!dropdownOpen); setNotifOpen(false); }}
                className="flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1.5 hover:bg-accent transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {initials}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-medium text-foreground leading-tight">{studentName}</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">{studentClass}</p>
                </div>
                <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-xl border border-border bg-background shadow-lg">
                  <div className="border-b border-border px-4 py-3">
                    <p className="text-sm font-medium text-foreground">{studentName}</p>
                    <p className="text-xs text-muted-foreground">{studentClass}</p>
                  </div>
                  <div className="p-1">
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors">
                      <User className="h-4 w-4 text-muted-foreground" /> My Profile
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors">
                      <BookOpen className="h-4 w-4 text-muted-foreground" /> My Syllabus
                    </button>
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors">
                      <Settings className="h-4 w-4 text-muted-foreground" /> Settings
                    </button>
                  </div>
                  <div className="border-t border-border p-1">
                    <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors">
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background hover:bg-accent transition-colors md:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default StudentNavbar;