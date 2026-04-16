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

export function FrContent() {
  return (
    <>
      <H1>🌿 GitFlow</H1>

      <H2>Vue d&apos;ensemble</H2>
      <CodeBlock>{`main          <- Production. Stable. Sacrée. On n'y touche jamais directement.
│
├── hotfix/   <- Correction urgente en production. Créée depuis main.
│
develop       <- Branche d'intégration. Toujours à jour. Base de tout développement.
│
├── feature/  <- Nouvelle fonctionnalité. Créée depuis develop.
│
└── release/  <- Préparation d'une version. Créée depuis develop.`}</CodeBlock>

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
        4. Après validation -&gt; merge dans <InlineCode>develop</InlineCode>{" "}
        puis supprimer la branche
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
          ✅ <Strong>En anglais</Strong> - comme les commits et le code
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
