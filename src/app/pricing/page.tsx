import {Container} from "@/components/Container";
import {getTranslations} from "next-intl/server";
import {anychatUrl} from "@/lib/anychat";

export default async function PricingPage() {
  const t = await getTranslations("pricingPage");
  const tPricing = await getTranslations("home.pricing");

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-[color:var(--color-q-blue)] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-black/70">{t("subtitle")}</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="text-lg font-semibold">{tPricing("free")}</h3>
            <div className="mt-3 text-2xl font-semibold text-black/80">{tPricing("freePrice")}</div>
            <a
              href={anychatUrl("/register")}
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-[#0b1020] px-4 text-sm font-semibold text-white hover:opacity-95"
            >
              {tPricing("choose")}
            </a>
            <ul className="mt-6 space-y-3 text-sm text-black/70">
              <li>✓ Limited channels</li>
              <li>✓ Basic limits</li>
              <li>✓ Email support</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="text-lg font-semibold">{tPricing("essential")}</h3>
            <div className="mt-3 grid gap-1">
              <div className="text-2xl font-semibold text-black/80">{tPricing("essentialMonthly")}</div>
              <div className="text-sm font-semibold text-black/50">{tPricing("essentialYearly")}</div>
            </div>
            <a
              href={anychatUrl("/pricing")}
              className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-[#0b1020] px-4 text-sm font-semibold text-white hover:opacity-95"
            >
              {tPricing("choose")}
            </a>
            <ul className="mt-6 space-y-3 text-sm text-black/70">
              <li>✓ 50+ channels</li>
              <li>✓ Live chat widget</li>
              <li>✓ Built-in forms</li>
              <li>✓ Useful integrations</li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-[color:var(--color-q-blue)] to-[color:var(--color-q-gold)] p-6 text-white shadow-[0_18px_60px_rgba(26,58,95,0.25)]">
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
            <div className="relative inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              {tPricing("mostPopular")}
            </div>
            <h3 className="relative mt-3 text-lg font-semibold">{tPricing("growth")}</h3>
            <div className="relative mt-3 grid gap-1">
              <div className="text-3xl font-semibold">{tPricing("growthMonthly")}</div>
              <div className="text-sm font-semibold text-white/80">{tPricing("growthYearly")}</div>
            </div>
            <a
              href={anychatUrl("/pricing")}
              className="relative mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-white/20 px-4 text-sm font-semibold text-white hover:bg-white/25"
            >
              {tPricing("choose")}
            </a>
            <ul className="relative mt-6 space-y-3 text-sm text-white/85">
              <li>✓ Higher limits</li>
              <li>✓ Priority support</li>
              <li>✓ Advanced automation</li>
              <li>✓ Team access</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-sm leading-7 text-black/70">
          <a className="font-semibold text-[color:var(--color-q-blue)] hover:underline" href={anychatUrl("/pricing")}>
            {t("viewPricing")}
          </a>
        </div>
      </Container>
    </div>
  );
}

