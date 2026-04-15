import Link from "next/link";
import { BookOpen } from "lucide-react";
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
          <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold text-foreground">
            <BookOpen className="size-5 text-primary" />
            <span className="hidden sm:inline text-sm">Engineering Docs</span>
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
            href="https://github.com/segalg"
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

