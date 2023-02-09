import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import BaseNavigator from "../../Tabs/BaseNavigator";
const PostScreen = () => {
  const actions = [
    {
      text: "Accessibility",
      // icon: require("./images/ic_accessibility_white.png"),
      name: "bt_accessibility",
      position: 2,
    },
    {
      text: "Language",
      // icon: require("./images/ic_language_white.png"),
      name: "bt_language",
      position: 1,
    },
    {
      text: "Location",
      // icon: require("./images/ic_room_white.png"),
      name: "bt_room",
      position: 3,
    },
    {
      text: "Video",
      // icon: require("./images/ic_videocam_white.png"),
      name: "bt_videocam",
      position: 4,
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          elevation: 10,
          height: 100,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ marginTop: "18%", flexDirection: "row" }}>
          <Text style={{ marginLeft: 20, fontSize: 17, fontWeight: "600" }}>
            Hi, Nishant Desai
          </Text>
          <Ionicons
            name="person-outline"
            color={"#000"}
            size={28}
            style={{ marginLeft: 160, marginTop: -6 }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          marginTop: "7%",
        }}
      >
        <View style={{ width: "70%" }}>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 17,
              color: "#000000",
            }}
          >
            Pre-Approve Entry
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: "#ble5d3",
              width: "100%",
              marginTop: -5,
            }}
          ></View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 140 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 105,
            elevation: 10,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 110,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Ionicons name="car-sport-outline" color={"#064F60"} size={30} />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 9,
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Cab
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 105,
            elevation: 10,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 110,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <MaterialIcons name="delivery-dining" color={"#064F60"} size={30} />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 9,
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Delivery
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 105,
            elevation: 10,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 110,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Ionicons name="person-outline" color={"#064F60"} size={30} />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 9,
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Guest
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 8,

              color: "#000000",
              paddingTop: 2,
              fontSize: 14,
            }}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 105,
            elevation: 10,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 110,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Octicons name="tools" color={"#064F60"} size={30} />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 7,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Visiting Help
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 17,
              color: "#000000",
            }}
          >
            Security
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: "#ble5d3",
              width: "100%",
              marginTop: -5,
            }}
          ></View>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 140 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 105,
            elevation: 10,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 110,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 15, alignItems: "center" }}>
            <Ionicons
              name="shield-checkmark-outline"
              color={"#064F60"}
              size={30}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 6,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Security Alert
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 8,

              color: "#000000",
              paddingTop: 2,
              fontSize: 14,
            }}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 105,
            elevation: 10,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 110,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 15, alignItems: "center" }}>
            <SimpleLineIcons
              name="envelope-letter"
              color={"#064F60"}
              size={30}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 7,
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Message
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 8,

              color: "#000000",
              paddingTop: 2,
              fontSize: 14,
            }}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 105,
            elevation: 10,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 110,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 15, alignItems: "center" }}>
            <MaterialCommunityIcons
              name="account-question-outline"
              color={"#064F60"}
              size={30}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 7,
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Allow Kid Exit
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 17,
              color: "#000000",
            }}
          >
            My Access
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: "#ble5d3",
              width: "100%",
              marginTop: -5,
            }}
          ></View>
        </View>
      </View>
      <View style={{ height: 600, marginLeft: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 105,
            elevation: 10,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 110,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 17, alignItems: "center" }}>
            <MaterialCommunityIcons
              name="message-alert-outline"
              color={"#064F60"}
              size={30}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 7,
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Request Visit Code
            </Text>
          </View>
          <Text
            style={{
              paddingHorizontal: 8,

              color: "#000000",
              paddingTop: 2,
              fontSize: 14,
            }}
          ></Text>
        </TouchableOpacity>
        {/* <View style={{ marginTop: 200, marginLeft: 200 }}>
          <FloatingAction
            color={"#fff"}
            iconColor="#064F60"
            actions={actions}
            onPressItem={(name) => {
              console.log(`selected button: ${name } `);
            }}
          />
        </View> */}
        <View>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={{ flexDirection: "row", marginTop: 90, marginLeft: 20 }}
          >
            <Entypo
              name="log-out"
              color={"#064F60"}
              size={46}
              style={{ marginTop: 12, marginLeft: 200 }}
            />
            <Text
              style={{
                color: "#064F60",
                fontSize: 30,
                marginTop: 25,
                marginLeft: 10,
                fontWeight: "400",
              }}
            >
              Back
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default PostScreen;
