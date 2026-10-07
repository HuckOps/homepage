import { display } from "../../theme";
import { projects, importent } from "../../data/projects";

export default function () {
  return (
    <div className="text-zinc-800">
      {/* 引言 + 关于 */}
      <section className="mt-12 grid gap-10 md:grid-cols-[180px_1fr]">
        <div className="text-3xl uppercase tracking-[0.25em] text-zinc-400">
          关于
        </div>
        <div>
          <p
            className={`${display} text-[1.5rem] leading-snug text-zinc-900 first-letter:mr-2 first-letter:float-left first-letter:font-semibold first-letter:text-[3.4rem] first-letter:leading-[0.8]`}
          >
            从大厂到自由职业，一直在跟系统和自动化打交道。
          </p>
          <div className="mt-6 space-y-4 text-[1rem] leading-[1.8] text-zinc-600">
            <p>
              早些年在网易集团和小米集团做高级软件研发工程师，做的是运维开发与云计算相关的事。后来离开大厂，开始自己接项目、做产品。
            </p>
            <p>
              技术上主要在做运维自动化、爬虫开发、Linux
              系统运维，最近几年也写区块链智能合约；后端主力语言是
              Golang。不写代码的时候，我在准备法考，不想做律师的程序员不是好力工。
            </p>
          </div>
        </div>
      </section>

      {/* 精选作品 */}
      <section className="mt-20">
        <div className="mb-2 flex items-baseline justify-between border-b border-stone-200 pb-4">
          <h2
            className={`${display} text-[1.6rem] font-semibold tracking-tight text-zinc-900`}
          >
            精选作品
          </h2>
        </div>
        <ul>
          {projects.map((p, i) => (
            <li key={p.name} className="border-b border-stone-200">
              <a
                href={p.url}
                className="group grid grid-cols-1 items-baseline gap-1 py-6 transition-colors hover:bg-stone-50 sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
              >
                <span
                  className={`${display} text-2xl text-stone-300 transition-colors group-hover:text-orange-700`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="ignore text-xl font-medium text-zinc-900 transition-colors group-hover:text-orange-700">
                    {p.name}
                  </h3>
                  <p className="mt-1 max-w-xl text-[0.95rem] leading-relaxed text-zinc-600">
                    {p.desc}
                  </p>
                </div>
                <span className="text-[0.8rem] uppercase tracking-wider text-zinc-400">
                  {p.meta}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <div className="mb-2 flex items-baseline justify-between border-b border-stone-200 pb-4">
          <h2
            className={`${display} text-[1.6rem] font-semibold tracking-tight text-zinc-900`}
          >
            重点项目
          </h2>
        </div>
        <ul>
          {importent.map((p, i) => (
            <li key={p.name} className="border-b border-stone-200">
              <a
                href={p.url}
                className="group grid grid-cols-1 items-baseline gap-1 py-6 transition-colors hover:bg-stone-50 sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
              >
                <span
                  className={`${display} text-2xl text-stone-300 transition-colors group-hover:text-orange-700`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="ignore text-xl font-medium text-zinc-900 transition-colors group-hover:text-orange-700">
                    {p.name}
                  </h3>
                  <p className="mt-1 max-w-xl text-[0.95rem] leading-relaxed text-zinc-600">
                    {p.desc}
                  </p>
                </div>
                <span className="text-[0.8rem] uppercase tracking-wider text-zinc-400">
                  {p.meta}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
