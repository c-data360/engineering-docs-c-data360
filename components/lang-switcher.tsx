"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
];

export function LangSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.value === locale) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLang(newLocale: string) {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.assign(newPath);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 h-8 px-3 text-xs font-medium rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-colors select-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {currentLang.label}
        <ChevronDown
          className={cn("size-3 transition-transform duration-150", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1.5 z-50 min-w-32 overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md">
          {languages.map((lang) => (
            <button
              key={lang.value}
              type="button"
              onClick={() => switchLang(lang.value)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                lang.value === locale && "text-primary"
              )}
              role="option"
              aria-selected={lang.value === locale}
            >
              {lang.value === locale && <Check className="size-3" />}
              <span className={cn(lang.value !== locale && "ml-5")}>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

