import React from "react";
import { Box, HStack, Image, Text, VStack, Input } from "native-base";
import Menu from "../assets/Icons/sidebaropen.png";
import Search from "../assets/searchCity.jpg";
import { StyleSheet, View, ImageBackground } from "react-native";
import Back from "../assets/Icons/searchBack.png";
import SearchIcon from "../assets/Icons/search.png";

function SearchPage() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Search} style={styles.backgroundImage}>
        <VStack
          space={"5"}
          safeArea
          justifyContent={"center"}
          alignItems={"center"}
          pt={"2"}
        >
          <HStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mt={"5"}
            space={5}
          >
            <Box alignItems={"flex-start"}>
              <Image source={Back} alt="Back" size={"7"} />
            </Box>
            <Text fontSize={"3xl"} color={"#fff"}>
              Search City
            </Text>
          </HStack>

          <HStack space={"4"}>
            <Input
              w={"56"}
              onPressIn={(e) => {
                handleLocationPicker("location_data", e);
                handleLocationChange(e);
              }}
            />
            <Box backgroundColor={"blue.400"} borderRadius={"xl"} padding={"5"}>
              <Image source={SearchIcon} size={"7"} />
            </Box>
          </HStack>
        </VStack>
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

export default SearchPage;
