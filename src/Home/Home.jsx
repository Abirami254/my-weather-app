import React from "react";
import { Box, HStack, Image, Text, VStack } from "native-base";
import { ImageBackground, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Menu from "../assets/Icons/menu_open.png";
import Load from "../assets/Icons/restart.png";
import Star from "../assets/Icons/grade.png";
import Search from "../assets/Icons/search.png";
import Temp from "../assets/Icons/img.png";
import Location from "../assets/Icons/location1.png";

import Humidity from "../assets/Icons/humidity.png";
import Wind from "../assets/Icons/wind.png";
import { navigation, navigationRef } from "../Navigator/navigator";

function Home() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const formattedTime = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  let backgroundImageSource;

  if (currentHour >= 6 && currentHour < 11) {
    backgroundImageSource = require("../assets/1.jpg");
  } else if (currentHour >= 11 && currentHour < 14) {
    backgroundImageSource = require("../assets/2.jpg");
  } else if (currentHour >= 14 && currentHour < 17) {
    backgroundImageSource = require("../assets/3.jpg");
  } else if (currentHour >= 17 && currentHour < 20) {
    backgroundImageSource = require("../assets/5.jpg");
  } else {
    backgroundImageSource = require("../assets/1.jpg");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImageSource}
        style={styles.backgroundImage}
      >
        <Box safeArea>
          <HStack justifyContent={"space-between"} padding={"2"}>
            <HStack space={"5"}>
              <Pressable
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Image source={Menu} alt="Menu" size={"7"} />
              </Pressable>
              <Image source={Load} alt="Load" size={"7"} />
            </HStack>
            <HStack space={"5"}>
              <Image source={Star} alt="Star" size={"7"} />
              <Image source={Search} alt="Search" size={"7"} />
            </HStack>
          </HStack>

          <Box justifyContent={"center"} alignItems={"center"}>
            <HStack space={"2"}>
              <Image source={Location} alt="Location" size={"7"} />
              <Text>City</Text>
            </HStack>
            <Box>
              <Text color={"#fff"}>{formattedTime}</Text>
            </Box>
            <Box justifyContent={"center"} alignItems={"center"}>
              <Text color={"#fff"} fontSize={"7xl"}>
                forcast
              </Text>
              <Text fontSize={"lg"}>Scattered</Text>
            </Box>
            <VStack space={"1/4"} margin={"3"}>
              <HStack
                justifyContent={"space-around"}
                background="coolGray.100"
                borderRadius={"xl"}
                padding={"3"}
                w={"80"}
              >
                <Box justifyContent={"center"} alignItems={"center"}>
                  <Image source={Temp} alt="Menu" size={"7"} />
                  <Text>Max Temp</Text>
                  <Text>Max Temp</Text>
                </Box>
                <Box justifyContent={"center"} alignItems={"center"}>
                  <Image source={Humidity} alt="Menu" size={"7"} />
                  <Text>Humidity</Text>
                  <Text>Max Temp</Text>
                </Box>
                <Box justifyContent={"center"} alignItems={"center"}>
                  <Image source={Wind} alt="Menu" size={"7"} />
                  <Text>Wind</Text>
                  <Text>Max Temp</Text>
                </Box>
              </HStack>

              <HStack
                justifyContent={"space-around"}
                background="coolGray.100"
                borderRadius={"xl"}
                padding={"3"}
                w={"80"}
              >
                <Box>
                  <Image source={Menu} alt="Menu" size={"7"} />
                  <Text>Max Temp</Text>
                  <Text>Max Temp</Text>
                </Box>
                <Box>
                  <Image source={Menu} alt="Menu" size={"7"} />
                  <Text>Humidity</Text>
                  <Text>Max Temp</Text>
                </Box>
                <Box>
                  <Image source={Menu} alt="Menu" size={"7"} />
                  <Text>Wind</Text>
                  <Text>Max Temp</Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // This makes the background image cover the entire screen
    resizeMode: "cover", // This ensures the image covers the entire container
  },
  container: {
    flex: 1,
  },
});
export default Home;
