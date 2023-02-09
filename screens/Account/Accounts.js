import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../Background";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
const Accounts = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <View style={{ marginLeft: 40, width: 400, marginTop: 20 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Accounts
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 360,
            marginTop: 30,
            marginLeft: -1,
            borderTopLeftRadius: 130,
            paddingTop: 200,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              marginLeft: 100,
              backgroundColor: "#064F60",
              height: 60,
              width: 230,
              marginTop: -60,
              flexDirection: "row",
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Ionicons
              name="person-outline"
              color={"#fff"}
              size={34}
              style={{ marginTop: 10, marginLeft: 10 }}
            />
            <Text
              style={{
                fontSize: 24,
                marginTop: 18,
                marginLeft: 10,
                fontWeight: "400",
                color: "#fff",
              }}
            >
              User
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login1")}
            style={{
              marginLeft: 100,
              backgroundColor: "#064F60",
              height: 60,
              width: 230,
              marginTop: 10,
              flexDirection: "row",
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Ionicons
              name="hammer-outline"
              color={"#fff"}
              size={34}
              style={{ marginTop: 12, marginLeft: 10 }}
            />
            <Text
              style={{
                fontSize: 24,
                marginTop: 18,
                marginLeft: 10,
                fontWeight: "400",
                color: "#fff",
              }}
            >
              Admin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login2")}
            style={{
              marginLeft: 100,
              backgroundColor: "#064F60",
              height: 60,
              width: 230,
              marginTop: 10,
              flexDirection: "row",
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }}
          >
            <Feather
              name="shield"
              color={"#fff"}
              size={34}
              style={{ marginTop: 12, marginLeft: 10 }}
            />
            <Text
              style={{
                fontSize: 24,
                marginTop: 18,
                marginLeft: 10,
                fontWeight: "400",
                color: "#fff",
              }}
            >
              Security
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={{ flexDirection: "row", marginTop: 200 }}
          >
            <Entypo
              name="log-out"
              color={"#064F60"}
              size={40}
              style={{ marginTop: 12, marginLeft: 200 }}
            />
            <Text
              style={{
                color: "#064F60",
                fontSize: 24,
                marginTop: 25,
                marginLeft: 10,
                fontWeight: "400",
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{flexDirection:'row',marginTop:1}}>
    <Ionicons name="chatbubble-outline" color={"#064F60'} size={40} style={{marginTop:12,marginLeft:200}} />
    <Text style={{color:"#064F60',fontSize:24,marginTop:25,marginLeft:10,fontWeight:'400'}}>Help</Text>
    </TouchableOpacity> */}
        </View>
      </View>
    </Background>
  );
};

export default Accounts;

const styles = StyleSheet.create({});
