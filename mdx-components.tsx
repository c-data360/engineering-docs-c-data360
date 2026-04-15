import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-3 border-b pb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold mt-6 mb-2">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="leading-7 mb-4 text-muted-foreground">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-1 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-1 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    code: ({ children }) => (
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm leading-6">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground">{children}</blockquote>
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-muted/50">{children}</thead>,
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 border-t">{children}</td>
    ),
    a: ({ href, children }) => (
      <a href={href} className="font-medium underline underline-offset-4 hover:text-foreground text-muted-foreground transition-colors">
        {children}
      </a>
    ),
    ...components,
  };
}
