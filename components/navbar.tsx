import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { GitHub } from "@/components/icons/github";
import { LangSwitcher } from "@/components/lang-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href={`/${locale}`} className="flex items-center">
            <img
              src="/logo-black.webp"
              alt="Logo"
              className="dark:hidden"
              style={{ height: "44px", width: "auto" }}
            />
            <img
              src="/logo-white.webp"
              alt="Logo"
              className="hidden dark:block"
              style={{ height: "44px", width: "auto" }}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
            <Link href={`/${locale}/docs/onboarding`} className="hover:text-foreground transition-colors">
              {t("docs")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ThemeToggle />
          <Link
            href="https://github.com/c-data360"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center size-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="GitHub"
          >
            <GitHub className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

