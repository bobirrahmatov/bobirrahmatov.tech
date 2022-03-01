import type { NextPage } from "next";
import { NextSeo } from 'next-seo';

import {
  Hero,
  LatestPostsSection,
  TechStack 
} from "../src/components";

import { getAllBlogPosts } from "./blog";

const url = 'https://bobirrahmatov.tech/'
const title = 'Home – Bobir Rahmatov'
const description = 'I am a full-stack developer, curious to learn anything.'


export const getRecentBlogPosts = async () => {
  const posts = await getAllBlogPosts();

  const recentPosts = posts
    .sort((a: any, b: any) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 4);

  return recentPosts;
};

export const getStaticProps = async () => {
  const posts = await getRecentBlogPosts();

  const props = {
    posts,
  };

  return {
    props,
  };
};

const HomePage: NextPage = ({ posts }: any) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
      />
      <Hero />
      <TechStack />
      {/* Posts */}
      <LatestPostsSection posts={posts} />
    </>
  );
};

export default HomePage;
