import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import type { BundledTheme } from "shiki";
import { mdxComponents } from "./mdx-components";

const SLUG_MAP: Record<string, string> = {
  commits: "conventions-commits",
  pr: "process-pr",
};

const prettyCodeOptions = {
  theme: {
    dark: "github-dark-dimmed" as BundledTheme,
    light: "github-light" as BundledTheme,
  },
  keepBackground: false,
};

export async function getDocContent(locale: string, slug: string) {
  const fileName = SLUG_MAP[slug] ?? slug;
  const filePath = path.join(
    process.cwd(),
    "..",
    ".github",
    "docs",
    locale,
    `${fileName}.md`
  );

  if (!fs.existsSync(filePath)) notFound();

  const source = fs.readFileSync(filePath, "utf-8");
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    },
  });

  return content;
}

