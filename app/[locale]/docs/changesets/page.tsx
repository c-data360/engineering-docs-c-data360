import { EnContent } from "@/views/changesets/en-content";
import { FrContent } from "@/views/changesets/fr-content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Changesets | Engineering Docs" };

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "fr" ? <FrContent /> : <EnContent />;
}
