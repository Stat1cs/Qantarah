import {Container} from "@/components/Container";
import {getTranslations} from "next-intl/server";

export default async function TermsPage() {
  const t = await getTranslations("legal");

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
              {t("terms")}
            </h1>
          </div>

          <div className="relative mx-auto mt-10 max-w-3xl rounded-2xl border border-black/10 bg-white p-6">
            <div className="prose prose-slate max-w-none prose-p:leading-7">
              <p>{t("termsPlaceholder")}</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

