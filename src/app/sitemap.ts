import type {MetadataRoute} from "next";

function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://www.qantarah.chat";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl().replace(/\/$/, "");
  const now = new Date();

  const paths = [""];

  return paths.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: now
  }));
}

