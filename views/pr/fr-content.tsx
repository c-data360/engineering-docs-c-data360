import {
  H1,
  H2,
  P,
  Ul,
  Li,
  Hr,
  Strong,
  InlineCode,
  CodeBlock,
  Blockquote,
  CheckList,
  CheckItem,
  Ol,
} from "@/components/doc-prose";

export function FrContent() {
  return (
    <>
      <H1>🔁 Process de Pull Request</H1>

      <H2>Règle fondamentale</H2>
      <Blockquote>
        <p className="mb-1">
          <Strong>
            Aucun code n&apos;entre dans <InlineCode>develop</InlineCode> ou{" "}
            <InlineCode>main</InlineCode> sans Pull Request reviewée.
          </Strong>
        </p>
        <p className="mb-0">
          Pas d&apos;exception. Même si tu es pressé. Même si &quot;c&apos;est
          juste un petit fix&quot;.
        </p>
      </Blockquote>

      <Hr />

      <H2>Quand ouvrir une PR ?</H2>
      <CheckList>
        <CheckItem>
          Ta fonctionnalité est terminée et testée localement
        </CheckItem>
        <CheckItem>Ton code compile sans erreur</CheckItem>
        <CheckItem>
          Tu as vérifié qu&apos;il n&apos;y a pas de{" "}
          <InlineCode>console.log</InlineCode> ou code de debug oublié
        </CheckItem>
        <CheckItem>
          Ta branche est à jour avec <InlineCode>develop</InlineCode> (ou{" "}
          <InlineCode>main</InlineCode> pour un hotfix)
        </CheckItem>
      </CheckList>
      <CodeBlock lang="bash">{`# Mettre à jour sa branche avant d'ouvrir la PR
git checkout develop
git pull origin develop
git checkout feature/ma-fonctionnalite
git merge develop
# Résoudre les conflits si nécessaire, puis push
git push origin feature/ma-fonctionnalite`}</CodeBlock>

      <Hr />

      <H2>Comment ouvrir une PR</H2>
      <Ol>
        <Li>Aller sur le repo GitHub</Li>
        <Li>
          Cliquer sur <Strong>&quot;Compare &amp; pull request&quot;</Strong>
        </Li>
        <Li>
          Vérifier : <Strong>base</Strong> = <InlineCode>develop</InlineCode>{" "}
          (ou <InlineCode>main</InlineCode> pour hotfix),{" "}
          <Strong>compare</Strong> = ta branche
        </Li>
        <Li>
          Remplir <Strong>entièrement</Strong> le template de PR
        </Li>
        <Li>
          Assigner le bon <Strong>reviewer</Strong>
        </Li>
        <Li>
          Ajouter les <Strong>labels</Strong> appropriés (
          <InlineCode>feature</InlineCode>, <InlineCode>fix</InlineCode>,{" "}
          <InlineCode>hotfix</InlineCode>…)
        </Li>
        <Li>
          Lier l&apos;<Strong>issue</Strong> correspondante si elle existe (
          <InlineCode>Closes #42</InlineCode>)
        </Li>
      </Ol>

      <Hr />

      <H2>Être un bon reviewer</H2>
      <Ul>
        <Li>
          ✅ Reviewer dans les <Strong>24h</Strong> ouvrées
        </Li>
        <Li>
          ✅ Commenter de façon <Strong>constructive et précise</Strong>
        </Li>
        <Li>
          ✅ Approuver seulement si tu es <Strong>convaincu</Strong> que le code
          est correct
        </Li>
        <Li>❌ Ne pas approuver par politesse ou pour débloquer vite</Li>
      </Ul>

      <Hr />

      <H2>Après le merge</H2>
      <P>
        La branche est <Strong>supprimée automatiquement</Strong> (configuré
        dans l&apos;organisation). Tu reviens sur{" "}
        <InlineCode>develop</InlineCode> et tu pull :
      </P>
      <CodeBlock lang="bash">{`git checkout develop
git pull origin develop`}</CodeBlock>
    </>
  );
}
