import Link from "next/link";
import {getTranslations} from "next-intl/server";
import {getLocale} from "next-intl/server";
import {Container} from "@/components/Container";
import {anychatUrl} from "@/lib/anychat";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import {FAQList} from "@/components/FAQList";
import {
  FaDiscord,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaSlack,
  FaTelegram,
  FaViber,
  FaWhatsapp,
  FaXTwitter
} from "react-icons/fa6";
import {FiFileText, FiLink2, FiMessageCircle, FiSettings, FiZap} from "react-icons/fi";
import {RiPlug2Line} from "react-icons/ri";

export default async function HomePage() {
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const t = await getTranslations();
  const tFaq = await getTranslations("faqPage");

  return (
    <div className="bg-[#f7f6f2] text-[#0b1020]">
      {/* Hero (centered, Dribbble-like) */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[color:var(--color-q-blue)]/10 blur-3xl" />
          <div className="absolute -bottom-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[color:var(--color-q-gold)]/10 blur-3xl" />
        </div>

        <Container>
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            {/* Text */}
            <div
              className={[
                "text-center",
                isRtl ? "lg:order-2 lg:text-right" : "lg:order-1 lg:text-left"
              ].join(" ")}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold text-[color:var(--color-q-blue)] shadow-sm">
                <span className="inline-block size-1.5 rounded-full bg-[color:var(--color-q-gold)]" />
                {t("home.badge")}
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight text-[color:var(--color-q-blue)] sm:text-5xl">
                {t("home.hero.title")}
          </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-black/70 lg:mx-0">
                {t("home.hero.subtitle")}
              </p>

              <div
                className={[
                  "mt-7 flex flex-col gap-3 sm:flex-row sm:items-center",
                  isRtl ? "justify-center lg:justify-end" : "justify-center lg:justify-start"
                ].join(" ")}
              >
                <a
                  href={anychatUrl("/register")}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#0b1020] px-6 text-sm font-semibold text-white hover:opacity-95"
                >
                  {t("cta.startFree")}
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black hover:bg-black/[.03]"
                >
                  {t("cta.requestDemo")}
                </a>
              </div>

              <div
                className={[
                  "mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-black/45",
                  isRtl ? "justify-center lg:justify-end" : "justify-center lg:justify-start"
                ].join(" ")}
              >
                <span className="font-semibold text-black/60">
                  {t("home.trust.prefix")} {t("home.trust.value")} {t("home.trust.suffix")}
                </span>
                <span className="opacity-50">•</span>
                {["WhatsApp", "Messenger", "Telegram", "Discord"].map((x) => (
                  <span key={x} className="font-semibold">
                    {x}
                  </span>
                ))}
              </div>
            </div>

            {/* Phone mock */}
            <div
              className={[
                "relative mx-auto w-full max-w-sm",
                isRtl ? "lg:order-1" : "lg:order-2"
              ].join(" ")}
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-white/60 blur-xl" />
              <div className="relative rounded-[2.5rem] border border-black/10 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                <div className="rounded-[2rem] border border-black/10 bg-[#f9fafb] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold text-black/70">{t("site.name")}</div>
                    <div className="h-2 w-10 rounded-full bg-black/10" />
                  </div>
                  <div className="mt-4 space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3"
                      >
                        <div className="size-8 rounded-xl bg-[color:var(--color-q-blue)]/10" />
                        <div className="flex-1">
                          <div className="h-2.5 w-24 rounded-full bg-black/10" />
                          <div className="mt-2 h-2 w-40 rounded-full bg-black/5" />
                        </div>
                        <div className="h-2 w-10 rounded-full bg-black/5" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              <div className="pointer-events-none absolute -left-8 top-20 hidden rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold text-black/70 shadow-sm sm:block">
                Automated replies
              </div>
              <div className="pointer-events-none absolute -right-10 top-32 hidden rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold text-black/70 shadow-sm sm:block">
                50+ channels
              </div>
              <div className="pointer-events-none absolute left-1/2 top-[22rem] hidden -translate-x-1/2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold text-black/70 shadow-sm sm:block">
                Live chat
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features (Spotlight + equal height cards) */}
      <section id="features" className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[color:var(--color-q-blue)] sm:text-4xl">
              {t("home.features.title")}
            </h2>
            <p className="mt-3 text-sm text-black/60">{t("home.features.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: t("home.features.cards.channelsTitle"),
                body: t("home.features.cards.channelsBody"),
                Icon: FiLink2
              },
              {
                title: t("home.features.cards.liveChatTitle"),
                body: t("home.features.cards.liveChatBody"),
                Icon: FiMessageCircle
              },
              {
                title: t("home.features.cards.customTitle"),
                body: t("home.features.cards.customBody"),
                Icon: FiSettings
              },
              {
                title: "Prompt messages",
                body: "Display attractive and automated greeting messages.",
                Icon: FiZap
              },
              {
                title: "Built-in forms",
                body: "Create forms using a flexible form builder.",
                Icon: FiFileText
              },
              {
                title: "Useful integrations",
                body: "Connect your existing tools in minutes.",
                Icon: RiPlug2Line
              }
            ].map((card, idx) => (
              <SpotlightCard
                key={idx}
                className="h-full min-h-[220px] bg-white"
                spotlightColor="rgba(26, 58, 95, 0.10)"
              >
                <div className="flex h-full flex-col">
                  <div className="grid size-10 place-items-center rounded-xl bg-[color:var(--color-q-blue)]/10 text-[color:var(--color-q-blue)]">
                    <card.Icon className="size-[18px]" aria-hidden="true" focusable="false" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-black">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-black/60">{card.body}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>

      {/* “Employee-like” stats section */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-start">
            <div className="text-start">
              <h2 className="text-3xl font-semibold text-[color:var(--color-q-blue)] sm:text-4xl">
                {t("featuresPage.liveChatSystemTitle")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-black/60">{t("featuresPage.messengersBody")}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["WhatsApp", "Messenger", "Telegram", "Forms", "Live chat"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {label: "Channels", value: "50+"},
                {label: "Layouts", value: "4"},
                {label: "Automation", value: "Built-in"}
              ].map((it) => (
                <div key={it.label} className="rounded-2xl border border-black/10 bg-white p-5">
                  <div className="text-xs font-semibold text-black/50">{it.label}</div>
                  <div className="mt-2 text-lg font-semibold text-black">{it.value}</div>
                  <div className="mt-3 h-1.5 w-16 rounded-full bg-[color:var(--color-q-blue)]/20" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Apps grid (keep, restyled) */}
      <section id="messengers" className="py-14 sm:py-20">
        <Container>
          <h2 className="text-center text-3xl font-semibold text-[color:var(--color-q-blue)] sm:text-4xl">
            {t("home.apps.title")}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              {label: "WhatsApp", Icon: FaWhatsapp},
              {label: "Messenger", Icon: FaFacebookMessenger},
              {label: "Telegram", Icon: FaTelegram},
              {label: "Viber", Icon: FaViber},
              {label: "Discord", Icon: FaDiscord},
              {label: "Slack", Icon: FaSlack},
              {label: "Instagram", Icon: FaInstagram},
              {label: "X", Icon: FaXTwitter},
              {label: "LinkedIn", Icon: FaLinkedin}
            ].map((it, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4"
              >
                <div className="grid size-9 place-items-center rounded-xl bg-black/[.03] text-black/70">
                  <it.Icon className="size-[18px]" aria-hidden="true" focusable="false" />
                </div>
                <div className="text-sm font-semibold text-black/80">{it.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing (keep content, align to Dribbble cleaner look) */}
      <section id="pricing" className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[color:var(--color-q-blue)] sm:text-4xl">
              {t("home.pricing.title")}
            </h2>
            <p className="mt-3 text-sm text-black/60">{t("home.pricing.subtitle")}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-semibold">{t("home.pricing.enterprise")}</h3>
              <div className="mt-3 text-2xl font-semibold text-black/80">{t("home.pricing.enterprisePrice")}</div>
              <a
                href="#contact"
                className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-[#0b1020] px-4 text-sm font-semibold text-white hover:opacity-95"
              >
                {t("home.pricing.choose")}
              </a>
              <ul className="mt-6 space-y-3 text-sm text-black/70">
                <li>✓ Custom solution</li>
                <li>✓ Dedicated server</li>
                <li>✓ Custom API</li>
                <li>✓ VIP 24/7 support</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-[color:var(--color-q-blue)] to-[color:var(--color-q-gold)] p-6 text-white shadow-[0_18px_60px_rgba(26,58,95,0.25)]">
              <div className="pointer-events-none absolute inset-0 bg-black/20" />
              <div className="relative inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                Most popular
              </div>
              <h3 className="relative mt-3 text-lg font-semibold">{t("home.pricing.pro")}</h3>
              <div className="relative mt-3 flex items-end justify-center gap-2 lg:justify-start">
                <div className="text-4xl font-semibold">{t("home.pricing.proPrice")}</div>
                <div className="pb-1 text-sm text-white/80">{t("home.pricing.proPeriod")}</div>
              </div>
              <a
                href={anychatUrl("/pricing")}
                className="relative mt-6 inline-flex h-10 w-full items-center justify-center rounded-full bg-white/20 px-4 text-sm font-semibold text-white hover:bg-white/25"
              >
                {t("home.pricing.choose")}
              </a>
              <ul className="relative mt-6 space-y-3 text-sm text-white/85">
                <li>✓ All channels</li>
                <li>✓ Higher limits</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced features</li>
              </ul>
        </div>

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
                <li>✓ Limited channels</li>
                <li>✓ Basic limits</li>
                <li>✓ Email support</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[color:var(--color-q-blue)] sm:text-4xl">
              {tFaq("title")}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <FAQList />
          </div>

          <div className="mt-6 text-center">
            <Link href="/faq" className="text-sm font-semibold text-[color:var(--color-q-blue)] hover:opacity-80">
              {t("nav.faq")}
            </Link>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-14">
        <Container>
          <div
            className="rounded-2xl bg-gradient-to-r from-[color:var(--color-q-blue)] to-[color:var(--color-q-gold)] px-6 py-12 text-center text-white sm:px-10"
            id="contact"
          >
            <h2 className="text-3xl font-semibold sm:text-4xl">{t("home.ctaBanner.title")}</h2>
            <p className="mt-3 text-sm text-white/85">{t("home.ctaBanner.subtitle")}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={anychatUrl("/register")}
                className="inline-flex h-11 items-center justify-center rounded-full bg-white/20 px-6 text-sm font-semibold text-white hover:bg-white/25"
              >
                {t("cta.startFree")}
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[color:var(--color-q-blue)] hover:bg-white/90"
              >
                {t("cta.contactUs")}
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/85">{t("home.ctaBanner.note")}</p>
        </div>
        </Container>
      </section>
    </div>
  );
}

