import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Background from "../Background";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
const Daily = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <View style={{ width: 360, justifyContent: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 34,
              fontWeight: "bold",
              marginTop: 50,
              // marginLeft: "3.5%",
            }}
          >
            Daily Help
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: 700,
            width: 360,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: "7%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Maid")}
            style={{
              // borderColor: "lightgray",

              // borderBottomWidth: 0.5,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "5%",
              marginTop: "8%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#064F60",
                fontWeight: "600",
                marginLeft: "3%",
                // fontFamily: "",
              }}
            >
              Maid
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "200",
                color: "lightgray",
                paddingLeft: 205,
              }}
            >
              173
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#D3D3D3"}
              size={25}
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Driver")}
            style={{
              // borderBottomColor: "lightgray",

              // borderBottomWidth: 0.5,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "5%",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#064F60",
                fontWeight: "600",
                marginLeft: "3%",
                // fontFamily: "",
              }}
            >
              Driver
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "200",
                color: "lightgray",
                paddingLeft: 192,
              }}
            >
              29
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#D3D3D3"}
              size={25}
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Milk Man")}
            style={{
              // borderBottomColor: "lightgray",

              // borderBottomWidth: 0.5,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "5%",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#064F60",
                fontWeight: "600",
                marginLeft: "3%",
                // fontFamily: "",
              }}
            >
              MilKman
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "200",
                color: "lightgray",
                paddingLeft: 155,
              }}
            >
              23
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#D3D3D3"}
              size={25}
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Paper Boy")}
            style={{
              // borderBottomColor: "lightgray",

              // borderBottomWidth: 0.5,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "5%",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#064F60",
                fontWeight: "600",
                marginLeft: "3%",
                // fontFamily: "",
              }}
            >
              PaperBoy
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "200",
                color: "lightgray",
                paddingLeft: 152,
              }}
            >
              2
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#D3D3D3"}
              size={25}
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // borderBottomColor: "lightgray",

              // borderBottomWidth: 0.5,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "5%",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#064F60",
                fontWeight: "600",
                marginLeft: "3%",
                // fontFamily: "",
              }}
            >
              Car Cleaner
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "200",
                color: "lightgray",
                paddingLeft: 122,
              }}
            >
              8
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#D3D3D3"}
              size={25}
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // borderBottomColor: "lightgray",

              // borderBottomWidth: 0.5,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "5%",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#064F60",
                fontWeight: "600",
                marginLeft: "3%",
                // fontFamily: "",
              }}
            >
              Tuition Teacher
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "200",
                color: "lightgray",
                paddingLeft: 75,
              }}
            >
              2
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#D3D3D3"}
              size={25}
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // borderBottomColor: "lightgray",

              // borderBottomWidth: 0.5,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "5%",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#064F60",
                fontWeight: "600",
                marginLeft: "3%",
                // fontFamily: "",
              }}
            >
              Gym Instructor
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "200",
                color: "lightgray",
                paddingLeft: 78,
              }}
            >
              2
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#D3D3D3"}
              size={25}
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // borderBottomColor: "lightgray",

              // borderBottomWidth: 0.5,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "5%",
              marginTop: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#064F60",
                fontWeight: "600",
                marginLeft: "3%",
                // fontFamily: "",
              }}
            >
              Grocery Shop
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "200",
                color: "lightgray",
                paddingLeft: 92,
              }}
            >
              2
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              color={"#D3D3D3"}
              size={25}
              style={{}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Daily;

const styles = StyleSheet.create({});
