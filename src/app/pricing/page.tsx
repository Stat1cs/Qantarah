import {Container} from "@/components/Container";
import {getTranslations} from "next-intl/server";
import {anychatUrl} from "@/lib/anychat";
import {PricingGrid} from "@/components/PricingGrid";

export default async function PricingPage() {
  const t = await getTranslations("pricingPage");

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-semibold text-(--color-q-blue) sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-black/70">{t("subtitle")}</p>

        <div className="mt-10">
          <PricingGrid showHeading={false} />
        </div>

        <div className="mt-8 text-sm leading-7 text-black/70">
          <a className="font-semibold text-(--color-q-blue) hover:underline" href={anychatUrl("/pricing")}>
            {t("viewPricing")}
          </a>
        </div>
      </Container>
    </div>
  );
}

