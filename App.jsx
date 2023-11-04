import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
// import Home from "./src/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/Navigator/DrawerNavigator";
const theme = extendTheme({
  // Your theme configuration
});
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <DrawerNavigator />
        {/* <Home /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
