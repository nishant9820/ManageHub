import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  searchBarFocused,
  Text,
  ScrollView,
  ImageBackground,
  Button,
} from "react-native";
import { firestore } from "../Firebase/firebase";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MapView from "react-native-maps";
import { useState } from "react";
import { Marker } from "react-native-maps";
import Search from "../../components/Search";
import DrawerSearch from "../../components/DrawerSearch";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { Video, AVPlaybackStatus } from "expo-av";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Background from "../Background";
import { useEffect } from "react";

const TrialScreen = (props) => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  // const [users, setUsers] = useState([]);
  // const todoRef = firebase.firestore().collection("todos");
  // useEffect(async () => {
  //   todoRef.onSnapshot((querySnapshot) => {
  //     const users = [];
  //     querySnapshot.forEach((doc) => {
  //       const { name } = doc.data();
  //       users.push({ id: doc.id, name });
  //     });
  //   });
  //   setUsers(users);
  // });
  return (
    <ScrollView Vertical showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#064F60",
            height: "7.1%",
            // borderBottomRightRadius: 45,
            borderBottomLeftRadius: 45,
          }}
        >
          {/* <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={120}
          /> */}
          <ImageBackground
            source={require("../../assets/Images/c.jpg")}
            style={{
              width: "100%",
              height: 169,
              // marginLeft: 30,
              // marginLeft: 10,
              // borderBottomRightRadius: 105,
              borderBottomLeftRadius: 45,
              overflow: "hidden",
            }}
            resizeMode="cover"
          >
            {/* <TouchableOpacity
            style={{ height: 50, width: 50, marginTop: 60, marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          >
            <AntDesign name="menufold" color={"#fff"} size={30} />
          </TouchableOpacity> */}
            <View
              style={{
                flexDirection: "row",
                alingItems: "center",
                marginTop: "17%",
                width: "150%",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    fontSize: 35,
                    color: "#fff",
                    fontWeight: "bold",
                    marginLeft: 20,
                  }}
                >
                  Hi Nishant
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("Accounts")}
                // style={{ }}
              >
                <Image
                  source={require("../../assets/Images/user.jpg")}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    marginLeft: 18,
                    marginBottom: 10,
                    marginTop: -10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        {/* <LinearGradient
          colors={["rgba(0,164,109,0.4)", "transparent"]}
          style={{
            left: 0,
            right: 0,
            height: 85,
            marginTop: -45,
          }}
        >
          
        </LinearGradient> */}
        <View
          styles={{
            flexDirection: "row",
            alingItems: "center",
            marginTop: "17%",
            width: "350%",
          }}
        >
          <Search />
          <DrawerSearch />
        </View>
        <View
          style={{
            height: 370,
            alignItems: "center",
            marginTop: 20,
            backgroundColor: "#fff",
          }}
        >
          <View
            accessible={true}
            accessibilityLabel="Get more from ManageHub"
            accessibilityHint=" Enhance your home's and children's security, stay connected with
            neighbours, find amazing deals on home essentials and much more."
            style={{
              backgroundColor: "#fbedcd",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "90%",
              borderRadius: 20,
              // elevation: 10,
            }}
          >
            <Image
              source={require("../../assets/Images/Selfi2.png")}
              style={{ marginTop: -20, width: 280, height: 200 }}
            />
            <Text style={{ fontSize: 18 }}>Get more from ManageHub</Text>
            <Text
              style={{
                fontSize: 12,
                justifyContent: "center",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              Enhance your home's and children's security, stay connected with
              neighbours, find amazing deals on home essentials and much more.
            </Text>

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
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <View style={{ flexDirection: "row" }}>
                <Entypo
                  name="plus"
                  color={"#fff"}
                  size={14}
                  style={{ marginTop: 5 }}
                />
                <Text style={{ marginTop: 1, color: "#fff" }}>
                  Add your home
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("")}
          style={{
            height: 207,
            marginTop: "13%",
            backgroundColor: "#FFF",
            alignItems: "center",

            marginBottom: 20,
            width: "100%",
          }}
        > */}
        <Video
          // ref={video}
          style={{
            height: 180,
            // elevation: 10,
            backgroundColor: "#FFF",
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 25,
            marginBottom: 30,
            width: 320,
            marginTop: 30,
          }}
          // source={{
          //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          // }}
          source={require("../../assets/Video/man.mp4")}
          useNativeControls
          resizeMode="contain"
          isLooping
          onBuffer={(data) => {
            if (data.isBuffering) {
              this.setState({ loading: true });
            } else {
              this.setState({ loading: false });
            }
          }}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        {/* <View
          style={{
            backgroundColor: "#00a46c",
            borderRadius: 100,
            alignItems: "center",
            width: 320,
            paddingVertical: 5,
            marginVertical: 10,
            marginLeft: 10,
          }}
        >
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          />
        </View> */}
        {/* <Image
            style={{ alignItems: "center" }}
            source={require("../../assets/Images/18.png")}
          /> */}
        {/* </TouchableOpacity> */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: -5,
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
              Community
            </Text>
            <View
              style={{
                height: 14,
                backgroundColor: "#ble5d3",
                width: 115,
                marginTop: -15,
              }}
            ></View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            height: 140,
            alignItems: "center",
            marginTop: 20,
            elevation: 10,
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
              width: "90%",
              borderRadius: 20,
              elevation: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: -50,
                paddingLeft: 10,
                marginTop: -17,
              }}
            >
              <Feather name="clipboard" color={"#064F60"} size={24} />
              <Text style={{ marginTop: 8, paddingLeft: 5, color: "#064F60" }}>
                Notice
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                color={"#064F60"}
                size={24}
                style={{ paddingLeft: 200 }}
              />
            </View>
            <View></View>
            <View
              style={{
                marginTop: 7,
                marginLeft: 10,
                borderStyle: "dotted",
                borderWidth: 0.5,
                borderRadius: 1,
                width: "90%",
                marginBottom: 7,
                backgroundColor: "#086004",
              }}
            ></View>
            <View style={styles.verticleLine}></View>
            <Text
              style={{
                paddingLeft: 25,
                fontSize: 16,
                fontWeight: "400",
                marginTop: -75,
              }}
            >
              Access all important announcements,
            </Text>
            <Text style={{ paddingLeft: 25, fontSize: 16, fontWeight: "400" }}>
              notices and circulars here
            </Text>
            <Text
              style={{
                paddingLeft: 25,
                fontWeight: "200",
                fontSize: 13,
                marginTop: 5,
              }}
            >
              No item published yet from your society
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            marginTop: 20,
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 280 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Daily")}
            accessible={true}
            accessibilityLabel="Daily Help"
            accessibilityHint="Details of different workers for Daily chores"
            style={{
              height: 200,
              elevation: 13,
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
              source={require("../../assets/Images/r.png")}
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
            onPress={() => navigation.navigate("Residents")}
            accessible={true}
            accessibilityLabel="Residents"
            accessibilityHint="Contact Number and details of all residents of society"
            style={{
              height: 200,
              elevation: 13,
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
              source={require("../../assets/Images/Building.png")}
              style={{
                borderRadius: 15,
                marginTop: -1,
                width: 140,
                height: 160,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 9,
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
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Emergency")}
            accessible={true}
            accessibilityLabel="Emergency Number"
            accessibilityHint="INDIA HELPLINE NUMBERS "
            style={{
              height: 200,
              elevation: 13,
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
              source={require("../../assets/Images/Emergency.png")}
              style={{
                borderRadius: 15,
                marginTop: 8,
                width: 140,
                height: 160,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: -5,
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
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("More")}
            style={{
              height: 200,
              elevation: 13,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 140,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/Images/More1.png")}
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
                paddingTop: -2,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 15,
                }}
              >
                More
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View
          accessible={true}
          accessibilityLabel="Get your society on ManageHUb"
          accessibilityHint="Share details with your society groups"
          style={{
            height: 100,
            alignItems: "center",
            marginTop: 20,
            elevation: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#fbedcd",
              justifyContent: "center",
              height: "100%",
              width: "90%",
              borderRadius: 20,
              elevation: 10,
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                marginTop: -30,
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              Get your society on ManageHUb
            </Text>
            <Text style={{ paddingLeft: 10, fontWeight: "200" }}>
              Share details with your society groups
            </Text>

            <TouchableOpacity
              style={{
                alignItems: "center",
                marginTop: 8,
                height: 35,
                width: 80,
                marginBottom: -30,
                marginLeft: 230,
                justifyContent: "center",
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderRadius: 30,

                backgroundColor: "#fff",
              }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginTop: 1, color: "#064F60" }}>Share</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  color={"#064F60"}
                  size={12}
                  style={{ marginTop: 4 }}
                />
              </View>
            </TouchableOpacity>
          </View>
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
                fontWeight: "400",
                fontSize: 15,
                color: "#000000",
              }}
            >
              Locations around you
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 300,
            justifyContent: "center",
            marginTop: "-5%",
            alignItems: "center",
            borderRadius: 20,
            // opacity: 0.5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Setting")}
            style={{
              backgroundColor: "#fff",
              height: "70%",
              width: "90%",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              elevation: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                height: "90%",
                width: "93%",
                borderRadius: 10,
              }}
            >
              <View style={styles.container}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: 19.1285,
                    longitude: 72.8646,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
                <Marker
                  draggable
                  coordinate={{
                    latitude: 19.1285,
                    longitude: 72.8646,
                  }}
                  onDragEnd={(e) =>
                    alert(JSON.stringify(e.nativeEvent.coordinate))
                  }
                  title={"Test Marker"}
                  description={"This is a description of the marker"}
                />
              </View>
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
              Testimonials
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
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 240 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{
              height: 180,
              elevation: 10,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 25,
              marginBottom: 10,
              width: 280,
            }}
          >
            <Image
              source={require("../../assets/Images/girl.png")}
              style={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{
              height: 180,
              elevation: 10,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 25,
              marginBottom: 10,
              width: 280,
            }}
          >
            <Image
              source={require("../../assets/Images/boy.png")}
              style={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{
              height: 180,
              elevation: 10,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 25,
              marginBottom: 10,
              width: 280,
            }}
          >
            <Image
              source={require("../../assets/Images/girl.png")}
              style={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{
              height: 180,
              elevation: 10,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 25,
              marginBottom: 10,
              width: 280,
            }}
          >
            <Image
              source={require("../../assets/Images/boy.png")}
              style={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{
              height: 180,
              elevation: 10,
              backgroundColor: "#FFF",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              borderRadius: 25,
              marginBottom: 10,
              width: 280,
            }}
          >
            <Image
              source={require("../../assets/Images/girl.png")}
              style={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fbedcd",
            height: 150,
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 30,
                color: "#C4A484",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Gateway
            </Text>
            <Text
              style={{
                marginLeft: 8,
                fontSize: 30,
                color: "#C4A484",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              {" "}
              to a better{" "}
            </Text>
            <Text
              style={{
                marginLeft: 16,
                fontSize: 30,
                color: "#C4A484",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              living
            </Text>
          </View>
          <Image
            style={{ paddingLeft: 200, marginTop: -3, width: 140, height: 130 }}
            source={require("../../assets/Images/snow.png")}
          />
        </View>
        <View style={{ height: 100 }}></View>
      </View>
    </ScrollView>
  );
};
export default TrialScreen;
const styles = StyleSheet.create({
  verticleLine: {
    marginLeft: 13,
    height: "58%",
    width: 1.5,
    backgroundColor: "#064F60",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
