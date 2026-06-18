import Link from "next/link";
import { CalendarCheck2, Users } from "lucide-react";

const groups = [
  { id: "g1", name: "English A1", teacher: "Мадина Рахимова", schedule: "Пн, Ср 18:00-20:00", students: 14 },
  { id: "g2", name: "Math Advanced", teacher: "Олег Петров", schedule: "Вт, Чт 17:00-19:00", students: 10 },
  { id: "g3", name: "IT Fundamentals", teacher: "Шахноза Каримова", schedule: "Сб 10:00-13:00", students: 12 },
];

export default function GroupsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Управление группами</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Группы и расписание</h1>
          </div>
          <Link href="/groups/new" className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">
            Создать группу
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {groups.map((group) => (
          <article key={group.id} className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Группа</p>
                <h2 className="mt-2 text-xl font-semibold text-white">{group.name}</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/80 px-3 py-2 text-sm text-slate-300">
                <Users className="h-4 w-4" /> {group.students}
              </span>
            </div>
            <div className="mt-4 space-y-3 text-slate-300">
              <p>Преподаватель: {group.teacher}</p>
              <p>Расписание: {group.schedule}</p>
            </div>
            <Link href={`/groups/${group.id}`} className="mt-6 inline-flex rounded-3xl bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-400 transition hover:bg-slate-700">
              Открыть группу
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
