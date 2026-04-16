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
  A,
  Ol,
} from "@/components/doc-prose";

export function EnContent({ locale }: { locale: string }) {
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
