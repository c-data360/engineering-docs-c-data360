import Link from "next/link";
import { CodeBlock as AceCodeBlock } from "@/components/ui/code-block";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Children = { children: React.ReactNode };

export function H1({ children }: Children) {
  return (
    <h1
      className="text-3xl font-bold tracking-tight mt-0 mb-6 text-foreground text-balance"
      style={{ fontFamily: "var(--font-poppins), var(--font-inter), sans-serif" }}
    >
      {children}
    </h1>
  );
}

export function H2({ children }: Children) {
  return (
    <h2
      className="text-xl font-semibold mt-10 mb-4 pb-2 text-foreground text-balance"
      style={{ borderBottom: "1px solid oklch(0.549 0.244 262.9)" }}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: Children) {
  return (
    <h3 className="text-base font-semibold mt-8 mb-3 text-foreground text-balance">
      {children}
    </h3>
  );
}

export function P({ children }: Children) {
  return (
    <p className="leading-7 mb-4 text-muted-foreground text-pretty">{children}</p>
  );
}

export function Ul({ children }: Children) {
  return (
    <ul
      className="my-4 ml-6 space-y-1 text-muted-foreground"
      style={{ listStyleType: "disc" }}
    >
      {children}
    </ul>
  );
}

export function Ol({ children }: Children) {
  return (
    <ol
      className="my-4 ml-6 space-y-1 text-muted-foreground"
      style={{ listStyleType: "decimal" }}
    >
      {children}
    </ol>
  );
}

export function Li({ children }: Children) {
  return <li className="leading-7 text-pretty">{children}</li>;
}

export function CheckList({ children }: Children) {
  return <ul className="my-4 space-y-2 text-muted-foreground">{children}</ul>;
}

export function CheckItem({ children }: Children) {
  return (
    <li className="leading-7 text-pretty flex items-start gap-2.5 list-none">
      <span className="mt-1.5 size-4 rounded border border-border shrink-0 inline-block" />
      <span>{children}</span>
    </li>
  );
}

export function Blockquote({ children }: Children) {
  return (
    <blockquote
      className="my-6 text-muted-foreground text-pretty"
      style={{
        borderLeft: "3px solid oklch(0.549 0.244 262.9)",
        background: "oklch(0.94 0.025 262.9 / 30%)",
        borderRadius: "0 0.5rem 0.5rem 0",
        padding: "0.75rem 1rem",
      }}
    >
      {children}
    </blockquote>
  );
}

export function Hr() {
  return <hr className="my-8 border-border" />;
}

export function Strong({ children }: Children) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

export function A({ href, children }: { href: string } & Children) {
  const cls =
    "text-primary underline underline-offset-4 hover:text-primary/80 transition-colors";
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function InlineCode({ children }: Children) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground">
      {children}
    </code>
  );
}

export function CodeBlock({ lang, children }: { lang?: string; children: string }) {
  return (
    <div className="my-6">
      <AceCodeBlock
        language={lang ?? "text"}
        filename={lang ?? ""}
        code={children}
      />
    </div>
  );
}

export function DocTable({ children }: Children) {
  return (
    <div className="my-6 overflow-x-auto">
      <Table>{children}</Table>
    </div>
  );
}

export { TableBody, TableCell, TableHead, TableHeader, TableRow };
