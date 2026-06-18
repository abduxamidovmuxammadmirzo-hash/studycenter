import Link from "next/link";
import { Bell, Search, UserCircle2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b border-slate-800/70 bg-slate-950/95 px-4 py-4 shadow-sm shadow-slate-950/10 backdrop-blur-md lg:px-6">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-3xl bg-slate-900/90 px-4 py-3 text-sm font-semibold text-white">O‘quv markazi</div>
          <div className="hidden items-center gap-3 rounded-3xl border border-slate-800/70 bg-slate-900/80 px-4 py-3 text-slate-400 sm:flex">
            <Search className="h-4 w-4" />
            <input
              type="search"
              placeholder="Поиск..."
              className="w-full bg-transparent outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-900/90 text-slate-300 transition hover:bg-slate-900 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <Link href="/sign-in" className="inline-flex items-center gap-2 rounded-3xl bg-slate-900/90 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900 hover:text-white">
            <UserCircle2 className="h-5 w-5" />
            Вход
          </Link>
        </div>
      </div>
    </header>
  );
}
