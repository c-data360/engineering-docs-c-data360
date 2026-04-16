import {
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

export function FrContent() {
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
