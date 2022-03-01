import type { InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import {
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Icon,
  List,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { HiOutlineSearch } from "react-icons/hi";
import readingTime from "reading-time";

import { BlogPostCard, TagsSummary } from "../../src/components";
import { NextSeo } from "next-seo";

const url = "https://www.bobirrahmatov.tech/blog/";
const title = "Bobir Rahmatov - Blog";
const description = "Posts about coding, projects and various other things.";

// Tags cloud
const tagsArray = [
  "vba",
  "figma",
  "sketch",
  "react-native",
  "react",
  "nodejs",
  "gatsby",
  "year-wrap-up",
  "javascript",
  "git",
  "solidity",
  "python",
  "ui/uix",
  "data-science",
  "rpa/bots",
  "data-visualization",
  "vercel",
  "chakra-ui",
  "css",
  "html",
  "graphql",
  "firebase",
  "sql",
  "others",
];

// Fetch all posts
export const getAllBlogPosts = async () => {
  const result: any = [];
  const dir = path.join(process.cwd(), "./content/posts");
  const blogPosts = await fs.readdir(dir);

  await Promise.all(
    blogPosts.map(async (post) => {
      const postPath = path.join(dir, post);
      const slug = post.replace(".md", "");
      const fileContent = await fs.readFile(postPath, "utf8");

      const { text: timeToRead } = readingTime(fileContent);

      const {
        data: { title, date, thumbnail, tag },
      } = matter(fileContent);

      result.push({
        title,
        date,
        slug,
        thumbnail,
        timeToRead,
        tag,
      });
    })
  );

  return result.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};

export const getStaticProps = async () => {
  const posts = await getAllBlogPosts();
  const props = {
    posts,
  };

  return {
    props,
  };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [displayPosts, setDisplayPosts] = useState(posts);

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );

    setDisplayPosts(filteredPosts);
  };

  return (
    <>
      <NextSeo title={title} description={description} canonical={url} />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="xl" as="h1">
          Blog
        </Heading>
        <Text fontSize="xl">
          Posts about coding, projects and various other things.
        </Text>
        <Text fontSize="xl">
          I am a self-taught developer trying to learn new technologies and
          sharing my experiences and knowledge. In total, I have written{" "}
          <strong>{Object.keys(posts).length}</strong> posts. I hope you enjoy
          it 🍵.
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={HiOutlineSearch} color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Search a post by title, or topic..."
            variant="filled"
            onChange={onSearch}
          />
        </InputGroup>
        <HStack spacing={3} pt={4} flexWrap="wrap">
          <Text fontSize="lg" fontWeight="700">
            Common tags:
          </Text>
          {tagsArray.map((tag) => (
            <HStack key={tag} flexDirection="row" py={2}>
              <Box bg="orange.500" p={1} borderRadius={8}>
                <TagsSummary tag={tag} />
              </Box>
            </HStack>
          ))}
        </HStack>
      </VStack>
      <List spacing={1} w="full">
        {displayPosts.map((post) => (
          <ListItem key={post.slug}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      {displayPosts.length === 0 && (
        <Text fontSize="xl" fontWeight="600">
          No posts found for that query 🥺, please contact me if you would like
          to see more posts about this query.
        </Text>
      )}
    </>
  );
};

export default Blog;
