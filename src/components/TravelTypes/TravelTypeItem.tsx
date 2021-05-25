import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

interface TravelTypeItemProps {
  name: string;
  image: string;
}

export default function TravelTypeItem({ name, image }: TravelTypeItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex 
      direction={["row","column"]}
      align="center"
      justify="center"
      minW={{ base: "140px", lg: "0px" }}
    >
      { isWideVersion ?
        <Image src={image} minW="140px" /> :
        <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>
      }
      <Text fontWeight="600" lineHeight="36px">{name}</Text>
    </Flex>
  );
}