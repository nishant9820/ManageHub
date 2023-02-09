import React from "react";
import { AsyncStorage } from "react-native";

import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Background from "../../Background";
import Btn from "../../../components/btn";
import { auth } from "../../Firebase/firebase";
// import<TextInput Require from "../../../components<TextInput Require";
import { useNavigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { color } from "react-native-reanimated";
const Admin = (props) => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .then(() => navigation.navigate("Add"))
      .catch((error) => alert(error.message));
  };

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
            Add Credentials
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
          <View style={{ marginTop: "15%" }}>
            <View style={{ alignItems: "center" }}>
              <TextInput
                Require
                style={{
                  borderRadius: 100,
                  color: "#000000",
                  paddingHorizontal: 10,
                  width: 290,
                  height: 35,
                  backgroundColor: "rgb(220,220, 220)",
                  marginVertical: 10,
                  // marginRight: 80,
                }}
                placeholder="First Name"
              />
              <TextInput
                Require
                style={{
                  borderRadius: 100,
                  color: "#000000",
                  paddingHorizontal: 10,
                  width: 290,
                  height: 35,
                  backgroundColor: "rgb(220,220, 220)",
                  marginVertical: 10,
                  // marginRight: 80,
                }}
                placeholder="Last Name"
              />
              <TextInput
                Require
                style={{
                  borderRadius: 100,
                  color: "#000000",
                  paddingHorizontal: 10,
                  width: 290,
                  height: 35,
                  backgroundColor: "rgb(220,220, 220)",
                  marginVertical: 10,
                  // marginRight: 80,
                }}
                value={email}
                placeholder="Email / Username"
                keyboardType={"email-address"}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                Require
                style={{
                  borderRadius: 100,
                  color: "#000000",
                  paddingHorizontal: 10,
                  width: 290,
                  height: 35,
                  backgroundColor: "rgb(220,220, 220)",
                  marginVertical: 10,
                  // marginRight: 80,
                }}
                placeholder="Contact Number"
                keyboardType={"number"}
              />
              <TextInput
                Require
                style={{
                  borderRadius: 100,
                  color: "#000000",
                  paddingHorizontal: 10,
                  width: 290,
                  height: 35,
                  backgroundColor: "rgb(220,220, 220)",
                  marginVertical: 10,
                  // marginRight: 80,
                }}
                placeholder="Alternate Contact Number"
                keyboardType={"number"}
              />
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  Require
                  placeholder="Gas Line Number "
                  style={{
                    borderRadius: 100,
                    color: "#000000",
                    paddingHorizontal: 10,
                    width: 190,
                    marginRight: 10,
                    height: 35,
                    backgroundColor: "rgb(220,220, 220)",
                    marginVertical: 10,
                    // marginRight: 80,
                  }}
                />
                <TextInput
                  Require
                  value={password}
                  style={{
                    borderRadius: 100,
                    color: "#000000",
                    paddingHorizontal: 10,
                    width: 90,
                    height: 35,
                    backgroundColor: "rgb(220,220, 220)",
                    marginVertical: 10,
                    // marginRight: 80,
                  }}
                  placeholder=" Meter No."
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  Require
                  value={password}
                  style={{
                    borderRadius: 100,
                    color: "#000000",
                    paddingHorizontal: 10,
                    width: 90,
                    height: 35,
                    backgroundColor: "rgb(220,220, 220)",
                    marginVertical: 10,
                    // marginRight: 80,
                  }}
                  placeholder="Falt No."
                  onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                  Require
                  placeholder="Number of Members"
                  style={{
                    borderRadius: 100,
                    color: "#000000",
                    paddingHorizontal: 10,
                    width: 190,
                    marginLeft: 10,
                    height: 35,
                    backgroundColor: "rgb(220,220, 220)",
                    marginVertical: 10,
                    // marginRight: 80,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  placeholder="Vehicle Number Plate "
                  style={{
                    borderRadius: 100,
                    color: "#000000",
                    paddingHorizontal: 10,
                    width: 190,
                    marginRight: 10,
                    height: 35,
                    backgroundColor: "rgb(220,220, 220)",
                    marginVertical: 10,
                    // marginRight: 80,
                  }}
                />
                <TextInput
                  Require
                  value={password}
                  style={{
                    borderRadius: 100,
                    color: "#000000",
                    paddingHorizontal: 10,
                    width: 90,
                    height: 35,
                    backgroundColor: "rgb(220,220, 220)",
                    marginVertical: 10,
                    // marginRight: 80,
                  }}
                  placeholder=" No."
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                backgroundColor: "#064F60",
                borderRadius: 100,
                alignItems: "center",
                width: 290,
                paddingVertical: 5,
                marginVertical: 10,
                marginLeft: 10,
                height: 40,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  fontWeight: "bold",
                  marginTop: -1,
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Admin;
