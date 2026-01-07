import {Container} from "@/components/Container";
import {getTranslations} from "next-intl/server";
import {anychatUrl} from "@/lib/anychat";

export default async function PricingPage() {
  const t = await getTranslations("pricingPage");

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-[color:var(--color-q-blue)] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-black/70">{t("subtitle")}</p>

        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
          <div className="text-sm leading-7 text-black/70">
            <a className="font-semibold text-[color:var(--color-q-blue)] hover:underline" href={anychatUrl("/pricing")}>
              {t("viewPricing")}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

