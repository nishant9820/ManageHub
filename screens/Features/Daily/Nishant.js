import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import call from "react-native-phone-call";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";

import { Button } from "react-native-paper";
const Nishant = () => {
  const [inputValue, setInputValue] = useState("9326039154");
  const triggerCall = () => {
    const args = {
      number: inputValue,
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };

  return (
    <View>
      <View
        style={{
          height: 150,
          alignItems: "center",
          marginTop: "20%",
          elevation: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#ffff",
            justifyContent: "center",
            height: "100%",
            width: "90%",
            borderRadius: 10,
            elevation: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/Images/user.jpg")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginLeft: 18,
                marginTop: 10,
                marginBottom: 10,
                // marginTop: -10,
              }}
            />
            <View>
              <Text
                style={{
                  color: "#064F60",
                  fontSize: 24,
                  marginLeft: 20,
                  fontWeight: "600",
                }}
              >
                Nishant Desai
              </Text>
              <Text style={{ color: "lightgray", marginLeft: 20 }}>
                9326039154
              </Text>
              <TouchableOpacity
                activeOpacity={3}
                onPress={triggerCall}
                style={{ marginLeft: 10, marginTop: 20, width: 34 }}
              >
                <View>
                  <FontAwesome5
                    name="phone-square-alt"
                    color={"#064F60"}
                    size={34}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 250,
          alignItems: "center",
          marginTop: "5%",
          elevation: 10,
        }}
        onPress={() => navigation.navigate("Yuvraj")}
      >
        <View
          style={{
            backgroundColor: "#ffff",
            justifyContent: "center",
            height: "100%",
            width: "90%",
            borderRadius: 10,
            elevation: 10,
          }}
        ></View>
      </View>
    </View>
  );
};
export default Nishant;
