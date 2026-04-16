import {
  H1,
  H2,
  H3,
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
  Blockquote,
} from "@/components/doc-prose";

export function EnContent() {
  return (
    <>
      <H1>🌿 GitFlow</H1>

      <H2>Overview</H2>
      <CodeBlock>{`main          ← Production. Stable. Sacred. Never push directly.
│
├── hotfix/   ← Urgent production fix. Created from main.
│
develop       ← Integration branch. Always up to date. Base for all development.
│
├── feature/  ← New feature. Created from develop.
│
└── release/  ← Version preparation. Created from develop.`}</CodeBlock>

      <Hr />

      <H2>📌 Absolute rules</H2>
      <Blockquote>
        <p className="mb-1">
          ❌{" "}
          <strong>
            Never push directly to <code>main</code> or <code>develop</code>
          </strong>
        </p>
        <p className="mb-0">
          ✅ <strong>Everything goes through a reviewed Pull Request</strong>
        </p>
      </Blockquote>

      <Hr />

      <H2>🔄 Feature lifecycle</H2>

      <H3>
        1. Create your branch from <InlineCode>develop</InlineCode>
      </H3>
      <CodeBlock lang="bash">{`git checkout develop
git pull origin develop
git checkout -b feature/feature-name`}</CodeBlock>

      <H3>2. Develop and commit</H3>
      <CodeBlock lang="bash">{`git add .
git commit -m "feat: short description of what you did"
git push origin feature/feature-name`}</CodeBlock>

      <H3>3. Open a Pull Request</H3>
      <Ul>
        <Li>
          Base: <InlineCode>develop</InlineCode>
        </Li>
        <Li>
          Compare: <InlineCode>feature/feature-name</InlineCode>
        </Li>
        <Li>Fill in the PR template</Li>
        <Li>Assign a reviewer</Li>
      </Ul>

      <H3>
        4. After approval -&gt; merge into <InlineCode>develop</InlineCode> then
        delete the branch
      </H3>

      <Hr />

      <H2>🚨 Hotfix lifecycle</H2>
      <CodeBlock lang="bash">{`# From main only
git checkout main
git pull origin main
git checkout -b hotfix/short-description

# ... fix the bug ...

git commit -m "fix: description of the fix"
git push origin hotfix/short-description

# Open a PR to main AND a PR to develop`}</CodeBlock>
      <Blockquote>
        <p className="mb-0">
          ⚠️ A hotfix must always be merged into{" "}
          <strong>main AND develop</strong> to preserve the fix.
        </p>
      </Blockquote>

      <Hr />

      <H2>🚀 Release lifecycle</H2>
      <CodeBlock lang="bash">{`# From develop
git checkout develop
git pull origin develop
git checkout -b release/v1.2.0

# Final adjustments, version bump...
git commit -m "chore: bump version to 1.2.0"
git push origin release/v1.2.0

# PR to main, then PR to develop`}</CodeBlock>

      <Hr />

      <H2>📛 Branch naming</H2>
      <DocTable>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Format</TableHead>
            <TableHead>Example</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Feature</TableCell>
            <TableCell>
              <InlineCode>feature/feature-name</InlineCode>
            </TableCell>
            <TableCell>
              <InlineCode>feature/oauth-authentication</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Urgent fix</TableCell>
            <TableCell>
              <InlineCode>hotfix/short-description</InlineCode>
            </TableCell>
            <TableCell>
              <InlineCode>hotfix/fix-login-crash</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Release</TableCell>
            <TableCell>
              <InlineCode>release/vX.Y.Z</InlineCode>
            </TableCell>
            <TableCell>
              <InlineCode>release/v1.2.0</InlineCode>
            </TableCell>
          </TableRow>
        </TableBody>
      </DocTable>

      <H3>Naming rules</H3>
      <Ul>
        <Li>
          ✅ <Strong>In English</Strong> - like commits and code
        </Li>
        <Li>✅ Lowercase only</Li>
        <Li>
          ✅ Hyphens <InlineCode>-</InlineCode> to separate words (no
          underscores, no spaces)
        </Li>
        <Li>✅ Short but descriptive name</Li>
        <Li>❌ No special characters</Li>
        <Li>
          ❌ No additional <InlineCode>/</InlineCode> in the name
        </Li>
      </Ul>
    </>
  );
}
