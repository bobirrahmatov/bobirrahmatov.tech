import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { VStack, Heading, Text, List, ListItem } from "@chakra-ui/react";

import { ExternalLink } from "../src/components";

const url = "https://bobirrahmatov.tech/uses/";
const description =
  "The gear I use for programming and productivity every day.";
const title = "Gear – Bobir Rahmatov";

const UsesPage: NextPage = () => {
  return (
    <>
      <NextSeo title={title} description={description} canonical={url} />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
          Gear ⛏️
        </Heading>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          {`Productivity is directly associated with selecting the right software and hardware. 
          Here is a list of all the gear I use on a day-to-day basis. There are links but Not affiliate links.`}
        </Text>
        <Heading size="md" as="h2" pt={8}>
          Hardware ⚙️
        </Heading>

        <List spacing={4}>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-10-core-cpu-16-core-gpu-512gb/">
              MacBook Pro 16 M1 Pro Chip
            </ExternalLink>
            - Apple M1 Pro with 10-core CPU, 16-core GPU, 16-core Neural Engine
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.apple.com/shop/buy-mac/macbook-pro/13-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb/">
              MacBook Pro 13 M1 Chip
            </ExternalLink>
            - Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural
            Engine
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard/">
              Keychron K6 Wireless Mechanical Keyboard
            </ExternalLink>
            - this is a compact yet powerful keyboard that I love using
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.lg.com/us/monitors/lg-34wn780-b-ultrawide-monitor">
              LG 34 Ultrawide Ergonomic QHD Monitor
            </ExternalLink>
            - this monitor allows me to do more on a single screen with better
            cable management and ergonomic stand
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.ikea.com/gb/en/p/bekant-desk-sit-stand-white-s99061198/">
              Sit and Stand Desk
            </ExternalLink>
            - this IKEA desk is ideal for me because I cannot sit in one place
            for a long time
          </ListItem>
        </List>

        <Heading size="md" as="h2" pt={8}>
          Software 💻
        </Heading>

        <List spacing={4}>
          <ListItem fontSize="lg">
            <ExternalLink href="https://code.visualstudio.com/">
              Visual Studio Code
            </ExternalLink>
            - VS Code is my favorite IDE that I use for almost everything
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://developer.apple.com/xcode/">
              XCode
            </ExternalLink>
            - XCode is my number one iPhone simulator
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://figma.com/">Figma</ExternalLink>-
            powerful design tool that helps me to create anything related to
            UI/UX
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.sketch.com/">Sketch</ExternalLink>-
            this is my second favorite prototyping along with Adobe Xd
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.tableau.com/">Tableau</ExternalLink>
            - a tool that helps make Big Data small, and small data insightful
            and actionable
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.tableau.com/">
              Automation Anywhere
            </ExternalLink>
            - I have been using AA to create bots to take over boring tasks
          </ListItem>
        </List>

        <Heading size="md" as="h2" pt={8}>
          Camera {"&"} Drones 📷
        </Heading>
        <List spacing={4}>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/eos-dslr-and-mirrorless-cameras/dslr/eos-90d-body">
              Canon EOS 90D
            </ExternalLink>
            - This camera allows me to exercise my hobby when I am not coding
          </ListItem>
          <ListItem fontSize="lg">
            <ExternalLink href="https://www.dji.com/pl/air-2s?site=brandsite&from=nav">
              DJI Mavic Air 2S
            </ExternalLink>
            - Today, I am more focused on improving my drone skills with this
            beast
          </ListItem>
        </List>
      </VStack>
    </>
  );
};

export default UsesPage;
