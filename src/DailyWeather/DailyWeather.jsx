import React from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";
import Menu from "../assets/Icons/sidebaropen.png";
import Cal from "../assets/Icons/img_1.png";
import Back from "../assets/Icons/weatherBack.png";
import Search from "../assets/Icons/search.png";

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
        <Text fontSize={"3xl"}> DailyWeather </Text>
      </HStack>
      <VStack space={"1/4"} margin={"3"}>
        <HStack
          justifyContent={"space-around"}
          background="coolGray.100"
          borderRadius={"xl"}
          padding={"3"}
          w={"80"}
          shadow={"9"}
        >
          <Box justifyContent={"center"} alignItems={"center"}>
            <Text>Max Temp</Text>
            <HStack space={"2"}>
              <Image source={Search} alt="Search" size={"7"} />
              <Text>Temp</Text>
            </HStack>
          </Box>
          <Box justifyContent={"center"} alignItems={"center"}>
            <HStack space={"2"}>
              <Text>Temp</Text>
              <Image source={Cal} alt="Menu" size={"7"} />
            </HStack>
            <Text>Max Temp</Text>
          </Box>
          <HStack justifyContent={"center"} alignItems={"center"}>
            <Image source={Cal} alt="Menu" size={"7"} />
            <VStack>
              <Text>Wind</Text>
              <Text>Max Temp</Text>
            </VStack>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}

export default DailyWeather;
