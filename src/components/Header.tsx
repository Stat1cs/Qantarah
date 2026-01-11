"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {FiLogIn} from "react-icons/fi";
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
            <Image
              src="/Qantarah/QantarahLogo.png"
              alt={tSite("name")}
              width={60}
              height={60}
              priority
              className="size-12 rounded-xl"
            />
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black hover:bg-black/3 sm:w-auto sm:px-3"
            >
              <FiLogIn className="text-[16px] sm:hidden" aria-hidden="true" />
              <span className="hidden text-sm font-semibold sm:inline">{tCta("signIn")}</span>
              <span className="sr-only sm:hidden">{tCta("signIn")}</span>
            </a>
            <a
              href={anychatUrl("/register")}
              className="inline-flex h-9 items-center rounded-full bg-(--color-q-blue) px-4 text-sm font-semibold text-white hover:opacity-95"
            >
              {tCta("getStarted")}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

