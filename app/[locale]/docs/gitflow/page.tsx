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
  Blockquote,
  DocTable,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/doc-prose";

function FrContent() {
  return (
    <>
      <H1>🌿 GitFlow</H1>

      <H2>Vue d&apos;ensemble</H2>
      <CodeBlock>{`main          ← Production. Stable. Sacrée. On n'y touche jamais directement.
│
├── hotfix/   ← Correction urgente en production. Créée depuis main.
│
develop       ← Branche d'intégration. Toujours à jour. Base de tout développement.
│
├── feature/  ← Nouvelle fonctionnalité. Créée depuis develop.
│
└── release/  ← Préparation d'une version. Créée depuis develop.`}</CodeBlock>

      <Hr />

      <H2>📌 Règles absolues</H2>
      <Blockquote>
        <p className="mb-1">
          ❌{" "}
          <strong>
            On ne push JAMAIS directement sur <code>main</code> ou{" "}
            <code>develop</code>
          </strong>
        </p>
        <p className="mb-0">
          ✅ <strong>Tout passe par une Pull Request reviewée</strong>
        </p>
      </Blockquote>

      <Hr />

      <H2>🔄 Cycle de vie d&apos;une fonctionnalité</H2>

      <H3>
        1. Créer sa branche depuis <InlineCode>develop</InlineCode>
      </H3>
      <CodeBlock lang="bash">{`git checkout develop
git pull origin develop
git checkout -b feature/nom-fonctionnalite`}</CodeBlock>

      <H3>2. Développer et committer</H3>
      <CodeBlock lang="bash">{`git add .
git commit -m "feat: description courte de ce que tu as fait"
git push origin feature/nom-fonctionnalite`}</CodeBlock>

      <H3>3. Ouvrir une Pull Request</H3>
      <Ul>
        <Li>
          Base : <InlineCode>develop</InlineCode>
        </Li>
        <Li>
          Compare : <InlineCode>feature/nom-fonctionnalite</InlineCode>
        </Li>
        <Li>Remplir le template de PR</Li>
        <Li>Assigner un reviewer</Li>
      </Ul>

      <H3>
        4. Après validation → merge dans <InlineCode>develop</InlineCode> puis
        supprimer la branche
      </H3>

      <Hr />

      <H2>🚨 Cycle de vie d&apos;un Hotfix</H2>
      <CodeBlock lang="bash">{`# Depuis main uniquement
git checkout main
git pull origin main
git checkout -b hotfix/description-courte

# ... corriger le bug ...

git commit -m "fix: description du correctif"
git push origin hotfix/description-courte

# Ouvrir une PR vers main ET une PR vers develop`}</CodeBlock>
      <Blockquote>
        <p className="mb-0">
          ⚠️ Un hotfix doit toujours être mergé dans{" "}
          <strong>main ET develop</strong> pour ne pas perdre la correction.
        </p>
      </Blockquote>

      <Hr />

      <H2>🚀 Cycle de vie d&apos;une Release</H2>
      <CodeBlock lang="bash">{`# Depuis develop
git checkout develop
git pull origin develop
git checkout -b release/v1.2.0

# Derniers ajustements, bump de version...
git commit -m "chore: bump version to 1.2.0"
git push origin release/v1.2.0

# PR vers main, puis PR vers develop`}</CodeBlock>

      <Hr />

      <H2>📛 Nommage des branches</H2>
      <DocTable>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Format</TableHead>
            <TableHead>Exemple</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Fonctionnalité</TableCell>
            <TableCell>
              <InlineCode>feature/nom-fonctionnalite</InlineCode>
            </TableCell>
            <TableCell>
              <InlineCode>feature/authentification-oauth</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Correction urgente</TableCell>
            <TableCell>
              <InlineCode>hotfix/description-courte</InlineCode>
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

      <H3>Règles de nommage</H3>
      <Ul>
        <Li>
          ✅ <Strong>En anglais</Strong> — comme les commits et le code
        </Li>
        <Li>✅ Minuscules uniquement</Li>
        <Li>
          ✅ Tirets <InlineCode>-</InlineCode> pour séparer les mots (pas
          d&apos;underscore, pas d&apos;espace)
        </Li>
        <Li>✅ Nom court mais descriptif</Li>
        <Li>❌ Pas de caractères spéciaux</Li>
        <Li>
          ❌ Pas de <InlineCode>/</InlineCode> supplémentaires dans le nom
        </Li>
      </Ul>
    </>
  );
}

function EnContent() {
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
        4. After approval → merge into <InlineCode>develop</InlineCode> then
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
          ✅ <Strong>In English</Strong> — like commits and code
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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "fr" ? <FrContent /> : <EnContent />;
}
