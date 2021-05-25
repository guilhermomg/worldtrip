import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

interface City {
  slug: string;
  name: string;
  country: string;
  flag: string;
  image: string;
}

interface CitiesListProps {
  cities: City[];
}

export default function CitiesList({ cities }: CitiesListProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>
        {cities.map(city => (
          <City
            key={city.slug}
            name={city.name}
            country={city.country}
            flag={city.flag}
            image={city.image}
          />
        ))}
      </Grid>
    </>
  )
 }