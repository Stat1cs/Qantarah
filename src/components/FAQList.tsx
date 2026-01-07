import {getTranslations} from "next-intl/server";

type Item = {q: string; a: string};

export async function FAQList() {
  const t = await getTranslations("faqPage");

  const items: Item[] = [
    {q: t("q1"), a: t("a1")},
    {q: t("q2"), a: t("a2")},
    {q: t("q3"), a: t("a3")},
    {q: t("q4"), a: t("a4")},
    {q: t("q5"), a: t("a5")},
    {q: t("q6"), a: t("a6")},
    {q: t("q7"), a: t("a7")}
  ];

  return (
    <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
      {items.map((it, idx) => (
        <details key={idx} className="group px-5 py-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-black/90">
            <div className="flex items-center justify-between gap-3">
              <span>{it.q}</span>
              <span className="text-black/40 group-open:rotate-45 transition-transform">+</span>
            </div>
          </summary>
          <div className="mt-3 text-sm leading-7 text-black/70">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

