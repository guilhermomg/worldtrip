import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, Tooltip } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries_count: number;
    languages_count: number;
    cities_count: number;
    cities100: {
      slug: string;
      name: string;
      country: string;
      flag: string;
      image: string;
    }[]
  }
}

export default function ContinentInfo({continent}: ContinentProps) {
  return (
    <Flex alignItems="center" justifyContent="space-between">
    <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        {continent.countries_count}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          países
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        {continent.languages_count}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>
        <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
        {continent.cities_count}
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
          cidades +100

          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px","16px"]} h={["10px","16px"]}/>
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700"/>
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">27 cidades da Europa estão entre as 100 mais visitadas do mundo!</PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  )
}