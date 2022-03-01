import {
  Link,
  LinkProps,
  Icon,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
  return (
    <span>
      <Link
        {...linkProps}
        color={mode("blue.500", "blue.400")}
        display="inline-flex"
        alignItems="center"
        isExternal
        target="_blank"
      >
        {children}
      </Link>
    </span>
  );
};

export default ExternalLink;
