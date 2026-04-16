import { EnContent } from "@/views/gitflow/en-content";
import { FrContent } from "@/views/gitflow/fr-content";

export const metadata = { title: "GitFlow | Engineering Docs" };

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "fr" ? <FrContent /> : <EnContent />;
}
