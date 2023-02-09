import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function CommunityScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView Vertical showsVerticalScrollIndicator={false}>
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
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                color: "#000000",
              }}
            >
              Discover
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
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Residents"
            accessibilityHint="  View Society Resisdents & Management Commitee"
            onPress={() => navigation.navigate("Residents")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <FontAwesome name="address-book-o" color={"#064F60"} size={34} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Residents
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              View Society Residents & Management Commitee
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="         Daily Help"
            accessibilityHint="     Find Daily Helps & Service Providers"
            onPress={() => navigation.navigate("Daily")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <Ionicons name="person-outline" color={"#064F60"} size={34} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
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
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Find Daily Helps & Service Providers
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            height: 150,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Emergency")}
            accessible={true}
            accessibilityLabel="  Emergency Numbers"
            accessibilityHint="          Emergency contacts for your Society"
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
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
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Emergency No's
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Emergency contacts for your Society
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="    Covid Protect"
            accessibilityHint="  Quarantine information & vaccination status"
            onPress={() => navigation.navigate("Covid")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <MaterialIcons name="healing" color={"#064F60"} size={34} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Covid Protect
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Quarantine information & vaccination status
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 17,
                color: "#000000",
              }}
            >
              Engage
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

        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Help")}
            accessible={true}
            accessibilityLabel="           Helpdesk"
            accessibilityHint="   Raise Complaints & Service Requests"
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <Foundation name="page" color={"#064F60"} size={34} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Helpdesk
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Raise Complaints & Service Requests
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Amenities"
            accessibilityHint="   Book facilities in your society"
            onPress={() => navigation.navigate("Amenities")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <FontAwesome5 name="swimming-pool" color={"#064F60"} size={34} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Amenities
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Book facilities in your society
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            height: 150,
          }}
        >
          <TouchableOpacity
            accessible={true}
            accessibilityLabel=" Notice Board"
            accessibilityHint=" View society Announcements"
            onPress={() => navigation.navigate("Notice")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <Feather name="clipboard" color={"#064F60"} size={34} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Notice Board
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              View society Announcements
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="    Communications"
            accessibilityHint="           Speak your mind and interact with residents"
            onPress={() => navigation.navigate("Communications")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <Ionicons
                name="ios-chatbubbles-outline"
                color={"#064F60"}
                size={34}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Communications
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Speak your mind and interact with residents
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            height: 170,
          }}
        >
          <TouchableOpacity
            accessible={true}
            accessibilityLabel=" Documents"
            accessibilityHint="       Find and store society & personal documents"
            onPress={() => navigation.navigate("Documents")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <Ionicons
                name="document-text-outline"
                color={"#064F60"}
                size={34}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Documents
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Find and store society & personal documents
            </Text>
          </TouchableOpacity>
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
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 17,
                color: "#000000",
              }}
            >
              Pay
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
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="        Society Dues"
            accessibilityHint="         Pay society dues, deposits & advances"
            onPress={() => navigation.navigate("Dues")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <MaterialCommunityIcons
                name="currency-inr"
                color={"#064F60"}
                size={34}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Society Dues
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Pay society dues, deposits & advances
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="         Rent Pay  "
            accessibilityHint="    Make rent payments and manage receipts"
            onPress={() => navigation.navigate("Rent")}
            style={{
              height: 140,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <AntDesign name="home" color={"#064F60"} size={34} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Rent Pay
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              Make rent payments and manage receipts
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            height: 200,
            marginBottom: "15%",
          }}
        >
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="        Utility Payments "
            accessibilityHint="      All-in-one payment solution for you"
            onPress={() => navigation.navigate("Utility")}
            style={{
              height: 145,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 50,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <MaterialCommunityIcons
                name="car-turbocharger"
                color={"#064F60"}
                size={44}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Utility Payments
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 12,
              }}
            >
              All-in-one payment solution for ...
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="        Prepaid Meter "
            accessibilityHint="     View consumption and pay utility bills"
            onPress={() => navigation.navigate("Meter")}
            style={{
              height: 145,
              elevation: 7,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 50,
              width: 140,
            }}
          >
            <View style={{ marginLeft: 20, marginTop: 26 }}>
              <Ionicons
                name="ios-speedometer-outline"
                color={"#064F60"}
                size={44}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 15,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                Prepaid Meter
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 8,

                color: "#000000",
                paddingTop: 2,
                fontSize: 10,
              }}
            >
              View consumption & pay utility bills
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </ScrollView>
  );
}
