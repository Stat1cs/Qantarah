import type {MetadataRoute} from "next";

function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().replace(/\/$/, "");
  const now = new Date();

  const paths = ["", "/features", "/pricing", "/faq", "/contact", "/legal/privacy", "/legal/terms"];

  return paths.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: now
  }));
}

