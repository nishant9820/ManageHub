import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
const Services = () => {
  const navigation = useNavigation();
  return (
    <ScrollView Vertical showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          flex: 1,
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
        <View
          style={{
            backgroundColor: "#fbedcd",
            height: 230,
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text style={{ marginLeft: 10, fontWeight: "600", fontSize: 17 }}>
              Unlock the power of your{"\n"}
              <Text style={{ marginLeft: -10 }}>Community!</Text>
            </Text>
            <Image
              style={{
                paddingLeft: 130,
                marginTop: -10,
                width: 60,
                height: 60,
              }}
              source={require("../../assets/Images/chils.png")}
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ height: 140 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("")}
              style={{
                height: 90,
                elevation: 10,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 10,
                marginBottom: 10,
                width: 90,
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: 20, alignItems: "center" }}>
                <Ionicons
                  name="car-sport-outline"
                  color={"#064F60"}
                  size={30}
                />
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
                    fontSize: 10,
                  }}
                >
                  Cab
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("")}
              style={{
                height: 90,
                elevation: 10,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 10,
                marginBottom: 10,
                width: 90,
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: 20, alignItems: "center" }}>
                <Ionicons
                  name="car-sport-outline"
                  color={"#064F60"}
                  size={30}
                />
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
                    fontSize: 10,
                  }}
                >
                  Cab
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("")}
              style={{
                height: 90,
                elevation: 10,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 10,
                marginBottom: 10,
                width: 90,
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: 20, alignItems: "center" }}>
                <Ionicons
                  name="car-sport-outline"
                  color={"#064F60"}
                  size={30}
                />
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
                    fontSize: 10,
                  }}
                >
                  Cab
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("")}
              style={{
                height: 90,
                elevation: 10,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 10,
                marginBottom: 10,
                width: 90,
                alignItems: "center",
              }}
            >
              <View style={{ marginTop: 20, alignItems: "center" }}>
                <Ionicons
                  name="car-sport-outline"
                  color={"#064F60"}
                  size={30}
                />
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
                    fontSize: 10,
                  }}
                >
                  Cab
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
                fontWeight: "400",
                fontSize: 15,
                color: "#000000",
              }}
            >
              Homes
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 150,
            alignItems: "center",
            marginTop: 20,
            // elevation: 10,
          }}
          onPress={() => navigation.navigate("Notice")}
        >
          <View
            accessible={true}
            accessibilityLabel="   Notice"
            accessibilityHint="Access all important announcements"
            style={{
              backgroundColor: "#98AFC7",
              justifyContent: "center",
              height: "100%",
              width: "95%",
              borderRadius: 10,
              // elevation: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 20, flex: 50 }}>
              <Text style={{ marginLeft: 20, fontWeight: "600", fontSize: 20 }}>
                Find your new{"\n"}
                <Text style={{ marginLeft: -10 }}>home</Text>
                {"\n"}
                <Text
                  style={{ marginLeft: -10, fontWeight: "300", fontSize: 12 }}
                >
                  Find your next dream home
                </Text>
                {"\n"}
                <Text
                  style={{ marginLeft: -10, fontWeight: "300", fontSize: 12 }}
                >
                  with a swipe to ManageHUb Homes
                </Text>
              </Text>
              <Image
                style={{
                  marginLeft: 20,
                  marginTop: -20,
                  width: 110,
                  height: 150,
                }}
                source={require("../../assets/Images/Unlock.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
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
                fontWeight: "400",
                fontSize: 15,
                color: "#000000",
              }}
            >
              Neighbour offerings
            </Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <TouchableOpacity
            accessible={true}
            // accessibilityLabel="Residents"
            // accessibilityHint="  View Society Resisdents & Management Commitee"
            onPress={() => navigation.navigate("Residents")}
            style={{
              height: 140,
              // elevation: 7,
              backgroundColor: "#C4A484",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  paddingTop: 15,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 20,
                  }}
                >
                  Food
                </Text>
                <Text
                  style={{
                    // paddingHorizontal: 8,

                    color: "#000000",
                    paddingTop: 2,
                    fontSize: 10,
                  }}
                >
                  Homecooked{"\n"}
                  <Text>food by your</Text>
                  {"\n"}
                  <Text>neighbours</Text>
                </Text>
              </View>
              <Image
                style={{
                  marginLeft: -25,
                  marginTop: 20,
                  width: 80,
                  height: 120,
                }}
                source={require("../../assets/Images/ice.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Residents"
            accessibilityHint="  View Society Resisdents & Management Commitee"
            onPress={() => navigation.navigate("Residents")}
            style={{
              height: 140,
              // elevation: 7,
              backgroundColor: "#fbedcd",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  paddingTop: 15,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 20,
                  }}
                >
                  Services
                </Text>
                <Text
                  style={{
                    // paddingHorizontal: 8,

                    color: "#000000",
                    paddingTop: 2,
                    fontSize: 10,
                  }}
                >
                  Service{"\n"}
                  <Text>offering from</Text>
                  {"\n"}
                  <Text>your Society</Text>
                </Text>
              </View>
              <Image
                style={{
                  marginLeft: -45,
                  marginTop: 30,
                  width: 80,
                  height: 110,
                }}
                source={require("../../assets/Images/ballon.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
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
                fontWeight: "400",
                fontSize: 15,
                color: "#000000",
              }}
            >
              Community finds
            </Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          pagingEnabled
          bounces={false}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 150,
              alignItems: "center",
              marginTop: 15,
              marginLeft: 22,
              marginRight: 4,
              // elevation: 10,
            }}
            onPress={() => navigation.navigate("Notice")}
          >
            <View
              accessible={true}
              accessibilityLabel="   Notice"
              accessibilityHint="Access all important announcements"
              style={{
                backgroundColor: "#fbedcd",
                justifyContent: "center",
                height: "100%",
                width: "95%",
                borderRadius: 10,
                // elevation: 10,
              }}
            >
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ marginLeft: 10, marginTop: 0 }}>
                  <Text
                    style={{ marginLeft: 20, fontWeight: "600", fontSize: 20 }}
                  >
                    Buy & Sell{"\n"}
                  </Text>
                  <Text
                    style={{
                      marginLeft: -10,
                      fontWeight: "300",
                      fontSize: 12,
                    }}
                  >
                    Find amazing stuff at affordable
                  </Text>
                  {"\n"}
                  <Text
                    style={{
                      marginLeft: -10,
                      marginTop: 0,
                      fontWeight: "300",
                      fontSize: 12,
                    }}
                  >
                    prices from verified ManageHUb
                  </Text>
                  {"\n"}
                  <Text
                    style={{
                      marginLeft: -10,
                      fontWeight: "300",
                      fontSize: 12,
                    }}
                  >
                    users
                  </Text>
                </Text>
                <Image
                  style={{
                    marginLeft: -65,
                    marginTop: 30,
                    width: 180,
                    height: 100,
                  }}
                  source={require("../../assets/Images/Relaxing.png")}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 150,
              alignItems: "center",
              marginTop: 15,
            }}
            onPress={() => navigation.navigate("Notice")}
          >
            <View
              accessible={true}
              accessibilityLabel="   Notice"
              accessibilityHint="Access all important announcements"
              style={{
                backgroundColor: "#fbedcd",
                justifyContent: "center",
                height: "100%",
                width: "95%",
                borderRadius: 10,
                // elevation: 10,
              }}
            >
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{ marginLeft: 20, flexDirection: "column" }}>
                  <Text
                    style={{ marginLeft: 20, fontWeight: "600", fontSize: 20 }}
                  >
                    Declutter and{"\n"}donate to as {"\n"}cause
                  </Text>
                  {"\n"}
                  <Text
                    style={{
                      marginLeft: -10,
                      fontWeight: "300",
                      fontSize: 12,
                    }}
                  >
                    Give away stuff you don't use &
                  </Text>
                  {"\n"}
                  <Text
                    style={{
                      marginLeft: -10,
                      marginTop: 0,
                      fontWeight: "300",
                      fontSize: 12,
                    }}
                  >
                    bring a smile to someone's face
                  </Text>
                </Text>
                <Image
                  style={{
                    marginLeft: -35,
                    marginTop: -10,
                    width: 140,
                    height: 150,
                  }}
                  source={require("../../assets/Images/Music.png")}
                />
              </View>
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
                fontWeight: "400",
                fontSize: 15,
                color: "#000000",
              }}
            >
              Community finds
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 150,
            alignItems: "center",
            marginTop: 15,
          }}
          onPress={() => navigation.navigate("Notice")}
        >
          <View
            accessible={true}
            accessibilityLabel="   Notice"
            accessibilityHint="Access all important announcements"
            style={{
              backgroundColor: "#FFB6C1",
              justifyContent: "center",
              height: "100%",
              width: "95%",
              borderRadius: 10,
              // elevation: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={{ marginLeft: 20, flexDirection: "column" }}>
                <Text
                  style={{ marginLeft: 20, fontWeight: "600", fontSize: 20 }}
                >
                  Find local{"\n"}contacts
                </Text>
                {"\n"}
                <Text
                  style={{
                    marginLeft: -10,
                    fontWeight: "300",
                    fontSize: 12,
                  }}
                >
                  A neighbourhood directory
                </Text>
                {"\n"}
                <Text
                  style={{
                    marginLeft: -10,
                    marginTop: 0,
                    fontWeight: "300",
                    fontSize: 12,
                  }}
                >
                  created and maintained by your
                </Text>
                {"\n"}
                <Text
                  style={{
                    marginLeft: -10,
                    fontWeight: "300",
                    fontSize: 12,
                  }}
                >
                  society
                </Text>
              </Text>
              <Image
                style={{
                  marginLeft: 20,
                  marginTop: -20,
                  width: 110,
                  height: 150,
                }}
                source={require("../../assets/Images/Reading.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ height: 100 }}></View>
      </View>
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({});
