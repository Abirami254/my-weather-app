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
        <VStack space={"5"} safeArea pt={"2"}>
          <HStack mt={"5"} space={5} p={"4"}>
            <Image source={Back} alt="Back" size={"7"} mt={"2"} />
            <Text fontSize={"3xl"} color={"#fff"}>
              Search City
            </Text>
          </HStack>

          <HStack space={"4"} justifyContent={"center"} alignItems={"center"}>
            <Input w={"56"} placeholder="City Name" />
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
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
});

export default SearchPage;
