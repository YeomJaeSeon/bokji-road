import { MetadataRoute } from "next";
import benefitsData from "@/data/benefits.json";
import type { Benefit } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bokjiroad.com";
const allBenefits = benefitsData as Benefit[];

const CATEGORIES = ["임신출산", "영아", "유아", "아동", "청소년", "청년", "장년", "중년", "노년"];

export default function sitemap(): MetadataRoute.Sitemap {
  const benefitPages = allBenefits.map((benefit) => ({
    url: `${SITE_URL}/benefits/${benefit.id}`,
    lastModified: new Date("2026-05-01"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/benefits/category/${encodeURIComponent(cat)}`,
    lastModified: new Date("2026-05-21"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-05-21"),
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
    ...categoryPages,
    ...benefitPages,
  ];
}
