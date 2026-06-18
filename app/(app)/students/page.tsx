import Link from "next/link";
import { Search } from "lucide-react";

const students = [
  { id: "1", name: "Алишер Ходжаев", group: "B1 English", phone: "+998 90 123 45 67", status: "Активный" },
  { id: "2", name: "Саида Назарова", group: "Math Advanced", phone: "+998 97 234 56 78", status: "Активный" },
  { id: "3", name: "Жанна Бекова", group: "IT Basics", phone: "+998 91 345 67 89", status: "Задолженность" },
];

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Управление учениками</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Список учеников</h1>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                className="w-full rounded-3xl border border-slate-800/70 bg-slate-950/70 py-3 pl-10 pr-4 text-sm text-slate-100 outline-none transition focus:border-sky-500"
                placeholder="Поиск ученика"
              />
            </div>
            <Link href="/students/new" className="inline-flex items-center justify-center rounded-3xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
              Добавить ученика
            </Link>
          </div>
        </div>
      </div>

      <section className="overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/80 shadow-xl shadow-slate-950/20">
        <table className="min-w-full border-separate border-spacing-0 text-sm">
          <thead className="bg-slate-950/90 text-slate-400">
            <tr>
              <th className="px-6 py-4 text-left">Имя</th>
              <th className="px-6 py-4 text-left">Группа</th>
              <th className="px-6 py-4 text-left">Контакт</th>
              <th className="px-6 py-4 text-left">Статус</th>
              <th className="px-6 py-4 text-right">Действия</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className={index % 2 === 0 ? "bg-slate-950/80" : "bg-slate-900/80"}>
                <td className="px-6 py-4 text-white">{student.name}</td>
                <td className="px-6 py-4 text-slate-300">{student.group}</td>
                <td className="px-6 py-4 text-slate-300">{student.phone}</td>
                <td className="px-6 py-4 text-slate-300">{student.status}</td>
                <td className="px-6 py-4 text-right">
                  <Link href={`/students/${student.id}`} className="text-sky-400 hover:text-sky-300">
                    Профиль
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
