import Link from "next/link";

interface GroupPageProps {
  params: { id: string };
}

export default function GroupDetailPage({ params }: GroupPageProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Страница группы</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Группа #{params.id}</h1>
          </div>
          <Link href="/groups" className="rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-sky-400 transition hover:bg-slate-700">
            К списку групп
          </Link>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
          <h2 className="text-xl font-semibold text-white">Детали группы</h2>
          <div className="mt-6 space-y-4 text-slate-300">
            <p><span className="text-slate-400">Название:</span> English A1</p>
            <p><span className="text-slate-400">Преподаватель:</span> Мадина Рахимова</p>
            <p><span className="text-slate-400">Расписание:</span> Пн, Ср 18:00-20:00</p>
            <p><span className="text-slate-400">Комната:</span> 102</p>
            <p><span className="text-slate-400">Студентов:</span> 14</p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
          <h2 className="text-xl font-semibold text-white">Участники</h2>
          <div className="mt-6 space-y-3 text-slate-300">
            <p>Алишер Ходжаев</p>
            <p>Саида Назарова</p>
            <p>Жанна Бекова</p>
          </div>
        </section>
      </div>
    </div>
  );
}
