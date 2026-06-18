import type { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[1600px] flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
