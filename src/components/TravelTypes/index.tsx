import { Flex, Image, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import TravelTypeItem from "./TravelTypeItem";

export default function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex 
      w="100%"
      mt={["20px", "120px"]}
      align="center"
      justify="space-around"
      flexWrap="wrap"
    >
      <TravelTypeItem name="vida noturna" image="/images/cocktail.svg" />
      <TravelTypeItem name="praia" image="/images/surf.svg" />
      <TravelTypeItem name="moderno" image="/images/building.svg" />
      <TravelTypeItem name="clássico" image="/images/museum.svg" />
      <TravelTypeItem name="e mais..." image="/images/earth.svg" />
    </Flex>
  );
}