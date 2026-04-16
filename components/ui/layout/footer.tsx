import Image from "next/image";
import { useTranslations } from "next-intl";

const authorEmail = process.env.NEXT_PUBLIC_AUTHOR_EMAIL ?? "";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-border py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-[170px] flex-shrink-0">
            <Image
              src="/logo-black.webp"
              alt="Logo"
              fill
              sizes="170px"
              className="object-contain object-left dark:brightness-0 dark:invert"
            />
          </div>
          <span className="hidden sm:inline">{t("rights")}</span>
        </div>
        <p className="text-pretty transition-colors">
          {t("developedBy")}{" "}
          <a
            href={authorEmail ? `mailto:${authorEmail}` : undefined}
            className="text-primary underline underline-offset-4"
          >
            Segal G.
          </a>
        </p>
      </div>
    </footer>
  );
}
