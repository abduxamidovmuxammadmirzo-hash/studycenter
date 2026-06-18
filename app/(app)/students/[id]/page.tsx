import Link from "next/link";

interface StudentPageProps {
  params: { id: string };
}

export default function StudentProfilePage({ params }: StudentPageProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">Профиль ученика</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Ученик #{params.id}</h1>
          </div>
          <Link href="/students" className="rounded-3xl bg-slate-800 px-4 py-3 text-sm font-semibold text-sky-400 transition hover:bg-slate-700">
            Вернуться к списку
          </Link>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
          <h2 className="text-xl font-semibold text-white">Информация</h2>
          <div className="mt-6 space-y-4 text-slate-300">
            <p><span className="text-slate-400">Имя:</span> Алишер Ходжаев</p>
            <p><span className="text-slate-400">Email:</span> alisher@example.com</p>
            <p><span className="text-slate-400">Телефон:</span> +998 90 123 45 67</p>
            <p><span className="text-slate-400">Группа:</span> English A1</p>
            <p><span className="text-slate-400">Статус:</span> Активный</p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
          <h2 className="text-xl font-semibold text-white">История</h2>
          <div className="mt-6 space-y-4 text-slate-300">
            <p><span className="text-slate-400">Платежи:</span> 12</p>
            <p><span className="text-slate-400">Посещения:</span> 28</p>
            <p><span className="text-slate-400">Процент посещаемости:</span> 96%</p>
          </div>
        </section>
      </div>
    </div>
  );
}
