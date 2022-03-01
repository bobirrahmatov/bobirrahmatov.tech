import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import NextLink from 'next/link';
import matter from 'gray-matter';
import {
  VStack,
  Heading,
  HStack,
  Text,
  Divider,
  Link,
  Box
} from '@chakra-ui/react';
import { promises as fs } from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import readingTime from 'reading-time';

import { getAllBlogPosts } from './index';
import { MDXComponents, TagsSummary } from '../../src/components';
import { NextSeo } from 'next-seo'
import imageMetadata from '../../src/utils/imageMetaData';

const description = 'Personal blog of Bobir Rahmatov. I write about coding, projects and various other things.';

export const readBlogPost = async (slug: string) => {
  const postPath = path.join(process.cwd(), './content/posts', `${slug}.md`);

  return await fs.readFile(postPath, 'utf8');
};

export const getStaticPaths = async () => {
  const posts = await getAllBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false
  };
};

export const getStaticProps = async ctx => {
  const slug = ctx.params.slug as string;

  const postContent = await readBlogPost(slug);
  const { text: timeToRead } = readingTime(postContent);
  const allPosts = await getAllBlogPosts();

  const {
    content,
    data: { title, date, tag, canonicalUrl }
  } = matter(postContent);

  return {
    props: {
      source: await serialize(content, {
        mdxOptions: {
          rehypePlugins: [imageMetadata]
        }
      }),
      title,
      date,
      slug,
      timeToRead,
      allPosts,
      tag,
      canonicalUrl
    }
  };
};

const BlogPostPage = ({
  title,
  date,
  source,
  timeToRead,
  tag,
  allPosts,
  canonicalUrl
}) => {
  const { query } = useRouter();
  const slug = query.slug as string;

  const postIndex = allPosts.findIndex(post => post.slug === slug);
  const previousArticle = allPosts[postIndex - 1] || null;
  const nextArticle = allPosts[postIndex + 1] || null;

  return (
    <>
      <NextSeo
          title={`${title} by Bobir Rahmatov`}
          description={description}
          canonical={canonicalUrl}
      />
      <VStack spacing={8} alignItems="stetch" w="full" as="section" pt={28}>
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="lg">{title}</Heading>
          <HStack
            divider={
              <Text color="gray.500" mx={2}>
                •
              </Text>
            }
          >
            <Text color="gray.500" fontSize="sm">
              {dayjs(date).format('YYYY D, MMM')}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {timeToRead}
            </Text>

            <Box bg="orange.400" p={1} borderRadius={8}>
              <TagsSummary tag={tag} />
            </Box>
          </HStack>
        </VStack>
        <MDXRemote {...source} components={MDXComponents} />
        <Divider />

        <HStack justifyContent="space-between">
          {previousArticle !== null ? (
            <NextLink href={previousArticle.slug}>
              <Link>
                <Text as="h2" fontSize="md" fontWeight="600" _hover={{}}>
                  ⬅️ Previous: {previousArticle.title}
                </Text>
              </Link>
            </NextLink>
          ) : null}
          {nextArticle !== null ? (
            <NextLink href={nextArticle.slug}>
              <Link>
                <Text as="h2" fontSize="md" fontWeight="600">
                  Next: {nextArticle.title} ➡️
                </Text>
              </Link>
            </NextLink>
          ) : null}
        </HStack>
      </VStack>
    </>
  );
};

export default BlogPostPage;