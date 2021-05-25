import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import CarouselItem from "./CarouselItem";

import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

SwiperCore.use([Navigation, Pagination]);

interface CarouselItem {
  id: number;
  name: string;
  summary: string;
  image: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <Flex as="section" direction="column" w="100%" align="center">
      <Box h="450px" w="100%" maxW={1240} mx="auto" mb="4rem" my={20}>
        <Swiper slidesPerView={1} navigation pagination>
          {items?.map((item) => (
            <SwiperSlide key={item.id}>
              <CarouselItem 
                id={item.id}
                name={item.name}
                summary={item.summary}
                image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
}