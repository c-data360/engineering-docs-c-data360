import { EnContent } from "@/views/commits/en-content";
import { FrContent } from "@/views/commits/fr-content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Commits | Engineering Docs" };

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "fr" ? <FrContent /> : <EnContent />;
}
