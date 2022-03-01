import {
  Box,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";

import HeroImage from "./HeroImage";

import { LINKEDIN, TWITTER, GITHUB } from "../data/socialLinks";

const socialLinks = [
  {
    href: TWITTER,
    label: "Twitter",
    color: "twitter",
  },
  {
    href: GITHUB,
    label: "GitHub",
  },
  {
    href: LINKEDIN,
    label: "Linkedin",
    color: "orange",
  },
];

const RotateBox = styled.span`
  &:hover img {
    transform: rotate(20deg);
  }
`;

const Hero = () => {
  return (
    <Box pt={28}>
      <Stack
        alignItems="center"
        spacing={12}
        w="full"
        direction={{ base: "column-reverse", md: "row" }}
        as="section"
      >
        <VStack spacing={3} alignItems="flex-start" w="full">
          <Stack
            spacing={3}
            w="full"
            direction={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems="center"
          >
            <Heading size="lg" as="h1">
              <RotateBox>
                <Image
                  src="/handwave.png"
                  width={24}
                  height={24}
                  alt="Hand wave emoji"
                />
              </RotateBox>{" "}
              Hi, I&apos;m Bob.
            </Heading>
          </Stack>

          <Text lineHeight="175%" as="h2" fontSize="lg">
            I&apos;m a full-stack developer (self-taught) 🚀. I’m still figuring
            out what my life would look like here, but for now, I’m happy to
            share I’m a curious learner of all things. I build stuff and also
            love Bitcoin{" "}
            <Image
              src="/bitcoin.png"
              width={24}
              height={24}
              alt="Bitcoin logo"
            />
            , Ethereum{" "}
            <Image src="/eth.png" width={24} height={24} alt="ETH logo" />
            , and Ripple{" "}
            <Image src="/xrp.png" width={24} height={24} alt="Ripple logo" />
          </Text>
          <Text lineHeight="175%" as="h2" fontSize="lg">
            Here, I am trying to learn new technologies and share my
            experiences and knowledge.
          </Text>

          <Stack spacing={3} direction={{ base: "row", md: "row" }}>
            {socialLinks.map(({ href, label, color }) => (
              <Button
                key={href}
                as={Link}
                variant="outline"
                color={color}
                href={href}
                target="_blank"
                px={2}
                justifyContent={{ base: "flex-start", md: "center" }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </VStack>
        <HeroImage />
      </Stack>
    </Box>
  );
};

export default Hero;
