import { CircleCheck, CircleX } from "lucide-react";

const summaries = [
  { label: "Посещаемость сегодня", value: "95%", tone: "success" },
  { label: "Средний процент", value: "92%", tone: "neutral" },
  { label: "Новых отметок", value: "18", tone: "info" },
];

const history = [
  { date: "17 июня", group: "English A1", student: "Алишер Ходжаев", status: "Присутствовал" },
  { date: "17 июня", group: "Math Advanced", student: "Саида Назарова", status: "Отсутствовал" },
  { date: "17 июня", group: "IT Fundamentals", student: "Жанна Бекова", status: "Присутствовал" },
];

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <p className="text-sm text-slate-400">Посещаемость</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Davomat контроль</h1>
        <p className="mt-3 max-w-2xl text-slate-400">
          Отмечайте присутствие и отслеживайте статистику по школьникам и группам.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {summaries.map((item) => (
          <article key={item.label} className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300">
              {item.tone === "success" ? <CircleCheck className="h-4 w-4 text-emerald-300" /> : <CircleX className="h-4 w-4 text-amber-300" />}
              Статистика обновляется в реальном времени
            </div>
          </article>
        ))}
      </div>

      <section className="overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/80 shadow-xl shadow-slate-950/20">
        <div className="border-b border-slate-800/70 px-6 py-4 text-sm text-slate-400">История посещаемости</div>
        <table className="min-w-full border-separate border-spacing-0 text-sm">
          <thead className="bg-slate-950/90 text-slate-400">
            <tr>
              <th className="px-6 py-4 text-left">Дата</th>
              <th className="px-6 py-4 text-left">Группа</th>
              <th className="px-6 py-4 text-left">Ученик</th>
              <th className="px-6 py-4 text-left">Статус</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={`${item.student}-${index}`} className={index % 2 === 0 ? "bg-slate-950/80" : "bg-slate-900/80"}>
                <td className="px-6 py-4 text-white">{item.date}</td>
                <td className="px-6 py-4 text-slate-300">{item.group}</td>
                <td className="px-6 py-4 text-slate-300">{item.student}</td>
                <td className="px-6 py-4 text-slate-300">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
