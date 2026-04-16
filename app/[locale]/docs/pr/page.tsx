import {
  H1,
  H2,
  P,
  Ul,
  Ol,
  Li,
  CheckList,
  CheckItem,
  Hr,
  Strong,
  InlineCode,
  CodeBlock,
  Blockquote,
} from "@/components/doc-prose";

function FrContent() {
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

function EnContent() {
  return (
    <>
      <H1>🔁 Pull Request Process</H1>

      <H2>Fundamental rule</H2>
      <Blockquote>
        <p className="mb-1">
          <Strong>
            No code enters <InlineCode>develop</InlineCode> or{" "}
            <InlineCode>main</InlineCode> without a reviewed Pull Request.
          </Strong>
        </p>
        <p className="mb-0">
          No exceptions. Even if you&apos;re in a hurry. Even if &quot;it&apos;s
          just a small fix&quot;.
        </p>
      </Blockquote>

      <Hr />

      <H2>When to open a PR?</H2>
      <CheckList>
        <CheckItem>Your feature is complete and tested locally</CheckItem>
        <CheckItem>Your code compiles without errors</CheckItem>
        <CheckItem>
          You&apos;ve checked there are no forgotten{" "}
          <InlineCode>console.log</InlineCode> or debug code
        </CheckItem>
        <CheckItem>
          Your branch is up to date with <InlineCode>develop</InlineCode> (or{" "}
          <InlineCode>main</InlineCode> for a hotfix)
        </CheckItem>
      </CheckList>
      <CodeBlock lang="bash">{`# Update your branch before opening the PR
git checkout develop
git pull origin develop
git checkout feature/my-feature
git merge develop
# Resolve conflicts if needed, then push
git push origin feature/my-feature`}</CodeBlock>

      <Hr />

      <H2>How to open a PR</H2>
      <Ol>
        <Li>Go to the GitHub repo</Li>
        <Li>
          Click <Strong>&quot;Compare &amp; pull request&quot;</Strong>
        </Li>
        <Li>
          Check: <Strong>base</Strong> = <InlineCode>develop</InlineCode> (or{" "}
          <InlineCode>main</InlineCode> for hotfix), <Strong>compare</Strong> =
          your branch
        </Li>
        <Li>
          Fill in the PR template <Strong>entirely</Strong>
        </Li>
        <Li>
          Assign the right <Strong>reviewer</Strong>
        </Li>
        <Li>
          Add the appropriate <Strong>labels</Strong> (
          <InlineCode>feature</InlineCode>, <InlineCode>fix</InlineCode>,{" "}
          <InlineCode>hotfix</InlineCode>…)
        </Li>
        <Li>
          Link the corresponding <Strong>issue</Strong> if it exists (
          <InlineCode>Closes #42</InlineCode>)
        </Li>
      </Ol>

      <Hr />

      <H2>Being a good reviewer</H2>
      <Ul>
        <Li>
          ✅ Review within <Strong>24 business hours</Strong>
        </Li>
        <Li>
          ✅ Comment in a <Strong>constructive and precise</Strong> way
        </Li>
        <Li>
          ✅ Approve only if you are <Strong>convinced</Strong> the code is
          correct
        </Li>
        <Li>❌ Do not approve out of politeness or to unblock quickly</Li>
      </Ul>

      <Hr />

      <H2>After the merge</H2>
      <P>
        The branch is <Strong>deleted automatically</Strong> (configured at the
        organization level). Go back to <InlineCode>develop</InlineCode> and
        pull:
      </P>
      <CodeBlock lang="bash">{`git checkout develop
git pull origin develop`}</CodeBlock>
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
