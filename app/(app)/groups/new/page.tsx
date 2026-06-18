import Link from "next/link";

export default function NewGroupPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Создание группы</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Новая группа</h1>
          </div>
          <Link href="/groups" className="rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-sky-400 transition hover:bg-slate-700">
            Вернуться к списку
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
        <p className="text-slate-400">Здесь можно реализовать форму создания группы с назначением преподавателя, расписанием и тарифом.</p>
      </div>
    </div>
  );
}
