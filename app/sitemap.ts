import { MetadataRoute } from "next";
import benefitsData from "@/data/benefits.json";
import type { Benefit } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bokjiroad.com";
const allBenefits = benefitsData as Benefit[];

export default function sitemap(): MetadataRoute.Sitemap {
  const benefitPages = allBenefits.map((benefit) => ({
    url: `${SITE_URL}/benefits/${benefit.id}`,
    lastModified: new Date("2026-05-01"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-05-16"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...benefitPages,
  ];
}
