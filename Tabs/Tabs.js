import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import CommunityScreen from "../screens/Main/CommunityScreen";
import PostScreen from "../screens/Main/PostScreen";
import Services from "../screens/Main/Services";
import Neighbourhood from "../screens/Main/Setting";
import TrialScreen from "../screens/Main/TrialScreen";
import { StyleSheet, View } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Tabs"}
      activeColor="#A3A5D2"
      // height="100"
      screenOptions={{
        tabBarHideOnKeyboard: Platform.OS !== "android",
        tabBarActiveTintColor: "#fff",
        tabBarColor: "#fff",

        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 8,
          position: "absolute",
        },
        Style: {
          tabBarShowLabel: false,
          position: "absolute",
          bottom: 25,
          left: 30,
          right: 30,
          elevation: 0,
          // backgroundColor: "#16006d",
          borderRadius: 15,
          height: 0,
          backgroundColor: "#b3b3b3",
          borderTopColor: "transparent",
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="TrialScreen"
        component={TrialScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="home"
              color={focused ? "red" : "green"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-business-outline" color={"green"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          tabBarStyle: { height: 200 },
          tabBarLabel: "Additionals",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="add-circle-outline"
              color={"green"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Neighbourhood"
        component={Neighbourhood}
        options={{
          tabBarLabel: "Neighbour",
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" color={"green"} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: "Services",
          tabBarIcon: ({ color }) => (
            <Feather name="link" color={"green"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
// export default Tabs;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#ffe45d",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
