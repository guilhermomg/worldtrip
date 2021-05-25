import Link from "next/link";

import {
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";

interface CarouselItemProps {
  id: number;
  name: string;
  summary: string;
  image: string;
}

export default function CarouselItem({ id, name, summary, image }: CarouselItemProps) {
  return (
    <Flex
      h="450px"
      justify="center"
      align="center"
      bgImage={`url('${image}')`}
    >
      <Link href={`/continent/${id}`} passHref>
        <ChakraLink color="transparent">
          <VStack spacing={4}>
            <Heading
              color="gray.50"
              _hover={{ color: "yellow.500" }}
              fontSize="3rem"
              fontWeight="bold"
            >
              {name}
            </Heading>
            <Text color="gray.100" fontSize="1.5rem" fontWeight="bold">
              {summary}
            </Text>
          </VStack>
        </ChakraLink>
      </Link>
    </Flex>
  );
}