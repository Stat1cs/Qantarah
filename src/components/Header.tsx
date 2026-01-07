"use client";

import Link from "next/link";
import {useTranslations} from "next-intl";
import {LocaleSwitcher} from "@/components/LocaleSwitcher";
import {anychatUrl} from "@/lib/anychat";
import {Container} from "@/components/Container";

export function Header() {
  const tNav = useTranslations("nav");
  const tCta = useTranslations("cta");
  const tSite = useTranslations("site");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-[color:var(--color-q-blue)] text-white">
              Q
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[color:var(--color-q-blue)]">
                {tSite("name")} — {tSite("nameAr")}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/#features" className="text-sm font-medium text-black/70 hover:text-black">
              {tNav("features")}
            </Link>
            <Link href="/#messengers" className="text-sm font-medium text-black/70 hover:text-black">
              {tNav("apps")}
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-black/70 hover:text-black">
              {tNav("pricing")}
            </Link>
            <Link href="/#faq" className="text-sm font-medium text-black/70 hover:text-black">
              {tNav("faq")}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <a
              href={anychatUrl("/login")}
              className="hidden h-9 items-center rounded-full border border-black/10 px-3 text-sm font-semibold text-black hover:bg-black/[.03] sm:inline-flex"
            >
              {tCta("signIn")}
            </a>
            <a
              href={anychatUrl("/register")}
              className="inline-flex h-9 items-center rounded-full bg-[color:var(--color-q-blue)] px-4 text-sm font-semibold text-white hover:opacity-95"
            >
              {tCta("getStarted")}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

