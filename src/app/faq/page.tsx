import {Container} from "@/components/Container";
import {FAQList} from "@/components/FAQList";
import {getTranslations} from "next-intl/server";
import Link from "next/link";

export default async function FAQPage() {
  const t = await getTranslations("faqPage");

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
              Answers to the most common questions about the widget, live chat, and setup.
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-3xl">
            <FAQList />
          </div>

          <div className="relative mt-8 text-center text-sm text-black/60">
            Still have questions?{" "}
            <Link href="/contact" className="font-semibold text-[color:var(--color-q-blue)] hover:opacity-80">
              Contact us
            </Link>
            .
          </div>
        </Container>
      </section>
    </div>
  );
}

