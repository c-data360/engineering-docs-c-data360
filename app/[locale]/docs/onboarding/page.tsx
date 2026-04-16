import { EnContent } from "@/views/onboarding/en-content";
import { FrContent } from "@/views/onboarding/fr-content";

export const metadata = { title: "Onboarding | Engineering Docs" };

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "fr" ? (
    <FrContent locale={locale} />
  ) : (
    <EnContent locale={locale} />
  );
}
