import { getDocContent } from "@/lib/get-doc";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = await getDocContent(locale, "pr");
  return <>{content}</>;
}
