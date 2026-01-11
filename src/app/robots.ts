import type {MetadataRoute} from "next";

function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.qantarah.chat";
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${getSiteUrl().replace(/\/$/, "")}/sitemap.xml`
  };
}

