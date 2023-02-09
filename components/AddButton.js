import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const AddButton = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: "absolute",
        alignSelf: "center",
        backgroundColor: "grey",
        width: 70,
        height: 70,
        borderRadius: 35,
        bottom: 35,
        zIndex: 10,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("PostScreen")}
      >
        <View style={[styles.button, styles.actionBtn]}>
          {/* <Image style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                                source={{ uri: 'https://icon-library.net/images/android-plus-icon/android-plus-icon-0.jpg' }} /> */}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AddButton;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    backgroundColor: "#1E90FF",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
