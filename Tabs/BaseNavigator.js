import React from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Div,
  Settings,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import TrialScreen from "../screens/Main/TrialScreen";
import PostScreen from "../screens/Main/PostScreen";
import CommunityScreen from "../screens/Main/CommunityScreen";
import Setting from "../screens/Main/Setting";
import Services from "../screens/Main/Services";
import { acc } from "react-native-reanimated";

const BaseNavigator = () => {
  const navigation = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "home";
        break;
      case "title2":
        icon = "business";
        break;
      case "title3":
        icon = "bookmark";
        break;
      case "title4":
        icon = "settings-sharp";
        break;
    }

    return (
      <>
        <Ionicons
          name={icon}
          size={25}
          color={routeName === selectedTab ? "#064F60" : "#252525"}
        />
        {/* <MaterialIcons
          name={icon}
          size={25}
          color={routeName === selectedTab ? "green" : "#252525"}
        /> */}
      </>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          borderColor: "black",
          // elevation: 2,
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <NavigationContainer> */}
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        activeColor="#A3A5D2"
        strokeColor="#DDDDDD"
        height={65}
        lable={true}
        circleWidth={55}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View>
            <TouchableOpacity
              style={styles.btnCircle}
              // style={{
              //   flex: 1,
              //   justifyContent: "center",
              //   height: 600,
              // }}
              onPress={() => navigation.navigate("PostScreen")}
            >
              <Ionicons name={"apps-sharp"} color="black" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="title1"
          position="LEFT"
          options={{ headerShown: false }}
          component={TrialScreen}
        />
        <CurvedBottomBar.Screen
          name="title2"
          accessible={true}
          accessibilityLabel="Get more from ManageHub"
          position="LEFT"
          options={{
            headerShown: false,
          }}
          component={CommunityScreen}
        />
        <CurvedBottomBar.Screen
          name="title3"
          position="RIGHT"
          options={{
            headerShown: false,
          }}
          component={Services}
        />
        <CurvedBottomBar.Screen
          name="title4"
          component={Setting}
          position="RIGHT"
          options={{ headerShown: false }}
        />
      </CurvedBottomBar.Navigator>
      {/* </NavigationContainer> */}
    </View>
  );
};
export default BaseNavigator;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {
    position: "absolute",
    borderRadius: 20,
    elevation: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    // elevation: 5,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 0.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  img: {
    width: 30,
    height: 30,
  },
});
