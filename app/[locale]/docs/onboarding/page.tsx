import {
  H1,
  H2,
  H3,
  P,
  Ol,
  Li,
  CheckList,
  CheckItem,
  Hr,
  A,
  InlineCode,
  CodeBlock,
} from "@/components/doc-prose";

export const metadata = { title: "Onboarding | Engineering Docs" };

function FrContent({ locale }: { locale: string }) {
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

function EnContent({ locale }: { locale: string }) {
  return (
    <>
      <H1>👋 Welcome</H1>
      <P>
        This document is your starting point. Read it entirely before writing a
        single line of code.
      </P>

      <H2>📚 Documents to read in order</H2>
      <Ol>
        <Li>
          <A href={`/${locale}/docs/gitflow`}>Our GitFlow</A> - How we manage
          branches
        </Li>
        <Li>
          <A href={`/${locale}/docs/commits`}>Commit Conventions</A> - How we
          name commits
        </Li>
        <Li>
          <A href={`/${locale}/docs/pr`}>Pull Request Process</A> - How we
          submit our work
        </Li>
        <Li>
          <A href={`/${locale}/docs/changesets`}>Changesets</A> - How we version
          code and generate changelogs
        </Li>
      </Ol>

      <Hr />

      <H2>🛠️ Basic setup</H2>

      <H3>1. Configure your Git identity with your work email</H3>
      <CodeBlock lang="bash">{`git config --global user.name "First Last"
git config --global user.email "firstname.lastname@company.com"`}</CodeBlock>

      <H3>2. Clone the repository you&apos;re working on</H3>
      <CodeBlock lang="bash">{`git clone git@github.com:org/repo-name.git
cd repo-name`}</CodeBlock>

      <H3>3. Install dependencies and configure the environment</H3>
      <P>See the relevant repo&apos;s README.</P>

      <Hr />

      <H2>✅ Checklist before your first commit</H2>
      <CheckList>
        <CheckItem>Git configured with your work email</CheckItem>
        <CheckItem>You&apos;ve read the GitFlow</CheckItem>
        <CheckItem>You&apos;ve read the commit conventions</CheckItem>
        <CheckItem>You&apos;ve read the PR process</CheckItem>
        <CheckItem>You&apos;ve read the Changesets doc</CheckItem>
        <CheckItem>
          You&apos;ve created your branch from <InlineCode>develop</InlineCode>{" "}
          (never from <InlineCode>main</InlineCode>)
        </CheckItem>
      </CheckList>
    </>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return locale === "fr" ? (
    <FrContent locale={locale} />
  ) : (
    <EnContent locale={locale} />
  );
}
