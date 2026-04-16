import type { Metadata } from "next";
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

export const metadata: Metadata = { title: "Commits | Engineering Docs" };

function FrContent() {
  return (
    <>
      <P>
        On suit le standard{" "}
        <Strong>
          <a
            href="https://www.conventionalcommits.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Conventional Commits
          </a>
        </Strong>
        .
      </P>

      <H2>Format</H2>
      <CodeBlock>{`type(scope): description courte

[corps optionnel]

[footer optionnel]`}</CodeBlock>

      <Hr />

      <H2>Types de commits</H2>
      <DocTable>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Quand l&apos;utiliser</TableHead>
            <TableHead>Exemple</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <InlineCode>feat</InlineCode>
            </TableCell>
            <TableCell>Nouvelle fonctionnalité</TableCell>
            <TableCell>
              <InlineCode>
                feat: ajout de l&apos;authentification Google
              </InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>fix</InlineCode>
            </TableCell>
            <TableCell>Correction de bug</TableCell>
            <TableCell>
              <InlineCode>fix: correction du crash au login</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>hotfix</InlineCode>
            </TableCell>
            <TableCell>Correction urgente en prod</TableCell>
            <TableCell>
              <InlineCode>hotfix: patch faille sécurité token JWT</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>refactor</InlineCode>
            </TableCell>
            <TableCell>Refactoring sans changement fonctionnel</TableCell>
            <TableCell>
              <InlineCode>refactor: simplification du service auth</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>style</InlineCode>
            </TableCell>
            <TableCell>Formatage, espaces, virgules (pas de logique)</TableCell>
            <TableCell>
              <InlineCode>style: formatage composant Header</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>docs</InlineCode>
            </TableCell>
            <TableCell>Documentation uniquement</TableCell>
            <TableCell>
              <InlineCode>docs: mise à jour du README</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>test</InlineCode>
            </TableCell>
            <TableCell>Ajout ou modification de tests</TableCell>
            <TableCell>
              <InlineCode>test: ajout tests unitaires service user</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>chore</InlineCode>
            </TableCell>
            <TableCell>Maintenance, dépendances, config</TableCell>
            <TableCell>
              <InlineCode>chore: mise à jour des dépendances npm</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>perf</InlineCode>
            </TableCell>
            <TableCell>Amélioration de performance</TableCell>
            <TableCell>
              <InlineCode>perf: optimisation requête SQL dashboard</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>ci</InlineCode>
            </TableCell>
            <TableCell>Modification des pipelines CI/CD</TableCell>
            <TableCell>
              <InlineCode>ci: ajout du job de lint</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>revert</InlineCode>
            </TableCell>
            <TableCell>Annulation d&apos;un commit précédent</TableCell>
            <TableCell>
              <InlineCode>revert: annulation feat login Google</InlineCode>
            </TableCell>
          </TableRow>
        </TableBody>
      </DocTable>

      <Hr />

      <H2>Le scope (optionnel mais recommandé)</H2>
      <P>
        Le scope précise <Strong>quelle partie</Strong> du code est concernée.
      </P>
      <CodeBlock lang="bash">{`feat(auth): ajout connexion via Google
fix(dashboard): correction affichage graphique vide
refactor(api): restructuration des routes utilisateur`}</CodeBlock>

      <Hr />

      <H2>Règles</H2>
      <Ul>
        <Li>
          ✅ Description en <Strong>minuscules</Strong>
        </Li>
        <Li>
          ✅ Description en <Strong>anglais</Strong> - les commits, comme le
          code, sont en anglais
        </Li>
        <Li>
          ✅ Description <Strong>courte</Strong> (moins de 72 caractères)
        </Li>
        <Li>
          ✅ Temps présent : <InlineCode>add...</InlineCode> et non{" "}
          <InlineCode>added...</InlineCode>
        </Li>
        <Li>❌ Pas de point à la fin</Li>
        <Li>
          ❌ Pas de commit fourre-tout :{" "}
          <Strong>un commit = une chose précise</Strong>
        </Li>
      </Ul>

      <Hr />

      <H3>❌ Ce qu&apos;on ne fait PAS</H3>
      <CodeBlock lang="bash">{`# Trop vague
git commit -m "fix"
git commit -m "update"
git commit -m "wip"
git commit -m "aaaaa"

# Fourre-tout
git commit -m "feat: login + fix dashboard + refacto api + style header"`}</CodeBlock>

      <H3>✅ Ce qu&apos;on fait</H3>
      <CodeBlock lang="bash">{`git commit -m "feat(auth): add login form"
git commit -m "fix(auth): handle empty email validation"
git commit -m "style(auth): align submit button"`}</CodeBlock>
    </>
  );
}

function EnContent() {
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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "fr" ? <FrContent /> : <EnContent />;
}
