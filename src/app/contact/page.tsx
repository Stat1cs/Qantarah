import {Container} from "@/components/Container";
import {getTranslations} from "next-intl/server";
import Link from "next/link";
import {FiMail} from "react-icons/fi";

function getContactEmail(): string {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@example.com";
}

export default async function ContactPage() {
  const t = await getTranslations("contactPage");
  const email = getContactEmail();

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
            <p className="mt-3 text-sm leading-7 text-black/60">{t("subtitle")}</p>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-[color:var(--color-q-blue)]/10 text-[color:var(--color-q-blue)]">
                  <FiMail className="size-[18px]" aria-hidden="true" focusable="false" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">{t("emailLabel")}</div>
                  <div className="text-xs text-black/50">We reply as soon as possible.</div>
                </div>
              </div>

              <a
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#0b1020] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="text-sm font-semibold text-black">Quick links</div>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <Link className="font-semibold text-[color:var(--color-q-blue)] hover:opacity-80" href="/#pricing">
                  View pricing
                </Link>
                <Link className="font-semibold text-[color:var(--color-q-blue)] hover:opacity-80" href="/faq">
                  Read FAQ
                </Link>
                <Link className="font-semibold text-[color:var(--color-q-blue)] hover:opacity-80" href="/features">
                  Explore features
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

