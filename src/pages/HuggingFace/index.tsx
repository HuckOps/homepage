import { useEffect, useState } from "react";
import { display } from "../../theme";

type Overview = {
  user: string;
  fullname: string;
  avatarUrl: string;
  isPro: boolean;
  numModels: number;
  numDatasets: number;
  numSpaces: number;
  numFollowers: number;
  numFollowing: number;
  numLikes: number;
  createdAt: string;
};

type Item = {
  id: string;
  downloads: number;
  likes: number;
  lastModified: string;
  private: boolean;
};

const API = "https://huggingface.co/api";

function fmt(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function avatar(overview: Overview): string {
  const u = overview.avatarUrl || "";
  return u.startsWith("http") ? u : `https://huggingface.co${u}`;
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="ignore text-2xl font-semibold text-zinc-900">{value}</div>
      <div className="mt-1 text-[0.7rem] uppercase tracking-[0.15em] text-zinc-400">
        {label}
      </div>
    </div>
  );
}

function SectionTitle({
  title,
  en,
  count,
}: {
  title: string;
  en: string;
  count: number;
}) {
  return (
    <div className="mb-4 flex items-baseline justify-between border-b border-stone-200 pb-2">
      <h2
        className={`${display} text-[1.4rem] font-semibold tracking-tight text-zinc-900`}
      >
        {title}
      </h2>
      <span className="text-[0.7rem] uppercase tracking-[0.25em] text-zinc-400">
        {en} · {count}
      </span>
    </div>
  );
}

function ItemRow({ item, kind }: { item: Item; kind: "models" | "datasets" }) {
  return (
    <li className="border-b border-stone-200">
      <a
        href={`https://huggingface.co/${kind}/${item.id}`}
        target="_blank"
        rel="noreferrer"
        className="group grid grid-cols-1 gap-1 py-5 transition-colors hover:bg-stone-50 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
      >
        <div>
          <h3 className="ignore text-xl font-medium text-zinc-900 transition-colors group-hover:text-orange-700">
            {item.id}
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            更新于 <span className="ignore">{fmt(item.lastModified)}</span>
          </p>
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <span>
            <span className="ignore text-zinc-800">{item.downloads}</span> 下载
          </span>
          <span>
            <span className="ignore text-zinc-800">{item.likes}</span> 赞
          </span>
        </div>
      </a>
    </li>
  );
}

export default function () {
  const [overview, setOverview] = useState<Overview | null>(null);
  const [models, setModels] = useState<Item[]>([]);
  const [datasets, setDatasets] = useState<Item[]>([]);
  const [status, setStatus] = useState<"loading" | "done" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      fetch(`${API}/users/huckops/overview`).then((r) => r.json()),
      fetch(`${API}/models?author=huckops`).then((r) => r.json()),
      fetch(`${API}/datasets?author=huckops`).then((r) => r.json()),
    ])
      .then(([ov, m, d]: [Overview, Item[], Item[]]) => {
        if (cancelled) return;
        setOverview(ov);
        setModels(Array.isArray(m) ? m : []);
        setDatasets(Array.isArray(d) ? d : []);
        setStatus("done");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="text-zinc-800">
      {/* 引言 */}
      <section className="mt-12 grid gap-10 md:grid-cols-[180px_1fr]">
        <div className="text-3xl uppercase tracking-[0.25em] text-zinc-400">
          Hugging Face
        </div>
        <div>
          <p
            className={`${display} text-[1.5rem] leading-snug text-zinc-900 first-letter:mr-2 first-letter:float-left first-letter:font-semibold first-letter:text-[3.4rem] first-letter:leading-[0.8]`}
          >
            这里是我 Hugging Face 上的公开模型和数据集。
          </p>
          <p className="mt-6 space-y-4 text-[1rem] leading-[1.8] text-zinc-600">
            下面这些资料通过 Hugging Face 公共 API
            实时拉取，过一会儿刷新就会更新。
          </p>
        </div>
      </section>

      {status === "loading" && <p className="mt-16 text-zinc-400">加载中…</p>}
      {status === "error" && (
        <p className="mt-16 text-zinc-500">
          加载失败，可能是网络或接口跨域限制，请稍后重试。
        </p>
      )}

      {status === "done" && overview && (
        <>
          {/* 个人概览 */}
          <section className="mt-16 flex flex-col gap-6 border-b border-stone-200 pb-8 sm:flex-row sm:items-center">
            <img
              src={avatar(overview)}
              alt={overview.user}
              className="ignore h-20 w-20 rounded-full border border-stone-200"
            />
            <div>
              <h2 className={`${display} text-2xl font-semibold text-zinc-900`}>
                {overview.fullname}
              </h2>
              <p className="text-zinc-500">
                <span className="ignore">@{overview.user}</span>
                {overview.isPro ? " · Pro" : ""}
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                加入于 <span className="ignore">{fmt(overview.createdAt)}</span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4 sm:ml-auto">
              <Stat label="模型" value={overview.numModels} />
              <Stat label="数据集" value={overview.numDatasets} />
              <Stat label="Spaces" value={overview.numSpaces} />
              <Stat label="关注者" value={overview.numFollowers} />
              <Stat label="关注中" value={overview.numFollowing} />
              <Stat label="获赞" value={overview.numLikes} />
            </div>
          </section>

          {/* 模型 */}
          <section className="mt-16">
            <SectionTitle title="模型" en="Models" count={models.length} />
            {models.length === 0 ? (
              <p className="py-6 text-zinc-400">暂无公开模型。</p>
            ) : (
              <ul>
                {models.map((m) => (
                  <ItemRow key={m.id} item={m} kind="models" />
                ))}
              </ul>
            )}
          </section>

          {/* 数据集 */}
          <section className="mt-16">
            <SectionTitle
              title="数据集"
              en="Datasets"
              count={datasets.length}
            />
            {datasets.length === 0 ? (
              <p className="py-6 text-zinc-400">暂无公开数据集。</p>
            ) : (
              <ul>
                {datasets.map((d) => (
                  <ItemRow key={d.id} item={d} kind="datasets" />
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
}
