import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Search2 from "../../../components/Search2";
import { useNavigation } from "@react-navigation/core";
import Ionicons from "react-native-vector-icons/Ionicons";
const Means = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={{ backgroundColor: "#fff", marginTop: "25%" }}>
        <Search2 />
        <View style={styles.card}>
          <View style={styles.Yellow}>
            {/* <Image
              source={require("../../assets/Images/Selfi.png")}
              style={{ marginTop: -20, width: 280, height: 200 }}
            /> */}
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="person-outline" color={"#064F60"} size={64} />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 6,
                  marginLeft: 8,
                }}
              >
                <Text style={{ fontSize: 18 }}>Register Residents</Text>
                <Text
                  style={{
                    fontSize: 12,
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: 5,
                  }}
                >
                  Create Residents ID Within Minutes {"\n"}and Add Credentials .
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                alignItems: "center",
                marginTop: 20,
                height: 45,
                justifyContent: "center",
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderRadius: 30,
                elevation: 100,
                backgroundColor: "#064F60",
              }}
              onPress={() => navigation.navigate("Admin")}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Entypo name="plus" color={"#fff"} size={24} style={{}} />
                <Text style={{ fontSize: 15, color: "#fff", marginTop: 3 }}>
                  Register
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card1}>
          <View style={styles.Yellow}>
            {/* <Image
              source={require("../../assets/Images/Selfi.png")}
              style={{ marginTop: -20, width: 280, height: 200 }}
            /> */}
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="shield-checkmark-outline"
                color={"#064F60"}
                size={64}
                style={{ marginTop: 5 }}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 6,
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 18 }}>Register Security</Text>
                <Text
                  style={{
                    fontSize: 12,
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: 5,
                  }}
                >
                  Create Security ID Within Minutes {"\n"}and Add Details .
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                alignItems: "center",
                marginTop: 20,
                height: 45,
                justifyContent: "center",
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderRadius: 30,
                elevation: 100,
                backgroundColor: "#064F60",
              }}
              onPress={() => navigation.navigate("Admin")}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Entypo name="plus" color={"#fff"} size={24} style={{}} />
                <Text style={{ fontSize: 15, color: "#fff", marginTop: 2 }}>
                  Register
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 15,
                color: "#000000",
              }}
            >
              Features
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: "#ble5d3",
                width: 115,
                marginTop: -5,
              }}
            ></View>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={{
                backgroundColor: "#064F60",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
                // marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: '"bold"',
                  fontSize: 13,
                  color: "#FFF",
                }}
              >
                More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} b>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("Daily")}
            style={{
              height: 200,
              elevation: 3,
              borderColor: "gray",
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/Images/car.png")}
              style={{
                borderRadius: 15,
                marginTop: 5,
                width: 130,
                height: 160,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 2,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Parking
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Daily")}
            style={{
              height: 200,
              elevation: 3,
              borderColor: "gray",
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/Images/car.png")}
              style={{
                borderRadius: 15,
                marginTop: 5,
                width: 140,
                height: 160,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 2,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Daily Help
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Daily")}
            style={{
              height: 200,
              elevation: 3,
              borderColor: "gray",
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/Images/r.png")}
              style={{
                borderRadius: 15,
                marginTop: 5,
                width: 140,
                height: 160,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 2,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Daily Help
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Daily")}
            style={{
              height: 200,
              elevation: 3,
              borderColor: "gray",
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
              marginRight: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/Images/r.png")}
              style={{
                borderRadius: 15,
                marginTop: 5,
                width: 140,
                height: 160,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 2,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Daily Help
              </Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{
              height: 105,
              elevation: 3,
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
                Parking
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{
              height: 105,
              elevation: 3,
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
              elevation: 3,
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
              elevation: 3,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 110,
              alignItems: "center",
              marginRight: 20,
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
        </ScrollView>
        <View style={{ height: 100 }}></View>
      </View>
    </View>
  );
};

export default Means;

const styles = StyleSheet.create({
  card: {
    height: 170,
    alignItems: "center",
    marginTop: 35,
    backgroundColor: "#fff",
  },
  card1: {
    height: 170,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#fff",
  },
  Yellow: {
    backgroundColor: "#fbedcd",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "90%",
    borderRadius: 20,
    elevation: 5,
  },
});
