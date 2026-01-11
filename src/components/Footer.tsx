import {Container} from "@/components/Container";
import {getTranslations} from "next-intl/server";
import {getLocale} from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import {FiMail, FiMessageCircle} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa6";
import {FaXTwitter} from "react-icons/fa6";

export async function Footer() {
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const tSite = await getTranslations("site");

  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sales@qantarah.chat";
  const instagramUrl = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL ?? "#";
  const xUrl = process.env.NEXT_PUBLIC_SOCIAL_X_URL ?? "#";

  return (
    <footer>
      <Container>
        <div className="py-10">
          <div className="border-t border-black/10 pt-10">
            <div className="grid grid-cols-3 items-start gap-4 sm:gap-8">
              {/* Links */}
              <div>
                <div className="text-sm font-semibold text-black">{tFooter("linksTitle")}</div>
                <div className="mt-4 flex flex-col gap-3 text-xs sm:text-sm">
                  <Link className="text-(--color-q-blue) hover:opacity-80" href="/#features">
                    {tNav("features")}
                  </Link>
                  <Link className="text-(--color-q-blue) hover:opacity-80" href="/#messengers">
                    {tNav("apps")}
                  </Link>
                  <Link className="text-(--color-q-blue) hover:opacity-80" href="/#pricing">
                    {tNav("pricing")}
                  </Link>
                  <Link className="text-(--color-q-blue) hover:opacity-80" href="/#faq">
                    {tNav("faq")}
                  </Link>
                  <Link className="text-(--color-q-blue) hover:opacity-80" href="/#contact">
                    {tNav("contact")}
                  </Link>
                </div>
              </div>

              {/* Center logo */}
              <div className="flex justify-center">
                <Image
                  src="/Qantarah/QantarahText.png"
                  alt={`${tSite("name")} — ${tSite("nameAr")}`}
                  width={1400}
                  height={460}
                  quality={70}
                  priority
                  sizes="(min-width: 1024px) 520px, (min-width: 768px) 460px, 320px"
                  className="h-28 w-auto sm:h-32 md:h-36"
                />
              </div>

              {/* Socials */}
              <div className={isRtl ? "text-left" : "text-right"}>
                <div className="text-sm font-semibold text-black">{tFooter("connectTitle")}</div>
                <div
                  className={[
                    "mt-4 inline-grid grid-cols-2 gap-x-4 gap-y-3 text-(--color-q-blue)",
                    isRtl ? "justify-items-start" : "justify-items-end"
                  ].join(" ")}
                >
                  <a className="hover:opacity-80" href={instagramUrl} aria-label="Instagram">
                    <FaInstagram className="size-5" aria-hidden="true" />
                  </a>
                  <a className="hover:opacity-80" href={xUrl} aria-label="X">
                    <FaXTwitter className="size-5" aria-hidden="true" />
                  </a>
                  <a className="hover:opacity-80" href="#contact" aria-label={tNav("contact")}>
                    <FiMessageCircle className="size-5" aria-hidden="true" />
                  </a>
                  <a className="hover:opacity-80" href={`mailto:${email}`} aria-label="Email">
                    <FiMail className="size-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center text-xs text-black/50">
              © 2026 Qantarah (Product of DBS.om). All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

