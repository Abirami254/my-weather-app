import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../Home/Home";
import Weather from "../DailyWeather/DailyWeather";
import Search from "../SearchPage/SearchPage";

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Today Forecast" component={Home} />
      <Drawer.Screen name="Daily Forecast" component={Weather} />
      <Drawer.Screen name="Saved Locations" component={Search} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
