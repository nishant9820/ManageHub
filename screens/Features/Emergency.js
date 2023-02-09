import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import call from "react-native-phone-call";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Emergency = () => {
  const [inputValue, setInputValue] = useState("112");
  const triggerCall = () => {
    const args = {
      number: inputValue,
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };
  const triggerCall1 = () => {
    const args = {
      number: "100",
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };
  const triggerCall2 = () => {
    const args = {
      number: "101",
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };
  const triggerCall3 = () => {
    const args = {
      number: "102",
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };
  const triggerCall4 = () => {
    const args = {
      number: "108",
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };
  const triggerCall5 = () => {
    const args = {
      number: "1091",
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };
  const triggerCall6 = () => {
    const args = {
      number: "181",
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };
  const triggerCall7 = () => {
    const args = {
      number: "9540161344",
      prompt: false,
      skipCanOpen: true,
    };
    call(args).catch(console.error);
  };

  return (
    <ScrollView Vertical showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: "center", marginTop: "5%" }}>
        <View
          style={{
            backgroundColor: "#fff",
            height: 80,
            width: "90%",
            borderRadius: 10,
            marginTop: "5%",
            alignItems: "center",
            elevation: 20,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#064F60",
              height: 50,
              width: 50,
              borderRadius: 50,
              marginLeft: 20,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="card-account-phone-outline"
              color={"#fff"}
              style={{ marginTop: 8 }}
              size={30}
            />
          </View>

          <Text
            style={{
              fontSize: 25,
              fontWeight: "600",
              color: "#064F60",
              marginLeft: 17,
            }}
          >
            Emergency No's
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={triggerCall}
            style={{
              height: 130,
              elevation: 7,
              backgroundColor: "#FFF",
              alignItems: "center",
              // marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 130,
            }}
          >
            <View style={{ marginTop: 26 }}>
              <MaterialCommunityIcons
                name="card-account-phone-outline"
                color={"#064F60"}
                size={34}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 13,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                National Emergency Number
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={triggerCall1}
            style={{
              height: 130,
              elevation: 7,
              backgroundColor: "#FFF",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 130,
            }}
          >
            <View style={{ marginTop: 26 }}>
              <MaterialCommunityIcons
                name="police-badge-outline"
                color={"#064F60"}
                size={38}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 13,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Police
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={triggerCall2}
            style={{
              height: 130,
              elevation: 7,
              backgroundColor: "#FFF",
              alignItems: "center",
              // marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 130,
            }}
          >
            <View style={{ marginTop: 26 }}>
              <Ionicons name="bonfire-outline" color={"#064F60"} size={38} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 13,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Fire
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={triggerCall3}
            style={{
              height: 130,
              elevation: 7,
              backgroundColor: "#FFF",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 130,
            }}
          >
            <View style={{ marginTop: 30 }}>
              <FontAwesome5 name="ambulance" color={"#064F60"} size={30} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 13,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Ambulance
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={triggerCall4}
            style={{
              height: 130,
              elevation: 7,
              backgroundColor: "#FFF",
              alignItems: "center",
              // marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 130,
            }}
          >
            <View style={{ marginTop: 26 }}>
              <AntDesign name="customerservice" color={"#064F60"} size={34} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 13,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Disaster Management Services
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={triggerCall5}
            style={{
              height: 130,
              elevation: 7,
              backgroundColor: "#FFF",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 130,
            }}
          >
            <View style={{ marginTop: 26 }}>
              <MaterialCommunityIcons
                name="human-female-girl"
                color={"#064F60"}
                size={34}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 13,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Women Helpline
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={triggerCall6}
            style={{
              height: 130,
              elevation: 7,
              backgroundColor: "#FFF",
              alignItems: "center",
              // marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 130,
            }}
          >
            <View style={{ marginTop: 26 }}>
              <MaterialCommunityIcons
                name="security"
                color={"#064F60"}
                size={34}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 13,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Women Helpline - ( Domestic Abuse )
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={triggerCall7}
            style={{
              height: 130,
              elevation: 7,
              backgroundColor: "#FFF",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 130,
            }}
          >
            <View style={{ marginTop: 26 }}>
              <Fontisto
                name="helicopter-ambulance"
                color={"#064F60"}
                size={38}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 13,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
                Air Ambulance
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 50 }}></View>
      </View>
    </ScrollView>
  );
};

export default Emergency;

const styles = StyleSheet.create({});
