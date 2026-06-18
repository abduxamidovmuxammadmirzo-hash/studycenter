import Link from "next/link";

const teachers = [
  { id: "t1", name: "Мадина Рахимова", subject: "English", groups: 3, status: "Активный" },
  { id: "t2", name: "Олег Петров", subject: "Math", groups: 2, status: "Активный" },
  { id: "t3", name: "Шахноза Каримова", subject: "IT", groups: 2, status: "В отпуске" },
];

export default function TeachersPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <p className="text-sm text-slate-400">Преподаватели</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Команда преподавателей</h1>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {teachers.map((teacher) => (
          <article key={teacher.id} className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Преподаватель</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{teacher.name}</h2>
            <div className="mt-4 space-y-2 text-slate-300">
              <p>Предмет: {teacher.subject}</p>
              <p>Групп: {teacher.groups}</p>
              <p>Статус: {teacher.status}</p>
            </div>
            <Link href={`/teachers/${teacher.id}`} className="mt-6 inline-flex rounded-3xl bg-slate-800 px-4 py-2 text-sm font-semibold text-sky-400 transition hover:bg-slate-700">
              Подробнее
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
