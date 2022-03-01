import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  useColorModeValue,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import ThemeToggleButton from "./ThemeToggleButton";

const LinkItem = ({ href, _target, children, ...props }: any) => {
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        _hover={{
          textDecoration: "none",
          backgroundColor: "undefined",
          borderRadius: 10,
        }}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props: any) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      //bg={useColorModeValue("#ffffff40", "#20202380")}
      bg={useColorModeValue("light", "dark")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.lg">
        <Flex align="center" mr={4}>
          <Text
            fontSize={{ base: "0px", md: "32px" }}
            fontWeight={{ base: "0", md: "600" }}
          >
            Bobir Rahmatov
          </Text>
        </Flex>

        {isMobile ? (
          <Stack
            direction={{ base: "row", md: "row" }}
            display={{ base: "row", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/blog">Blog</LinkItem>
            <LinkItem href="/uses">Gear</LinkItem>
            <LinkItem href="/projects">Projects</LinkItem>
          </Stack>
        ) : (
          <Stack
            direction={{ base: "row", md: "row" }}
            display={{ base: "row", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/blog">Blog</LinkItem>
            <LinkItem href="/uses">Gear</LinkItem>
            <LinkItem href="/projects">Projects</LinkItem>
          </Stack>
        )}
        <Box flex={1} alignItems="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
