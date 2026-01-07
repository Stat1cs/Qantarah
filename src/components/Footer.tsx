import Link from "next/link";
import {Container} from "@/components/Container";
import {getTranslations} from "next-intl/server";

export async function Footer() {
  const tNav = await getTranslations("nav");
  const tLegal = await getTranslations("legal");
  const tFooter = await getTranslations("footer");
  const tSite = await getTranslations("site");

  return (
    <footer className="border-t border-black/5 bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-black/70">
            <div className="font-semibold text-[color:var(--color-q-blue)]">
              {tSite("name")} — {tSite("nameAr")}
            </div>
            <div className="mt-1">{tFooter("rights")}</div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link className="text-black/70 hover:text-black" href="/features">
              {tNav("features")}
            </Link>
            <Link className="text-black/70 hover:text-black" href="/pricing">
              {tNav("pricing")}
            </Link>
            <Link className="text-black/70 hover:text-black" href="/faq">
              {tNav("faq")}
            </Link>
            <Link className="text-black/70 hover:text-black" href="/contact">
              {tNav("contact")}
            </Link>
            <Link className="text-black/70 hover:text-black" href="/legal/privacy">
              {tLegal("privacy")}
            </Link>
            <Link className="text-black/70 hover:text-black" href="/legal/terms">
              {tLegal("terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

