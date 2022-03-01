import { Flex, Link, IconButton, useColorMode, Box } from "@chakra-ui/react";
import {
  FiInstagram,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiCoffee,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  const { colorMode } = useColorMode();
  const borderIcon = {
    light: "undefined",
    dark: "undefined",
  };
  const footerHoverBg = {
    light: "gray.400",
    dark: "gray.400",
  };
  const linkColor = {
    light: "undefined",
    dark: "white",
  };
  return (
    <Box color={linkColor[colorMode]} mt={8} >
      <Flex align="center" my={8} direction="column">
        <div>
          <Link
            href="https://www.instagram.com/bobirrahmatov.tech"
            title="Twitter"
            isExternal
          >
            <IconButton
              aria-label="Instagram"
              icon={<FiInstagram />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link
            href="https://twitter.com/bobirrahmatof"
            title="Twitter"
            isExternal
          >
            <IconButton
              aria-label="Twitter"
              icon={<FiTwitter />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link
            href="https://github.com/bobirrahmatov"
            title="GitHub"
            isExternal
          >
            <IconButton
              aria-label="GitHub"
              icon={<FiGithub />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bobir-bob-rahmatov-4187a2150/"
            title="LinkedIn"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FiLinkedin />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link
            href="https://www.buymeacoffee.com/bobirrahmatov"
            title="Buy me a coffee"
            isExternal
          >
            <IconButton
              aria-label="Coffee"
              icon={<FiCoffee />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
          <Link href="mailto:bobirrahmatof@gmail.com" title="Email" isExternal>
            <IconButton
              aria-label="Say hello"
              icon={<FiMail />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{ backgroundColor: footerHoverBg[colorMode] }}
            />
          </Link>
        </div>
      </Flex>
    </Box>
  );
};

export default Footer;
