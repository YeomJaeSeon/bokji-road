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
      url: `${SITE_URL}/calculator`,
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/favorites`,
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/compare/youth-savings`,
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/compare/pension-types`,
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/compare/basic-living`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/guides`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/news/2026-welfare-changes`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/news/how-to-use-bokjiro`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/guides/youth-guide`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/guides/all-benefits-2026`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guides/elderly-benefits`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guides/baby-money`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guides/low-income-benefits`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guides/unemployment-guide`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/guides/basic-pension-guide`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/guides/parental-allowance-guide`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/guides/eitc-guide`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/guides/basic-living-guide`,
      lastModified: new Date("2026-05-28"),
      changeFrequency: "monthly",
      priority: 0.85,
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
