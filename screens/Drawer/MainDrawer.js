import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../components/CoustomDrawer";
const Drawer = createDrawerNavigator();
import React, { Component } from "react";
import Profile from "../Drawer/Profile";
import HomeScreen from "../HomeScreen";
import Notice from "../Engage/Notice";
import Onboarding from "../Onboarding";
import "react-native-gesture-handler";

const MainDrawer = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? "permanent" : "back",
      }}
      drawerContent={(props) => {
        setTimeout(() => {
          setProgress(props.progress);
        }, 0);
        return <CustomDrawer {...props} />;
      }}
      initialRouteName="Onboarding"
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Notice"
        component={Notice}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Moments"
        component={Moments}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
