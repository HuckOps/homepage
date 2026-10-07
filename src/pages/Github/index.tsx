import { display } from "../../theme";

type Card = {
  title: string;
  en: string;
  url: string;
};

const cards: Card[] = [
  {
    title: "综合状态卡",
    en: "Stats Card",
    url: "https://github-readme-stats.vercel.app/api?username=HuckOps&show_icons=true&theme=transparent&bg_color=faf8f5&title_color=18181b&text_color=52525b&icon_color=71717a&hide_border=true",
  },
  {
    title: "常用语言卡",
    en: "Top Languages",
    url: "https://github-readme-stats.vercel.app/api/top-langs/?username=HuckOps&layout=compact&theme=transparent&bg_color=faf8f5&title_color=18181b&text_color=52525b&hide_border=true",
  },
  {
    title: "贡献连续性",
    en: "Streak Stats",
    url: "https://streak-stats.demolab.com/?user=HuckOps&theme=transparent&hide_border=true",
  },
  {
    title: "贡献热力图",
    en: "Activity Graph",
    url: "https://fabianocouto-activity-graph.vercel.app/graph?username=HuckOps&theme=transparent&bg_color=faf8f5&area=true&days=30&hide_border=true",
  },
];

export default function () {
  return (
    <div className="text-zinc-800">
      {/* 引言 */}
      <section className="mt-12 grid gap-10 md:grid-cols-[180px_1fr]">
        <div className="text-3xl uppercase tracking-[0.25em] text-zinc-400">
          GitHub
        </div>
        <div>
          <p
            className={`${display} text-[1.5rem] leading-snug text-zinc-900 first-letter:mr-2 first-letter:float-left first-letter:font-semibold first-letter:text-[3.4rem] first-letter:leading-[0.8]`}
          >
            这里是我公开在 GitHub 上的一些状态。
          </p>
          <p className="mt-6 space-y-4 text-[1rem] leading-[1.8] text-zinc-600">
            下面这些卡片展示综合状态、常用语言、贡献连续性、近 30
            天的贡献热力图，以及主要仓库的 Star
            变化；数据都由第三方服务实时生成。
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <img
              src="https://img.shields.io/github/followers/HuckOps?style=flat-square&color=52525b"
              alt="followers"
              className="ignore inline-block h-6"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 状态卡列表 */}
      <section className="mt-16 space-y-12">
        {cards.map((c) => (
          <div key={c.title}>
            <div className="mb-3 flex items-baseline justify-between border-b border-stone-200 pb-2">
              <h2
                className={`${display} text-[1.4rem] font-semibold tracking-tight text-zinc-900`}
              >
                {c.title}
              </h2>
              <span className="text-[0.7rem] uppercase tracking-[0.25em] text-zinc-400">
                {c.en}
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-stone-200">
              <img
                src={c.url}
                alt={c.title}
                className="ignore mx-auto block w-full"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
