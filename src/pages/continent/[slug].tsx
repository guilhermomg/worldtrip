import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import CitiesList from "../../components/CitiesList";
import { useRouter } from "next/dist/client/router";
import ContinentInfo from "../../components/ContinentInfo";

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

export default function Continent({continent}: ContinentProps) {
  /*
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />
  }
  */

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - {continent.title}</title>
      </Head>

      <Header />
      
      <Flex
        w="100%"
        h={["150px","300px","500px"]}
        px={["0","0","36"]}
        pt={["0","0","72"]}
        bgImage={`url('${continent.banner_image}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center","center", "flex-start"]}
      >
        <Heading
          textAlign={["center","left"]}
          fontSize={["1.75rem","5xl"]}
          color="gray.100"
          fontWeight="500"
        >
          {continent.title}
        </Heading>
      </Flex>

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Grid templateColumns={["1fr","1fr","1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]}>
          <Text
            fontSize={["lg", "xl", "xl", "2xl"]}
            color="gray.700"
            textAlign="justify"
          >
            {continent.description}
          </Text>

          <ContinentInfo continent={continent} />
        </Grid>

        <CitiesList cities={continent.cities100} />
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/continent/europa'],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const continent = {
    slug,
    title: "Europa",
    description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    banner_image: "../images/continents/europa/banner-europa.svg",
    countries_count: 50,
    languages_count: 60,
    cities_count: 27,
    cities100: [
        {
            slug: "londres",
            name: "Londres",
            country: "Reino Unido",
            flag: "../images/continents/europa/londres/reino_unido.svg",
            image: "../images/continents/europa/londres/londres.svg",
        },
        {
            slug: "paris",
            name: "Paris",
            country: "França",
            flag: "../images/continents/europa/paris/franca.svg",
            image: "../images/continents/europa/paris/paris.svg",
        },
        {
            slug: "roma",
            name: "Roma",
            country: "Itália",
            flag: "../images/continents/europa/roma/italia.svg",
            image: "../images/continents/europa/roma/roma.svg",
        },
        {
            slug: "praga",
            name: "Praga",
            country: "República Tcheca",
            flag: "../images/continents/europa/praga/republica_tcheca.svg",
            image: "../images/continents/europa/praga/praga.svg",
        },
        {
            slug: "amsterda",
            name: "Amsterdã",
            country: "Países Baixos",
            flag: "../images/continents/europa/amsterda/paises_baixos.svg",
            image: "../images/continents/europa/amsterda/amsterda.svg",
        },
    ]
  };

  return {
    props: {
      continent
    },
    revalidate: 1800,
  }
}