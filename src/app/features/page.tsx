import {getTranslations} from "next-intl/server";
import {Container} from "@/components/Container";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import {
  FiBell,
  FiClock,
  FiFileText,
  FiGlobe,
  FiLayout,
  FiMessageCircle,
  FiSettings,
  FiShare2,
  FiSmartphone,
  FiUsers,
  FiZap
} from "react-icons/fi";
import {RiPlug2Line} from "react-icons/ri";

export default async function FeaturesPage() {
  const t = await getTranslations("featuresPage");

  const list = [
    {title: t("messengersTitle"), body: t("messengersBody"), Icon: FiMessageCircle},
    {title: t("socialTitle"), body: t("socialBody"), Icon: FiShare2},
    {title: t("layoutsTitle"), body: t("layoutsBody"), Icon: FiLayout},
    {title: t("promptTitle"), body: t("promptBody"), Icon: FiZap},
    {title: t("scheduleTitle"), body: t("scheduleBody"), Icon: FiClock},
    {title: t("devicesTitle"), body: t("devicesBody"), Icon: FiSmartphone},
    {title: t("liveChatSystemTitle"), body: "", Icon: FiMessageCircle},
    {title: t("agentsTitle"), body: t("agentsBody"), Icon: FiUsers},
    {title: t("telegramGatewayTitle"), body: t("telegramGatewayBody"), Icon: FiShare2},
    {title: t("formsTitle"), body: `${t("formsNote1")} ${t("formsNote2")}`, Icon: FiFileText},
    {title: t("formsNotifyTitle"), body: "", Icon: FiBell},
    {title: t("anySiteTitle"), body: t("anySiteBody"), Icon: FiGlobe},
    {title: t("integrationsTitle"), body: t("integrationsBody"), Icon: RiPlug2Line},
    {title: "Customization", body: "Customize colors, icons, position, and animations to match your brand.", Icon: FiSettings}
  ] as const;

  return (
    <div className="bg-[#f7f6f2] text-[#0b1020]">
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[color:var(--color-q-blue)]/10 blur-3xl" />
          <div className="absolute -bottom-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[color:var(--color-q-gold)]/10 blur-3xl" />
        </div>

        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold text-[color:var(--color-q-blue)] sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-3 text-sm leading-7 text-black/60">
              Everything you need to manage customer communications in one place.
            </p>
          </div>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((it, idx) => (
              <SpotlightCard
                key={idx}
                className="h-full min-h-[220px] bg-white"
                spotlightColor="rgba(26, 58, 95, 0.10)"
              >
                <div className="flex h-full flex-col">
                  <div className="grid size-10 place-items-center rounded-xl bg-[color:var(--color-q-blue)]/10 text-[color:var(--color-q-blue)]">
                    <it.Icon className="size-[18px]" aria-hidden="true" focusable="false" />
                  </div>
                  <div className="mt-5 text-lg font-semibold text-black">{it.title}</div>
                  {it.body ? <div className="mt-3 flex-1 text-sm leading-7 text-black/60">{it.body}</div> : null}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

