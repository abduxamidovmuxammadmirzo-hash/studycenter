"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { Lock, Mail } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    setLoading(false);

    if (result?.error) {
      setError("Неверный email или пароль");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">O‘quv markazi</p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Войти в систему</h1>
          <p className="mt-2 text-slate-400">Пожалуйста, используйте свои учетные данные для доступа.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Email</label>
            <div className="flex items-center gap-3 rounded-3xl border border-slate-800/70 bg-slate-950/80 px-4 py-3">
              <Mail className="h-4 w-4 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-transparent text-white outline-none"
                placeholder="admin@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-300">Пароль</label>
            <div className="flex items-center gap-3 rounded-3xl border border-slate-800/70 bg-slate-950/80 px-4 py-3">
              <Lock className="h-4 w-4 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full bg-transparent text-white outline-none"
                placeholder="Пароль"
              />
            </div>
          </div>

          {error ? <p className="text-sm text-rose-400">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-3xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
}
