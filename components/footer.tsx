import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-border py-5 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <img
            src="/logo-black.webp"
            alt="Logo"
            className="dark:hidden opacity-70"
            style={{ height: "24px", width: "auto" }}
          />
          <img
            src="/logo-white.webp"
            alt="Logo"
            className="hidden dark:block opacity-60"
            style={{ height: "24px", width: "auto" }}
          />
          <span className="hidden sm:inline">{t("rights")}</span>
        </div>
        <p className="text-pretty transition-colors">
          {t("contact")}{" "}
          <a
            href="mailto:segal.gbenou@c-data360.ai"
            className="text-primary underline underline-offset-4"
          >
            segal.gbenou@c-data360.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
