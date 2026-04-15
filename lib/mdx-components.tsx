import type { MDXComponents } from "mdx/types";
import type React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// macOS-style terminal code block
function Pre({
  children,
  "data-language": language,
  ...props
}: React.ComponentProps<"pre"> & {
  "data-language"?: string;
  "data-theme"?: string;
}) {
  // Never apply shiki's background - the terminal wrapper controls the background
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style: _ignoredStyle, ...restProps } = props as React.ComponentProps<"pre"> & { style?: unknown };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-border">
      {/* macOS terminal header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted border-b border-border">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        {language && language !== "text" && (
          <span className="text-[0.7rem] font-mono font-medium text-muted-foreground/70 uppercase tracking-widest select-none">
            {language}
          </span>
        )}
      </div>
      <pre
        className="overflow-x-auto px-5 py-5 text-sm leading-6 font-mono m-0 bg-background"
        {...restProps}
      >
        {children}
      </pre>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  // Strip the <figure> wrapper that rehype-pretty-code injects around every code block.
  // Without this, it renders as a styled box around our terminal - creating the inner rectangle.
  figure: ({ children, ...props }) => {
    const isCodeFigure = "data-rehype-pretty-code-figure" in props;
    if (isCodeFigure) return <>{children}</>;
    return <figure {...props}>{children}</figure>;
  },
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold tracking-tight mt-0 mb-6 text-foreground text-balance" style={{ fontFamily: "var(--font-poppins), var(--font-inter), sans-serif" }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold mt-10 mb-4 pb-2 text-foreground text-balance" style={{ borderBottom: "2px solid oklch(0.549 0.244 262.9)" }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold mt-8 mb-3 text-foreground text-balance">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-sm font-semibold mt-6 mb-2 text-foreground uppercase tracking-wide text-balance">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="leading-7 mb-4 text-muted-foreground text-pretty">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-muted-foreground">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-6 space-y-1 text-muted-foreground" style={{ listStyleType: "disc" }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 space-y-1 text-muted-foreground" style={{ listStyleType: "decimal" }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-7 text-pretty">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 pl-4 py-1 italic text-muted-foreground text-pretty" style={{ borderLeft: "3px solid oklch(0.549 0.244 262.9)", background: "oklch(0.94 0.025 262.9 / 30%)", borderRadius: "0 0.5rem 0.5rem 0", padding: "0.75rem 1rem" }}>
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: ({ children }) => (
    <div className="my-6">
      <Table>{children}</Table>
    </div>
  ),
  thead: ({ children }) => <TableHeader>{children}</TableHeader>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => <TableHead>{children}</TableHead>,
  td: ({ children }) => <TableCell>{children}</TableCell>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
    >
      {children}
    </a>
  ),
  pre: Pre,
};
