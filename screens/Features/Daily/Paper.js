import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
const Paper = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 120,
          alignItems: "center",
          marginTop: 20,
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
            borderRadius: 20,
            elevation: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/Images/user.jpg")}
              style={{
                height: 75,
                width: 75,
                borderRadius: 40,
                marginLeft: 18,
                marginBottom: 10,
                // marginTop: -10,
              }}
            />
            <Text
              style={{
                color: "#064F60",
                fontSize: 24,
                marginLeft: 20,
                fontWeight: "600",
              }}
            >
              Yuvraj Achrekar
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#064F60"}
              size={24}
              style={{ marginTop: 3 }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 120,
          alignItems: "center",
          marginTop: 20,
          elevation: 10,
        }}
        onPress={() => navigation.navigate("Nishant")}
      >
        <View
          style={{
            backgroundColor: "#064F60",
            justifyContent: "center",
            height: "100%",
            width: "90%",
            borderRadius: 20,
            elevation: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/Images/user.jpg")}
              style={{
                height: 75,
                width: 75,
                borderRadius: 40,
                marginLeft: 18,
                marginBottom: 10,
                // marginTop: -10,
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 24,
                marginLeft: 20,
                fontWeight: "600",
              }}
            >
              Nishant Desai
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#fff"}
              size={24}
              style={{ marginTop: 3 }}
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 100 }}></View>
    </View>
  );
};

export default Paper;

const styles = StyleSheet.create({});
