import type { NextPage } from "next";
import React from "react";
import { NextSeo } from "next-seo";
import { Flex, VStack, Heading, Text } from "@chakra-ui/react";
import ProjectListFull from "../src/components/ProjectListFull";

const url = "https://www.bobirrahmatov.tech/projects/";
const title = "Projects – Bobir Rahmatov";
const description = "I am always working on new projects, you can find them below or on my Github.";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <NextSeo title={title} description={description} canonical={url} />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Flex
          flexDirection="column"
          maxWidth="1200px"
          alignSelf={[null, "center"]}
        >
          <Heading size="lg" as="h1">
            Projects 💻
          </Heading>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            {`I'm always working on new projects, you can find them below or on my Github`}
          </Text>
          {/* Projects */}
          <ProjectListFull />
        </Flex>
      </VStack>
    </>
  );
};

export default ProjectsPage;
