import { BookOpen } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL ?? "";
const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "#";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-border py-5 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          {logoUrl ? (
            <Image src={logoUrl} alt="Logo" width={16} height={16} className="size-4 text-muted-foreground/70" />
          ) : (
            <BookOpen className="size-4 text-muted-foreground/70" />
          )}
          <span className="hidden sm:inline">{t("rights")}</span>
        </div>
        <p className="text-pretty transition-colors">
          {t("developedBy")}{" "}
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Segal G.
          </a>
        </p>
      </div>
    </footer>
  );
}
