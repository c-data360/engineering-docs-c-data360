import {
  H1,
  H2,
  H3,
  P,
  Li,
  Hr,
  InlineCode,
  CodeBlock,
  CheckList,
  CheckItem,
  Ol,
  A,
} from "@/components/doc-prose";

export function FrContent({ locale }: { locale: string }) {
  return (
    <>
      <H1>👋 Bienvenue</H1>
      <P>
        Ce document est ton point de départ. Lis-le entièrement avant
        d&apos;écrire la moindre ligne de code.
      </P>

      <H2>📚 Documents à lire dans l&apos;ordre</H2>
      <Ol>
        <Li>
          <A href={`/${locale}/docs/gitflow`}>Notre GitFlow</A> - Comment on
          gère les branches
        </Li>
        <Li>
          <A href={`/${locale}/docs/commits`}>Conventions de commits</A> -
          Comment on nomme les commits
        </Li>
        <Li>
          <A href={`/${locale}/docs/pr`}>Process de Pull Request</A> - Comment
          on soumet son travail
        </Li>
        <Li>
          <A href={`/${locale}/docs/changesets`}>Changesets</A> - Comment on
          versionne le code et génère les changelogs
        </Li>
      </Ol>

      <Hr />

      <H2>🛠️ Setup de base</H2>

      <H3>1. Configure ton identité Git avec ton mail pro</H3>
      <CodeBlock lang="bash">{`git config --global user.name "Prénom Nom"
git config --global user.email "prenom.nom@company.com"`}</CodeBlock>

      <H3>2. Clone le repo sur lequel tu travailles</H3>
      <CodeBlock lang="bash">{`git clone git@github.com:org/nom-du-repo.git
cd nom-du-repo`}</CodeBlock>

      <H3>3. Installe les dépendances et configure l&apos;environnement</H3>
      <P>Voir le README du repo concerné.</P>

      <Hr />

      <H2>✅ Checklist avant ton premier commit</H2>
      <CheckList>
        <CheckItem>Git configuré avec ton mail pro</CheckItem>
        <CheckItem>Tu as lu le GitFlow</CheckItem>
        <CheckItem>Tu as lu les conventions de commits</CheckItem>
        <CheckItem>Tu as lu le process de PR</CheckItem>
        <CheckItem>Tu as lu la doc Changesets</CheckItem>
        <CheckItem>
          Tu as créé ta branche depuis <InlineCode>develop</InlineCode> (jamais
          depuis <InlineCode>main</InlineCode>)
        </CheckItem>
      </CheckList>
    </>
  );
}
