import Link from "next/link";
import { BarChart3, BookOpen, CreditCard, LayoutDashboard, Users, Zap } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/students", label: "Ученики", icon: Users },
  { href: "/groups", label: "Группы", icon: BookOpen },
  { href: "/attendance", label: "Посещаемость", icon: Zap },
  { href: "/finance", label: "Финансы", icon: CreditCard },
  { href: "/teachers", label: "Преподаватели", icon: Users },
  { href: "/reports", label: "Отчёты", icon: BarChart3 },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[280px] shrink-0 flex-col gap-6 border-r border-slate-800/70 bg-slate-950/90 p-6 lg:flex">
      <div className="space-y-3">
        <div className="rounded-3xl bg-slate-900/90 p-4 text-center text-white shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">O‘quv markazi</p>
          <p className="mt-3 text-lg font-semibold">Учебный центр</p>
        </div>
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-4 text-slate-300">
          <p className="text-sm text-slate-400">Роль</p>
          <p className="mt-2 text-lg font-semibold text-white">Администратор</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-400">
        <p className="font-semibold text-white">Менеджер</p>
        <p className="mt-2 text-slate-400">Управляйте учениками, группами и финансами центра.</p>
      </div>
    </aside>
  );
}
