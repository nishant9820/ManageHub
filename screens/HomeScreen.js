import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tabs from "../Tabs/Tabs.js";
import BaseNavigator from "../Tabs/BaseNavigator.js";
export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {/* <Tabs /> */}
      {/* {!searchBarFocused && <BaseNavigator />} */}
      <BaseNavigator />
    </View>
  );
}
