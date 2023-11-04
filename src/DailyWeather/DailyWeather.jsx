import React from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";
import Menu from "../assets/Icons/sidebaropen.png";
import Cal from "../assets/Icons/img_1.png";
import Back from "../assets/Icons/weatherBack.png";
import Search from "../assets/Icons/search.png";
import Sunrise from "../assets/Icons/sunrise.png";
import Sunset from "../assets/Icons/sunset.png";
import Cloud from "../assets/Icons/cloud.png";

function DailyWeather() {
  return (
    <Box backgroundColor={"white"} safeArea width={"100%"} height={"100%"}>
      <HStack
        justifyContent={"space-around"}
        alignItems={"center"}
        mt={"5"}
        w={"80%"}
      >
        <Image source={Back} alt="back" size={"7"} />
        <Text fontSize={"3xl"}>Today Weather Forecast </Text>
      </HStack>
      <Box justifyContent={"center"} alignItems={"center"}>
        <HStack
          justifyContent={"space-around"}
          alignItems={"center"}
          background="white"
          borderRadius={"xl"}
          padding={"3"}
          w={"80"}
          shadow={"9"}
        >
          <Box justifyContent={"center"} alignItems={"center"}>
            <VStack space={"2"}>
              <Image source={Sunrise} alt="Sunrise" size={"10"} />
              <Text>6.23 AM</Text>
              <Text color={"orange.500"}>Sunrise</Text>
            </VStack>
          </Box>
          <Box justifyContent={"center"} alignItems={"center"}>
            <VStack space={"2"}>
              <Image source={Sunset} alt="Sunset" size={"10"} />
              <Text>6.10 PM</Text>
              <Text color={"red.500"}>Sunset</Text>
            </VStack>
          </Box>
        </HStack>
      </Box>
      <Box justifyContent={"center"} alignItems={"center"} mt={"3"}>
        <HStack
          justifyContent={"space-around"}
          background="white"
          borderRadius={"xl"}
          padding={"3"}
          w={"80"}
          shadow={"9"}
          alignItems={"center"}
        >
          <Box w={"1/3"} p="2">
            <Text>28.86°C</Text>
            <Text fontSize={"sm"}>Scattered Clouds</Text>
            <Image source={Cloud} alt="Cloud" size={"7"} />
            <Text>11.30 AM</Text>
          </Box>
          <Box w={"1/3"} p="2">
            <Text>28.86°C</Text>
            <Text fontSize={"sm"}>Scattered Clouds</Text>
            <Image source={Cloud} alt="Cloud" size={"7"} />
            <Text>12.30 PM</Text>
          </Box>
          <Box w={"1/3"} p="2">
            <Text>28.86°C</Text>
            <Text fontSize={"sm"}>Scattered Clouds</Text>
            <Image source={Cloud} alt="Cloud" size={"7"} />
            <Text>1.30 PM</Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}

export default DailyWeather;
