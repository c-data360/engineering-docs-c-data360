import {
  H1,
  H2,
  H3,
  P,
  Ul,
  Li,
  Hr,
  Strong,
  InlineCode,
  CodeBlock,
  DocTable,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/doc-prose";

export function EnContent() {
  return (
    <>
      <H1>📝 Commit Conventions</H1>
      <P>
        We follow the{" "}
        <Strong>
          <a
            href="https://www.conventionalcommits.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Conventional Commits
          </a>
        </Strong>{" "}
        standard.
      </P>

      <H2>Format</H2>
      <CodeBlock>{`type(scope): short description

[optional body]

[optional footer]`}</CodeBlock>

      <Hr />

      <H2>Commit types</H2>
      <DocTable>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>When to use</TableHead>
            <TableHead>Example</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <InlineCode>feat</InlineCode>
            </TableCell>
            <TableCell>New feature</TableCell>
            <TableCell>
              <InlineCode>feat: add Google authentication</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>fix</InlineCode>
            </TableCell>
            <TableCell>Bug fix</TableCell>
            <TableCell>
              <InlineCode>fix: resolve login crash</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>hotfix</InlineCode>
            </TableCell>
            <TableCell>Urgent production fix</TableCell>
            <TableCell>
              <InlineCode>hotfix: patch JWT token security flaw</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>refactor</InlineCode>
            </TableCell>
            <TableCell>Refactoring without functional change</TableCell>
            <TableCell>
              <InlineCode>refactor: simplify auth service</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>style</InlineCode>
            </TableCell>
            <TableCell>Formatting, whitespace, commas (no logic)</TableCell>
            <TableCell>
              <InlineCode>style: format Header component</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>docs</InlineCode>
            </TableCell>
            <TableCell>Documentation only</TableCell>
            <TableCell>
              <InlineCode>docs: update README</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>test</InlineCode>
            </TableCell>
            <TableCell>Add or modify tests</TableCell>
            <TableCell>
              <InlineCode>test: add unit tests for user service</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>chore</InlineCode>
            </TableCell>
            <TableCell>Maintenance, dependencies, config</TableCell>
            <TableCell>
              <InlineCode>chore: update npm dependencies</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>perf</InlineCode>
            </TableCell>
            <TableCell>Performance improvement</TableCell>
            <TableCell>
              <InlineCode>perf: optimize SQL query in dashboard</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>ci</InlineCode>
            </TableCell>
            <TableCell>CI/CD pipeline changes</TableCell>
            <TableCell>
              <InlineCode>ci: add lint job</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>revert</InlineCode>
            </TableCell>
            <TableCell>Revert a previous commit</TableCell>
            <TableCell>
              <InlineCode>revert: revert feat Google login</InlineCode>
            </TableCell>
          </TableRow>
        </TableBody>
      </DocTable>

      <Hr />

      <H2>The scope (optional but recommended)</H2>
      <P>
        The scope specifies <Strong>which part</Strong> of the codebase is
        affected.
      </P>
      <CodeBlock lang="bash">{`feat(auth): add Google login
fix(dashboard): fix empty chart display
refactor(api): restructure user routes`}</CodeBlock>

      <Hr />

      <H2>Rules</H2>
      <Ul>
        <Li>
          ✅ Description in <Strong>lowercase</Strong>
        </Li>
        <Li>
          ✅ Description in <Strong>English</Strong> - commits, like code, are
          in English
        </Li>
        <Li>
          ✅ <Strong>Short</Strong> description (less than 72 characters)
        </Li>
        <Li>
          ✅ Present tense: <InlineCode>add...</InlineCode> not{" "}
          <InlineCode>added...</InlineCode>
        </Li>
        <Li>❌ No period at the end</Li>
        <Li>
          ❌ No catch-all commits:{" "}
          <Strong>one commit = one specific thing</Strong>
        </Li>
      </Ul>

      <Hr />

      <H3>❌ What we DON&apos;T do</H3>
      <CodeBlock lang="bash">{`# Too vague
git commit -m "fix"
git commit -m "update"
git commit -m "wip"
git commit -m "aaaaa"

# Catch-all
git commit -m "feat: login + fix dashboard + refacto api + style header"`}</CodeBlock>

      <H3>✅ What we DO</H3>
      <CodeBlock lang="bash">{`git commit -m "feat(auth): add login form"
git commit -m "fix(auth): handle empty email validation"
git commit -m "style(auth): align submit button"`}</CodeBlock>
    </>
  );
}
