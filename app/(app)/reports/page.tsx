const reports = [
  { id: "r1", title: "Финансовый отчёт июня", type: "Excel", date: "15 июня" },
  { id: "r2", title: "Посещаемость English A1", type: "PDF", date: "17 июня" },
  { id: "r3", title: "Долги по группам", type: "Excel", date: "16 июня" },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <p className="text-sm text-slate-400">Отчёты</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Генерация отчётов</h1>
        <p className="mt-3 max-w-2xl text-slate-400">
          Скачивайте финансовые и посещаемости отчёты, экспорт в Excel и PDF.
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        {reports.map((report) => (
          <article key={report.id} className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
            <div className="flex items-center justify-between gap-3 text-slate-300">
              <p className="text-sm uppercase tracking-[0.2em]">{report.type}</p>
              <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs uppercase text-sky-300">{report.date}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white">{report.title}</h2>
            <button className="mt-6 inline-flex rounded-3xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
              Скачать
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}
