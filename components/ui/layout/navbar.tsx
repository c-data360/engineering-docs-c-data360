import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { GitHub } from "@/components/icons/github";
import { LangSwitcher } from "@/components/lang-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link href={`/${locale}`} className="flex items-center font-semibold text-foreground">
            <Image
              src="/logo-black.webp"
              alt="Logo"
              width={88}
              height={40}
              className="dark:brightness-0 dark:invert"
              priority
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
            href={githubUrl}
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

