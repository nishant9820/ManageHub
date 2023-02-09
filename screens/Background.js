import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/Images/c.jpg")}
        style={{
          height: "100%",
          // backgroundColor: "#064F60"
        }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({});
