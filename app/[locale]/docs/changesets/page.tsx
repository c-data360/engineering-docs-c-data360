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
  Blockquote,
  DocTable,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/doc-prose";

export const metadata: Metadata = { title: "Changesets | Engineering Docs" };

function FrContent() {
  return (
    <>
      <P>
        On utilise{" "}
        <Strong>
          <a
            href="https://github.com/changesets/changesets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Changesets
          </a>
        </Strong>{" "}
        pour gérer le versioning sémantique et la génération automatique des
        changelogs.
      </P>

      <H2>Principe</H2>
      <P>
        Chaque changement significatif dans le code doit être accompagné
        d&apos;un <Strong>changeset</Strong> - un petit fichier décrivant la
        nature du changement (<InlineCode>patch</InlineCode>,{" "}
        <InlineCode>minor</InlineCode>, <InlineCode>major</InlineCode>) et un
        résumé lisible.
      </P>
      <P>
        Ces fichiers s&apos;accumulent dans <InlineCode>.changeset/</InlineCode>{" "}
        au fil des PR, puis sont consommés lors d&apos;une release pour :
      </P>
      <Ul>
        <Li>Bumper automatiquement les versions des packages concernés</Li>
        <Li>
          Générer les entrées de <InlineCode>CHANGELOG.md</InlineCode>
        </Li>
      </Ul>

      <Hr />

      <H2>Quand créer un changeset ?</H2>
      <DocTable>
        <TableHeader>
          <TableRow>
            <TableHead>Situation</TableHead>
            <TableHead>Changeset ?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              Nouvelle fonctionnalité visible par l&apos;utilisateur
            </TableCell>
            <TableCell>
              ✅ <InlineCode>minor</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Correction de bug</TableCell>
            <TableCell>
              ✅ <InlineCode>patch</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Breaking change (API, contrat, schéma)</TableCell>
            <TableCell>
              ✅ <InlineCode>major</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Refactoring interne, style, docs</TableCell>
            <TableCell>❌ Non</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mise à jour de dépendances (sans impact API)</TableCell>
            <TableCell>❌ Non</TableCell>
          </TableRow>
        </TableBody>
      </DocTable>

      <Hr />

      <H2>Workflow</H2>

      <H3>1. Créer un changeset après ta modification</H3>
      <CodeBlock lang="bash">{`pnpm changeset`}</CodeBlock>
      <P>
        Un assistant interactif te demande le ou les packages impactés, le type
        de bump et un résumé. Un fichier est créé dans{" "}
        <InlineCode>.changeset/</InlineCode> -{" "}
        <Strong>committe-le avec ton code</Strong>.
      </P>
      <CodeBlock lang="bash">{`git add .changeset/
git commit -m "chore: add changeset for feat(auth)"`}</CodeBlock>

      <H3>2. Lors d&apos;une release - bumper les versions</H3>
      <CodeBlock lang="bash">{`pnpm changeset:version`}</CodeBlock>
      <P>
        Cette commande lit tous les fichiers{" "}
        <InlineCode>.changeset/</InlineCode>, met à jour les{" "}
        <InlineCode>package.json</InlineCode>, génère les{" "}
        <InlineCode>CHANGELOG.md</InlineCode> et supprime les changesets
        consommés.
      </P>
      <CodeBlock lang="bash">{`git add .
git commit -m "chore: version packages"`}</CodeBlock>

      <H3>3. Publier (si applicable)</H3>
      <CodeBlock lang="bash">{`pnpm changeset publish`}</CodeBlock>
      <Blockquote>
        <p className="mb-0">
          Dans ce projet, les releases sont automatisées via GitHub Actions. Le
          workflow crée une PR de release automatiquement dès qu&apos;il détecte
          des changesets non consommés sur <InlineCode>main</InlineCode>.
        </p>
      </Blockquote>

      <Hr />

      <H2>Types de bump</H2>
      <DocTable>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Quand</TableHead>
            <TableHead>Exemple de version</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <InlineCode>patch</InlineCode>
            </TableCell>
            <TableCell>Bug fix, correction mineure</TableCell>
            <TableCell>
              <InlineCode>1.2.3</InlineCode> -&gt; <InlineCode>1.2.4</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>minor</InlineCode>
            </TableCell>
            <TableCell>Nouvelle fonctionnalité rétrocompatible</TableCell>
            <TableCell>
              <InlineCode>1.2.3</InlineCode> -&gt; <InlineCode>1.3.0</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>major</InlineCode>
            </TableCell>
            <TableCell>Breaking change</TableCell>
            <TableCell>
              <InlineCode>1.2.3</InlineCode> -&gt; <InlineCode>2.0.0</InlineCode>
            </TableCell>
          </TableRow>
        </TableBody>
      </DocTable>

      <Hr />

      <H2>Règles</H2>
      <Ul>
        <Li>
          ✅ Un changeset par fonctionnalité ou correction (une PR = un
          changeset)
        </Li>
        <Li>
          ✅ Le message du changeset est rédigé pour être lu dans un changelog
          (pas comme un commit)
        </Li>
        <Li>
          ✅ Committe le fichier <InlineCode>.changeset/</InlineCode> dans la
          même PR que le code
        </Li>
        <Li>
          ❌ Ne pas bumper manuellement les{" "}
          <InlineCode>package.json</InlineCode>
        </Li>
        <Li>
          ❌ Ne pas éditer les <InlineCode>CHANGELOG.md</InlineCode> à la main
        </Li>
      </Ul>
    </>
  );
}

