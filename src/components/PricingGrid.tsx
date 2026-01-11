"use client";

import {useMemo, useState} from "react";
import {useTranslations} from "next-intl";
import {Container} from "@/components/Container";
import {anychatUrl} from "@/lib/anychat";

type Billing = "monthly" | "yearly";

function BillingToggle({
  value,
  onChange,
  variant
}: {
  value: Billing;
  onChange: (v: Billing) => void;
  variant: "light" | "dark";
}) {
  const t = useTranslations();
  const base =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white/90"
      : "border-black/10 bg-black/5 text-black/70";

  const active =
    variant === "dark"
      ? "bg-white/20 text-white"
      : "bg-white text-black shadow-sm";

  return (
    <div
      dir="ltr"
      className={`inline-flex items-center whitespace-nowrap rounded-full border p-1 text-xs font-semibold ${base}`}
    >
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`rounded-full px-3 py-1 ${value === "monthly" ? active : "opacity-80 hover:opacity-100"}`}
      >
        {t("home.pricing.billingMonthly")}
      </button>
      <button
        type="button"
        onClick={() => onChange("yearly")}
        className={`rounded-full px-3 py-1 ${value === "yearly" ? active : "opacity-80 hover:opacity-100"}`}
      >
        {t("home.pricing.billingYearly")}
      </button>
    </div>
  );
}

function parseMoneyNumber(text: string): number | null {
  const m = text.match(/(\d+(?:\.\d+)?)/);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

function yearlySavings(monthlyText: string, yearlyText: string): number | null {
  const m = parseMoneyNumber(monthlyText);
  const y = parseMoneyNumber(yearlyText);
  if (m == null || y == null) return null;
  const save = m * 12 - y;
  if (!Number.isFinite(save) || save <= 0) return null;
  return Math.round(save);
}

function PlanPrice({
  billing,
  monthly,
  yearly,
  tone
}: {
  billing: Billing;
  monthly: string;
  yearly: string;
  tone: "light" | "dark";
}) {
  const t = useTranslations();
  const isMonthly = billing === "monthly";
  const primary = isMonthly ? monthly : yearly;

  const primaryClass = tone === "dark" ? "text-white" : "text-black/80";
  const savingsClass = tone === "dark" ? "text-white/85" : "text-black/55";
  const savings = yearlySavings(monthly, yearly);

  return (
    <div className="mt-3 grid gap-1">
      <div className={`text-2xl font-semibold ${primaryClass}`}>{primary}</div>
      {savings != null ? (
        <div className={`text-sm font-semibold ${savingsClass}`}>{t("home.pricing.savePerYear", {amount: savings})}</div>
      ) : null}
    </div>
  );
}

export function PricingGrid({
  showHeading = true,
  sectionId,
  isRtl = false
}: {
  showHeading?: boolean;
  sectionId?: string;
  isRtl?: boolean;
}) {
  const t = useTranslations();
  const [essentialBilling, setEssentialBilling] = useState<Billing>("monthly");
  const [growthBilling, setGrowthBilling] = useState<Billing>("monthly");

  const featureLists = useMemo(
    () => ({
      free: ["✓ Limited channels", "✓ Basic limits", "✓ Email support"],
      essential: ["✓ 50+ channels", "✓ Live chat widget", "✓ Built-in forms", "✓ Useful integrations"],
      growth: ["✓ Higher limits", "✓ Priority support", "✓ Advanced automation", "✓ Team access"]
    }),
    []
  );

  return (
    <section id={sectionId} className={showHeading ? "py-14 sm:py-20" : undefined}>
      <Container>
        {showHeading ? (
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-(--color-q-blue) sm:text-4xl">
              {t("home.pricing.title")}
            </h2>
            <p className="mt-3 text-sm text-black/60">{t("home.pricing.subtitle")}</p>
          </div>
        ) : null}

        <div className={showHeading ? "mt-10 grid gap-5 lg:grid-cols-3" : "grid gap-5 lg:grid-cols-3"}>
          {/* Free */}
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="text-lg font-semibold">{t("home.pricing.free")}</h3>
            <div className="mt-3 text-2xl font-semibold text-black/80">{t("home.pricing.freePrice")}</div>
            <a
              href={anychatUrl("/register")}
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-[#0b1020] px-4 text-sm font-semibold text-white hover:opacity-95"
            >
              {t("home.pricing.choose")}
            </a>
            <ul className="mt-6 space-y-3 text-sm text-black/70">
              {featureLists.free.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          {/* Growth (middle, featured) */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-[color:var(--color-q-blue)] to-[color:var(--color-q-gold)] p-6 text-white shadow-[0_18px_60px_rgba(26,58,95,0.25)]">
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
            <div className={["absolute top-4 z-10", isRtl ? "left-4" : "right-4"].join(" ")}>
              <BillingToggle value={growthBilling} onChange={setGrowthBilling} variant="dark" />
            </div>
            <div className="relative inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              {t("home.pricing.mostPopular")}
            </div>
            <h3 className="relative mt-3 text-lg font-semibold">{t("home.pricing.growth")}</h3>
            <PlanPrice
              billing={growthBilling}
              monthly={t("home.pricing.growthMonthly")}
              yearly={t("home.pricing.growthYearly")}
              tone="dark"
            />
            <a
              href={anychatUrl("/register")}
              className="relative mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-white/20 px-4 text-sm font-semibold text-white hover:bg-white/25"
            >
              {t("home.pricing.choose")}
            </a>
            <ul className="relative mt-6 space-y-3 text-sm text-white/85">
              {featureLists.growth.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          {/* Essential */}
          <div className="relative rounded-2xl border border-black/10 bg-white p-6">
            <div className={["absolute top-4 z-10", isRtl ? "left-4" : "right-4"].join(" ")}>
              <BillingToggle value={essentialBilling} onChange={setEssentialBilling} variant="light" />
            </div>
            <h3 className="text-lg font-semibold">{t("home.pricing.essential")}</h3>
            <PlanPrice
              billing={essentialBilling}
              monthly={t("home.pricing.essentialMonthly")}
              yearly={t("home.pricing.essentialYearly")}
              tone="light"
            />
            <a
              href={anychatUrl("/register")}
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-[#0b1020] px-4 text-sm font-semibold text-white hover:opacity-95"
            >
              {t("home.pricing.choose")}
            </a>
            <ul className="mt-6 space-y-3 text-sm text-black/70">
              {featureLists.essential.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

