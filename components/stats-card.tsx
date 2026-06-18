import type { ComponentType } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export function StatsCard({ title, value, description, icon: Icon }: StatsCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{title}</p>
          <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/90 text-sky-300">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}
