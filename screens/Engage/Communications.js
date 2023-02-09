import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";
import React from "react";

const Communications = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://chat.whatsapp.com/KME4KA33Q612qcu1giJXOC");
        }}
        style={{
          backgroundColor: "#000100",
          justifyContent: "center",
          height: 100,
          width: "90%",
          alignItems: "center",
          borderRadius: 20,
          elevation: 10,
          marginTop: "45%",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/Images/w.png")}
          style={{ width: 90, height: 90 }}
        />
        <Text style={{ color: "#fff", fontSize: 20 }}>Whatsapp Group</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://t.me/+kXJjGTR_jiA2ZGE1");
        }}
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          height: 100,
          width: "90%",
          alignItems: "center",
          borderRadius: 20,
          elevation: 10,
          marginTop: "5%",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/Images/t.png")}
          style={{ width: 70, height: 70 }}
        />
        <Text style={{ color: "#000100", fontSize: 20, marginLeft: 10 }}>
          Telegram Group
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("https://wa.me/8291589029");
        }}
        style={{
          backgroundColor: "#000100",
          justifyContent: "center",
          height: 100,
          width: "90%",
          alignItems: "center",
          borderRadius: 20,
          elevation: 10,
          marginTop: "5%",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/Images/w.png")}
          style={{ width: 90, height: 90 }}
        />
        <Text style={{ color: "#fff", fontSize: 20 }}>Admin Whatsapp </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Communications;

const styles = StyleSheet.create({});
