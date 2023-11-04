import React, { useState, useEffect } from "react";
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
import Cloud from "../assets/Icons/cloud.png";
import { navigation } from "../Navigator/navigator";
import { useFocusEffect } from "@react-navigation/native";
import * as ExpoLocation from "expo-location";

function Home() {
  const [city, setCity] = useState(null);

  const getLocationAsync = async () => {
    let { status } = await ExpoLocation.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    try {
      let location = await ExpoLocation.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      getCityName(latitude, longitude);
    } catch (error) {
      console.error("Error getting current location:", error);
    }
  };
  const getCityName = async (latitude, longitude) => {
    try {
      const location = await ExpoLocation.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      if (location.length > 0) {
        const city = location[0].city;
        setCity(city); // Set the city state variable with the obtained city name
        console.log(`City: ${city}`);
      } else {
        console.error("City name not found for the provided coordinates");
      }
    } catch (error) {
      console.error("Error getting city name:", error);
    }
  };
  useEffect(() => {
    getLocationAsync();
  }, []);
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
  } else if (currentHour >= 17 && currentHour < 19) {
    backgroundImageSource = require("../assets/5.jpg");
  } else {
    backgroundImageSource = require("../assets/4.jpg");
  }
  const getFunction = async () => {
    try {
      const responseJSON = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=32b5f8c71bc551e143ea2ddc9049d1de`
      );
      if (responseJSON.ok) {
        const response = await responseJSON.json();
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getFunction();
    }, [])
  );
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
              <Text>
                {city ? (
                  <Text color={"#fff"} fontSize={"xl"}>
                    {city}
                  </Text>
                ) : (
                  <Text>location...</Text>
                )}
              </Text>
            </HStack>
            <Box>
              <Text color={"#fff"}>{formattedTime}</Text>
            </Box>
            <Box justifyContent={"center"} alignItems={"center"}>
              <Text color={"#fff"} fontSize={"7xl"}>
                forcast
              </Text>
              <Text fontSize={"2xl"} color={"#fff"}>
                Scattered
              </Text>
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
                  <Image source={Temp} alt="Temp" size={"7"} />
                  <Text>Max Temp</Text>
                  <Text>28°C</Text>
                </Box>
                <Box justifyContent={"center"} alignItems={"center"}>
                  <Image source={Humidity} alt="Humidity" size={"7"} />
                  <Text>Humidity</Text>
                  <Text>67%</Text>
                </Box>
                <Box justifyContent={"center"} alignItems={"center"}>
                  <Image source={Wind} alt="Menu" size={"7"} />
                  <Text>Wind</Text>
                  <Text>2.51 m/s</Text>
                </Box>
              </HStack>

              <HStack
                justifyContent={"space-around"}
                background="coolGray.100"
                borderRadius={"xl"}
                padding={"3"}
                w={"80"}
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
