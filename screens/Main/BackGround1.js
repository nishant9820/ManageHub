import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const BackGround1 = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/Images/leaves.jpg")}
        style={{ height: "60%" }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};

export default BackGround1;

const styles = StyleSheet.create({});
