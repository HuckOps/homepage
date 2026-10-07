import { display } from "../theme";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-stone-200 pt-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 text-[0.7rem] uppercase tracking-[0.25em] text-zinc-400">
            联系
          </div>
          <a
            href="mailto:huck@huckops.com"
            className={`ignore ${display} text-2xl text-zinc-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-zinc-900`}
          >
            huck@huckops.com
          </a>
        </div>
        <nav className="flex gap-5 text-[0.95rem] text-zinc-500">
          <a
            href="https://github.com/huckops"
            className="ignore transition-colors hover:text-zinc-900"
          >
            GitHub
          </a>
          <a
            href="https://t.me/Huck"
            className="ignore transition-colors hover:text-zinc-900"
          >
            Telegram
          </a>
        </nav>
      </div>
      <p className="mt-10 text-[0.75rem] text-zinc-400">
        © {new Date().getFullYear()} <span className="ignore">HuckOps</span>. All
        rights reserved.
      </p>
    </footer>
  );
}
