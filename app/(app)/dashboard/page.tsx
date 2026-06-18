import { CalendarDays, CreditCard, Group, Users } from "lucide-react";
import { StatsCard } from "@/components/stats-card";
import { getDashboardStats, getRecentPayments } from "@/lib/dashboard";
import type { RecentPayment } from "@/lib/dashboard";

export const dynamic = "force-dynamic";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
  }).format(date);
}

function getStatusClass(status: string) {
  if (status === "PAID") {
    return "text-emerald-300";
  }

  if (status === "OVERDUE") {
    return "text-rose-400";
  }

  return "text-amber-300";
}

function formatStatusLabel(status: string) {
  if (status === "PAID") {
    return "Оплачено";
  }

  if (status === "OVERDUE") {
    return "Просрочено";
  }

  if (status === "PENDING") {
    return "В ожидании";
  }

  return status;
}

async function getDashboardData() {
  const [stats, recentPayments] = await Promise.all([getDashboardStats(), getRecentPayments()]);

  return {
    stats,
    recentPayments,
  };
}

export default async function DashboardPage() {
  const { stats, recentPayments } = await getDashboardData();

  const cards = [
    {
      title: "Ученики",
      value: String(stats.studentCount),
      description: "Активных учеников",
      icon: Users,
    },
    {
      title: "Преподаватели",
      value: String(stats.teacherCount),
      description: "Текущих преподавателей",
      icon: Group,
    },
    {
      title: "Группы",
      value: String(stats.groupCount),
      description: "Активных групп",
      icon: CreditCard,
    },
    {
      title: "Платежи",
      value: String(stats.paymentCount),
      description: "Всего платежей",
      icon: CalendarDays,
    },
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Панель управления</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Добро пожаловать в O‘quv markazi</h1>
            <p className="mt-2 max-w-2xl text-slate-400">
              Общая статистика, финансы и управление группами в одном месте.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-4 xl:grid-cols-4">
        {cards.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">Финансовая аналитика</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Платежи за месяц</h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
              {formatCurrency(stats.paidAmountThisMonth)}
            </span>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between rounded-3xl border border-slate-800/70 bg-slate-950/50 p-4">
              <div>
                <p className="text-sm text-slate-400">Оплачено в этом месяце</p>
                <p className="mt-2 text-3xl font-semibold text-white">{formatCurrency(stats.paidAmountThisMonth)}</p>
              </div>
              <div className="rounded-2xl bg-slate-800/70 px-3 py-2 text-sm text-slate-300">{stats.paymentCount} платежей</div>
            </div>
            <div className="flex items-center justify-between rounded-3xl border border-slate-800/70 bg-slate-950/50 p-4">
              <div>
                <p className="text-sm text-slate-400">Просроченные платежи</p>
                <p className="mt-2 text-3xl font-semibold text-white">{stats.overduePaymentCount}</p>
              </div>
              <div className="rounded-2xl bg-orange-500/10 px-3 py-2 text-sm text-orange-300">{stats.overduePaymentCount} задолженностей</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">Последние платежи</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Транзакции</h2>
            </div>
            <div className="inline-flex rounded-2xl bg-slate-800/70 px-3 py-2 text-sm text-slate-300">{recentPayments.length} записей</div>
          </div>

          <div className="mt-6 space-y-3">
            {recentPayments.length === 0 ? (
              <div className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-6 text-center text-slate-400">
                Нет платежей для отображения.
              </div>
            ) : (
              recentPayments.map((payment: RecentPayment) => (
                <article key={payment.id} className="rounded-3xl border border-slate-800/70 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{payment.studentName}</p>
                      <p className="mt-1 text-sm text-slate-400">{formatDate(payment.dueDate)}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white">{formatCurrency(payment.amount)}</p>
                      <p className={getStatusClass(payment.status)}>{formatStatusLabel(payment.status)}</p>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
