import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "首页", end: true },
  { to: "/github", label: "GitHub", end: false },
  { to: "/huggingface", label: "Hugging Face", end: false },
];

export default function SiteNav() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-stone-200 pb-4">
      <NavLink
        to="/"
        className="ignore font-['Fraunces',serif] text-4xl font-semibold tracking-tight text-zinc-900"
      >
        HuckOps
      </NavLink>
      <div className="flex items-baseline gap-6">
        <nav className="flex items-baseline gap-5 text-[0.95rem]">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                isActive
                  ? "text-zinc-900"
                  : "text-zinc-400 transition-colors hover:text-zinc-900"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div id="translate" />
      </div>
    </header>
  );
}
