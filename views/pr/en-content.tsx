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

export function EnContent() {
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