function EnContent() {
  return (
    <>
      <H1>📦 Changesets - Versioning &amp; Changelog</H1>
      <P>
        We use{" "}
        <Strong>
          <a
            href="https://github.com/changesets/changesets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Changesets
          </a>
        </Strong>{" "}
        to manage semantic versioning and automatic changelog generation.
      </P>

      <H2>Principle</H2>
      <P>
        Every significant code change must be accompanied by a{" "}
        <Strong>changeset</Strong> - a small file describing the nature of the
        change (<InlineCode>patch</InlineCode>, <InlineCode>minor</InlineCode>,{" "}
        <InlineCode>major</InlineCode>) and a human-readable summary.
      </P>
      <P>
        These files accumulate in <InlineCode>.changeset/</InlineCode> across
        PRs, then are consumed during a release to:
      </P>
      <Ul>
        <Li>Automatically bump the versions of affected packages</Li>
        <Li>
          Generate entries in <InlineCode>CHANGELOG.md</InlineCode>
        </Li>
      </Ul>

      <Hr />

      <H2>When to create a changeset?</H2>
      <DocTable>
        <TableHeader>
          <TableRow>
            <TableHead>Situation</TableHead>
            <TableHead>Changeset?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>New user-facing feature</TableCell>
            <TableCell>
              ✅ <InlineCode>minor</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bug fix</TableCell>
            <TableCell>
              ✅ <InlineCode>patch</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Breaking change (API, contract, schema)</TableCell>
            <TableCell>
              ✅ <InlineCode>major</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Internal refactoring, style, docs</TableCell>
            <TableCell>❌ No</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dependency updates (no API impact)</TableCell>
            <TableCell>❌ No</TableCell>
          </TableRow>
        </TableBody>
      </DocTable>

      <Hr />

      <H2>Workflow</H2>

      <H3>1. Create a changeset after your change</H3>
      <CodeBlock lang="bash">{`pnpm changeset`}</CodeBlock>
      <P>
        An interactive prompt will ask for the affected packages, bump type, and
        a summary. A file is created in <InlineCode>.changeset/</InlineCode> -{" "}
        <Strong>commit it with your code</Strong>.
      </P>
      <CodeBlock lang="bash">{`git add .changeset/
git commit -m "chore: add changeset for feat(auth)"`}</CodeBlock>

      <H3>2. On release - bump versions</H3>
      <CodeBlock lang="bash">{`pnpm changeset:version`}</CodeBlock>
      <P>
        This command reads all <InlineCode>.changeset/</InlineCode> files,
        updates <InlineCode>package.json</InlineCode> files, generates{" "}
        <InlineCode>CHANGELOG.md</InlineCode> entries, and deletes consumed
        changesets.
      </P>
      <CodeBlock lang="bash">{`git add .
git commit -m "chore: version packages"`}</CodeBlock>

      <H3>3. Publish (if applicable)</H3>
      <CodeBlock lang="bash">{`pnpm changeset publish`}</CodeBlock>
      <Blockquote>
        <p className="mb-0">
          In this project, releases are automated via GitHub Actions. The
          workflow automatically creates a release PR whenever it detects
          unconsumed changesets on <InlineCode>main</InlineCode>.
        </p>
      </Blockquote>

      <Hr />

      <H2>Bump types</H2>
      <DocTable>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>When</TableHead>
            <TableHead>Version example</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <InlineCode>patch</InlineCode>
            </TableCell>
            <TableCell>Bug fix, minor correction</TableCell>
            <TableCell>
              <InlineCode>1.2.3</InlineCode> -&gt; <InlineCode>1.2.4</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>minor</InlineCode>
            </TableCell>
            <TableCell>Backward-compatible new feature</TableCell>
            <TableCell>
              <InlineCode>1.2.3</InlineCode> -&gt; <InlineCode>1.3.0</InlineCode>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <InlineCode>major</InlineCode>
            </TableCell>
            <TableCell>Breaking change</TableCell>
            <TableCell>
              <InlineCode>1.2.3</InlineCode> -&gt; <InlineCode>2.0.0</InlineCode>
            </TableCell>
          </TableRow>
        </TableBody>
      </DocTable>

      <Hr />

      <H2>Rules</H2>
      <Ul>
        <Li>✅ One changeset per feature or fix (one PR = one changeset)</Li>
        <Li>
          ✅ The changeset message is written to be read in a changelog (not
          like a commit)
        </Li>
        <Li>
          ✅ Commit the <InlineCode>.changeset/</InlineCode> file in the same PR
          as the code
        </Li>
        <Li>
          ❌ Do not manually bump <InlineCode>package.json</InlineCode> files
        </Li>
        <Li>
          ❌ Do not edit <InlineCode>CHANGELOG.md</InlineCode> files by hand
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
