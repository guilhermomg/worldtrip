import { Box, Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

export default function Home() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <>
            <Header />

            <Flex
                w="100%"
                h="335px"
                backgroundImage="url('/images/banner.svg')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack ml={40}>
                    <Text
                        color="gray.100"
                        fontSize={["20px", "36px"]}
                        fontWeight="500"
                        mb="4"
                    >
                        5 Continentes, <br /> 
                        Infinitas possibilidades.
                    </Text>
                    <Text 
                        color="gray.100"
                        fontSize={["14px", "20px"]}
                        fontWeight="400"
                    >
                        Chegou a hora de tirar do papel a viagem que você <br /> 
                        sempre sonhou.
                    </Text>
                </Stack>

                { isWideVersion && 
                    <Image
                        src="/images/airplane.svg"
                        alt="airplane"
                        position="absolute"
                        right={40}
                        bottom="-10"
                    />
                }
            </Flex>
        </>
    )
}     