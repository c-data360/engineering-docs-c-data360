import { BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-border py-5 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <BookOpen className="size-4 text-muted-foreground/70" />
          <span className="hidden sm:inline">{t("rights")}</span>
        </div>
        <p className="text-pretty transition-colors">
          {t("contact")}{" "}
          <a
            href="mailto:segal.gbenou26@gmail.com"
            className="text-primary underline underline-offset-4"
          >
            segal.gbenou26@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
