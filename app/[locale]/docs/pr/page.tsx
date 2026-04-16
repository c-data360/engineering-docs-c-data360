import { EnContent } from "@/views/pr/en-content";
import { FrContent } from "@/views/pr/fr-content";

export const metadata = { title: "Pull Requests | Engineering Docs" };

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "fr" ? <FrContent /> : <EnContent />;
}
