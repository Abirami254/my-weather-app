import * as React from "react";
import { DrawerActions } from "@react-navigation/native";
export const navigationRef = React.createRef();

function navigate(name, params) {
  console.log(navigationRef?.current?.getCurrentRoute);
  navigationRef?.current?.navigate(name, params);
}
function openDrawer() {
  navigationRef?.current?.dispatch(DrawerActions.openDrawer());
}
function closeDrawer() {
  navigationRef?.current?.dispatch(DrawerActions.openDrawer());
}
function goBack() {
  navigationRef?.current?.goBack();
}
function push() {
  navigationRef?.current?.push();
}

export const navigation = {
  navigate,
  openDrawer,
  closeDrawer,
  goBack,
  push,
};
