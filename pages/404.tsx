import NextLink from "next/link";
import { NextSeo } from "next-seo";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const title = "404 - Page Not Found - Bobir (Bob) Rahmatov";

const NotFound: NextPage = () => {
  return (
    <>
      <NextSeo title={title} />
      <Box pt={20}>
        <Container>
          <Heading as="h1">Not found</Heading>
          <Text>
            Sorry the page you&apos;re looking for was not found 🥺, if this
            error persists please contact me
          </Text>
          <Divider my={6} />
          <Box my={6} alignItems="center">
            <NextLink href="/">
              <Button bg="orange.400" color="grey.900">
                Go back home
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
