import { Flex, Icon, Link, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Header() {
    const { asPath, back } = useRouter();

    return (
        <Flex
        as="header"
        w="100%"
        mx="auto"
        alignItems="center"
        justifyContent="center"
        px="6"
        h={["50px", "100px"]}>

            {asPath !== "/" && 
                <Icon
                    as={RiArrowLeftSLine}
                    position="absolute"
                    top={["17px", "30px"]}
                    left={["16px", "16px", "140px"]}
                    w={["16px", "32px"]}
                    h={["16px", "32px"]}
                    cursor="pointer"
                    onClick={() => back()}
                />
            }

            <Link href="/">
                <Image 
                    src="/images/logo.svg"
                    alt="WorldTrip"
                    w={[81, "184.06px"]}
                    h={[20, "45.92px"]}
                />
            </Link>
      </Flex>
    );
}