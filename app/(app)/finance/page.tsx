const financialItems = [
  { label: "Месячные оплаты", value: "₽ 1,450,000" },
  { label: "Долги учеников", value: "₽ 86,500" },
  { label: "Новые транзакции", value: "24" },
];

const invoices = [
  { id: "INV-1001", student: "Фаррух Алиев", amount: "₽ 45,000", due: "20 июня", status: "Оплачено" },
  { id: "INV-1005", student: "Жанна Бекова", amount: "₽ 32,000", due: "21 июня", status: "Ожидает" },
  { id: "INV-1008", student: "Саида Назарова", amount: "₽ 27,500", due: "18 июня", status: "Просрочено" },
];

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <p className="text-sm text-slate-400">Финансы</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Учёт платежей</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {financialItems.map((item) => (
          <article key={item.label} className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
          </article>
        ))}
      </div>

      <section className="overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/80 shadow-xl shadow-slate-950/20">
        <div className="border-b border-slate-800/70 px-6 py-4 text-sm text-slate-400">Последние транзакции</div>
        <table className="min-w-full border-separate border-spacing-0 text-sm">
          <thead className="bg-slate-950/90 text-slate-400">
            <tr>
              <th className="px-6 py-4 text-left">Счёт</th>
              <th className="px-6 py-4 text-left">Ученик</th>
              <th className="px-6 py-4 text-left">Сумма</th>
              <th className="px-6 py-4 text-left">Срок</th>
              <th className="px-6 py-4 text-left">Статус</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-slate-950/80" : "bg-slate-900/80"}>
                <td className="px-6 py-4 text-white">{item.id}</td>
                <td className="px-6 py-4 text-slate-300">{item.student}</td>
                <td className="px-6 py-4 text-slate-300">{item.amount}</td>
                <td className="px-6 py-4 text-slate-300">{item.due}</td>
                <td className="px-6 py-4 text-slate-300">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
