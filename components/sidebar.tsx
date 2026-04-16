"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  const t = useTranslations("sidebar");
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    {
      label: t("gettingStarted"),
      items: [{ label: t("onboarding"), href: `/${locale}/docs/onboarding` }],
    },
    {
      label: t("engineering"),
      items: [
        { label: t("gitflow"), href: `/${locale}/docs/gitflow` },
        { label: t("commits"), href: `/${locale}/docs/commits` },
        { label: t("pr"), href: `/${locale}/docs/pr` },
        { label: t("changesets"), href: `/${locale}/docs/changesets` },
      ],
    },
  ];

  return (
    <aside className="w-56 shrink-0 hidden md:block border-r border-border">
      <div className="sticky top-4 pt-2 pb-10 space-y-4">
        {navItems.map((group) => (
          <div key={group.label}>
            <div className="pr-6">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        pathname === item.href
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {navItems.indexOf(group) < navItems.length - 1 && <Separator className="mt-4 -mr-6" />}
          </div>
        ))}
      </div>
    </aside>
  );
}
