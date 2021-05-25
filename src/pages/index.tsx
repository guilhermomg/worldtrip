import { Box, Center, Divider, Flex, Image, Stack, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";

import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TravelTypes from "../components/TravelTypes";

interface HomeProps {
    continents:{
        id: number;
        name: string;
        summary: string;
        image: string;
    }[]
  }

export default function Home({ continents }: HomeProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <>
            <Header />

            <Flex
                w="100%"
                h={["163px", "335px"]}
                backgroundImage="url('/images/banner.svg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack ml={{ base: 4, lg: 40 }} mt={{ base: 4, lg: 0 }}>
                    <Text
                        color="gray.100"
                        fontSize={["20px", "36px"]}
                        fontWeight="500"
                        mb={4}
                    >
                        5 Continentes, <br /> 
                        Infinitas possibilidades.
                    </Text>
                    <Text 
                        color="gray.100"
                        fontSize={["14px", "20px"]}
                        fontWeight="400"
                        maxW="600px"
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Stack>

                { isWideVersion && 
                    <Image
                        src="/images/airplane.svg"
                        alt="airplane"
                        mr={40}
                        mb={-36}
                    />
                }
            </Flex>

            <TravelTypes />

            <Center mx={40} height={["72px", "100px"]}>
                <Divider orientation="horizontal" borderColor="#47585B" width="20" />
            </Center>

            <Center>
                <Text 
                    textAlign="center"
                    fontWeight="500"
                    fontSize={["20px", "36px"]}
                    lineHeight={["30px", "54px"]}
                >
                    Vamos nessa? <br />
                    Então escolha seu continente
                </Text>
            </Center>

            <Slider continents={continents} />
        </>
    )
}     

export const getStaticProps: GetStaticProps = async() => {

    const continents = [
        {
            id: 1,
            name: "Europa",
            summary: "asdasdsadd",
            image: "images/continents/europa/carousel-europa.svg",
        },
        {
            id: 2,
            name: "América do Sul",
            summary: "asdasdsadd",
            image: "images/continents/europa/carousel-europa.svg",
        },
    ]

    return {
       props: {
           continents
       }
   } 
}