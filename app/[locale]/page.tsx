import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Badge } from "@/components/ui/shadcn/badge";
import { GitHub } from "@/components/icons/github";
import { BookOpen } from "lucide-react";

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com";

export default function HomePage() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const cards = [
    { title: "GitFlow", description: locale === "fr" ? "Stratégie de branches feature, release, hotfix" : "Feature, release, hotfix branch strategy", href: `/${locale}/docs/gitflow` },
    { title: locale === "fr" ? "Conventions de commits" : "Commit conventions", description: locale === "fr" ? "Standard Conventional Commits en anglais" : "Conventional Commits standard in English", href: `/${locale}/docs/commits` },
    { title: "Pull Requests", description: locale === "fr" ? "Règles de review et workflow de merge" : "Code review rules and merge workflow", href: `/${locale}/docs/pr` },
    { title: "Changesets", description: locale === "fr" ? "Versioning sémantique et génération de changelogs" : "Semantic versioning and changelog generation", href: `/${locale}/docs/changesets` },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center space-y-6 mb-20">
        <Badge variant="secondary" className="text-xs border border-primary/30 bg-primary/10 text-primary dark:bg-primary/20 dark:border-primary/40 dark:text-primary hover:bg-primary/15 dark:hover:bg-primary/30">
          {t("badge")}
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
          {t("title")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
          {t("subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={`/${locale}/docs/onboarding`}
            className="inline-flex items-center gap-2 justify-center rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
          >
            <BookOpen className="size-4" />
            {t("cta")}
          </Link>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 justify-center rounded-lg border border-border bg-background text-foreground px-5 py-2.5 text-sm font-medium hover:bg-accent hover:border-primary/30 dark:border-border dark:hover:border-primary/50 transition-colors"
          >
            <GitHub className="size-4" />
            {t("github")}
          </a>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-border p-5 hover:border-primary dark:hover:border-white/60 transition-all duration-200 hover:shadow-sm hover:shadow-primary/10 bg-card"
          >
            <h3 className="font-semibold mb-1 text-foreground group-hover:text-primary dark:group-hover:text-white transition-colors text-balance">
              {card.title}
            </h3>
            <p className="text-sm text-muted-foreground text-pretty">{card.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
