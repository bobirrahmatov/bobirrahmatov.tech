import { useState } from "react";
import { NextSeo } from "next-seo";
import { Heading, Text, VStack, List, ListItem } from "@chakra-ui/react";
import { getAllBlogPosts } from "../blog";
import { BlogPostCard } from "../../src/components";

const url = "https://www.bobirrahmatov.tech/tags/";
const title = "Search by";
const description = "Tags can be filtered by topic or title";

export const getStaticPaths = async () => {
  const posts = await getAllBlogPosts();

  return {
    paths: posts.map(({ tag }: any) => ({ params: { tag } })),
    fallback: false,
  };
};

export const getAllPostsByTag = async (query: any) => {
  const posts = await getAllBlogPosts();

  return posts.filter((post: any) => post.tag.includes(query));
};

export const getStaticProps = async ({ params }: any) => {
  const { tag } = params;
  const props = {
    posts: await getAllPostsByTag(tag),
    tag,
  };

  return {
    props,
  };
};

const TagPage = ({ posts, tag }: any) => {
  const [displayPosts] = useState(posts);
  let filteredPostsLength = displayPosts.length;

  return (
    <>
      <NextSeo
        title={title}
        description={`Search by - ${tag}`}
        canonical={url}
      />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="xl" as="h1">
          🔥 {filteredPostsLength} Posts filtered by tag &quot;{tag}&quot;
        </Heading>
      </VStack>
      <List spacing={1} w="full">
        {displayPosts.map((post: any) => (
          <ListItem key={post.slug}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      {displayPosts.length === 0 && (
        <Text fontSize="xl" fontWeight="600">
          No articles for that query
        </Text>
      )}
    </>
  );
};

export default TagPage;
