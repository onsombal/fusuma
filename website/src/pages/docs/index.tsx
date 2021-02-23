import Link from 'next/link';
import { Text, Box, Heading, Code, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { DocsLayout } from '../../components/DocsLayout';
import { Section } from '../../components/Section';
import { FlexBox } from '../../components/FlexBox';
import { Bold } from '../../components/Bold';
import { Link as LinkA } from '../../components/Link';
import lighthouse from '../../../public/static/lighthouse.png';
import ogp from '../../../public/static/og-image.png';

const Intro = () => (
  <DocsLayout title="Introducing Fusuma">
    <Section title="Docs to Know More Details">
      <UnorderedList>
        <ListItem fontSize="lg">
          <Link href="/docs/fusumarc">A Configuration File of Fusuma</Link>
        </ListItem>
        <ListItem fontSize="lg">
          <Link href="/docs/slide-syntax">Slide Syntax</Link>
        </ListItem>
        <ListItem fontSize="lg">
          <Link href="/docs/css">Custom Styles and Themes</Link>
        </ListItem>
      </UnorderedList>
    </Section>
    <Section title="Markdown and MDX">
      <Text>
        Fusuma supports Markdown and MDX to create slides.{' '}
        <LinkA href="https://github.com/mdx-js/mdx">MDX</LinkA> is Markdown and JSX so it means you
        can have more flexibility in making slides.{' '}
      </Text>
      <FlexBox
        right={{
          children: (
            <SyntaxHighlighter language="jsx" style={tomorrow}>
              {`// Hello.js
import React from 'react';

export const Hello = () => <h3>hello from js</h3>;`}
            </SyntaxHighlighter>
          ),
        }}
        left={{
          children: (
            <SyntaxHighlighter language="md" style={tomorrow}>
              {`<!-- slide.mdx -->
## mdx

import { Hello } from '../components/Hello';

<Hello />

---

😍 the second slide!`}
            </SyntaxHighlighter>
          ),
        }}
      />
    </Section>
    <Section title="Installing Fusuma">
      <Text>
        Fusuma requires over Node.js@v12. Running <Code>npx fusuma init</Code> generates the some
        files.
      </Text>
      <FlexBox
        left={{
          children: (
            <SyntaxHighlighter language="shell" style={tomorrow}>
              {`$ npm i fusuma -D
$ npx fusuma init
$ tree -a
.
├── .fusumarc.yml
├── .github
│   └── workflows
│       └── fusuma.yml
├── slides
│   └── 0-slide.md
└── style.css`}
            </SyntaxHighlighter>
          ),
        }}
        right={{
          children: (
            <Box>
              <UnorderedList>
                <ListItem>
                  <Code>.fusumarc.yml</Code> is a setting file for fusuma.
                </ListItem>
                <ListItem>
                  <Code>.github/workflows/fusuma.yml</Code> is a github actions that automates
                  deployment to gh-pages.
                </ListItem>
                <ListItem>
                  <Code>slides/0-slide.md</Code> is a Markdown for slides.
                </ListItem>
                <ListItem>
                  <Code>style.css</Code> is a CSS file and automatically read by Fusuma.
                </ListItem>
              </UnorderedList>
              <Heading size="md" mt={3} mb={1}>
                Slide Loading Order
              </Heading>
              <Text>
                Searching slides are based on root hierarchy, and searching order is{' '}
                <Bold>numeric</Bold> and <Bold>alphabetical</Bold> so we recommend using a numeric
                prefix for slide's filename such as <Code>0-main.md</Code>, <Code>1-end.mdx</Code>.
              </Text>
            </Box>
          ),
        }}
      />
    </Section>
    <Section title="Performance and SEO/OGP">
      <Text>
        Since slides are HTML, we should always consider accessibility(a11y), SEO, and OGP. As you
        can see from the lighthouse score, the performance and SEO of Slides generated by Fusuma is
        awesome. And also, Fusuma <Bold>checks a11y</Bold> and{' '}
        <Bold>
          generates <Code>og:image</Code> using the first page of a slide
        </Bold>{' '}
        automatically when building your slide as production.
      </Text>
      <FlexBox
        left={{
          children: <Image src={lighthouse} />,
        }}
        right={{
          children: <Image src={ogp} />,
        }}
      />
    </Section>
  </DocsLayout>
);

export default Intro;