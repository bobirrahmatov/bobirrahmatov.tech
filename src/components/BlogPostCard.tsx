import Link from 'next/link';
import Image from 'next/image';
import {
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
  HStack,
  Stack,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react';
import dayjs from 'dayjs';

const BlogPostCard = 
  ({ title, date, slug, thumbnail, timeToRead } : any) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const bgColorHover = useColorModeValue('gray.200', 'gray.600');
  const textMode = useColorModeValue('black', 'white');

  return (
    <LinkBox as="article">
      <Stack
        direction={{ base: 'row', md: 'row' }}
        p={4}
        spacing={{ base: 8, md: 5 }}
        rounded="md"
        alignItems="center"
        transitionProperty="transform"
        transitionDuration="slow"
        transitionTimingFunction="ease-out"
        _hover={{
          transform: 'scale(1.025, 1.025)',
          backgroundColor: bgColorHover
        }}
      >
        {isMobile ? null : (
          <Image src={thumbnail} alt="React logo" width={32} height={32} />
        )}
        <VStack w="full" alignItems="stretch">
          {isMobile ? (
            <VStack justifyContent="space-between" alignItems="flex-start">
              <Link href={`/blog/${slug}`} passHref>
                <LinkOverlay>
                  <Text as="h2" fontSize="md" fontWeight="600" color={textMode}>
                    {title}
                  </Text>
                </LinkOverlay>
              </Link>
              <HStack
                justify="space-between"
                divider={
                  <Text color="gray.500" mx={2}>
                    •
                  </Text>
                }
              >
                <Text fontSize="sm" color={textMode}>
                  {dayjs(date).format('MMM D, YYYY')}
                </Text>
                <Text fontSize="sm" color={textMode}>
                  {timeToRead}
                </Text>
              </HStack>
            </VStack>
          ) : (
            <HStack justify="space-between">
              <Link href={`/blog/${slug}`} passHref>
                <LinkOverlay>
                  <Text as="h2" fontSize="lg" fontWeight="600" color={textMode}>
                    {title}
                  </Text>
                  <Text fontSize="sm" color={textMode}>
                    {timeToRead}
                  </Text>
                </LinkOverlay>
              </Link>
              <Text fontSize="sm" color={textMode}>
                {dayjs(date).format('MMM D, YYYY')}
              </Text>
            </HStack>
          )}
        </VStack>
      </Stack>
    </LinkBox>
  );
};

export default BlogPostCard;
