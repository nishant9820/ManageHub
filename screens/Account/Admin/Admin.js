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
import Field from "../../../components/Field";
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
      <View style={{ width: 460 }}>
        <Text
          style={{
            marginLeft: 55,
            color: "#fff",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
            marginLeft: 75,
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 30 }}>
            <View style={{ alignItems: "center" }}>
              <Field placeholder="First Name" />
              <Field placeholder="Last Name" />
              <Field
                value={email}
                placeholder="Email / Username"
                keyboardType={"email-address"}
                onChangeText={(text) => setEmail(text)}
              />
              <Field placeholder="Contact Number" keyboardType={"number"} />
              <Field
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
              <Field placeholder="Confirm Password" secureTextEntry={true} />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "78%",
                paddingRight: 100,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#808080", fontSize: 14 }}>
                By Register in, you agree to our{" "}
              </Text>
              <Text
                style={{ color: "#064F60", fontWeight: "bold", fontSize: 14 }}
              >
                Terms & Conditions
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "78%",
                paddingRight: 16,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "#808080", fontSize: 16 }}>and </Text>
              <Text
                style={{ color: "#064F60", fontWeight: "bold", fontSize: 16 }}
              >
                Privacy Policy
              </Text>
            </View>
            {/* <Btn
              textColor="white"
              bgColor="#00a46c"
              btnLabel="Signup"
              onPress={handleSignUp}
            /> */}
            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                backgroundColor: "#064F60",
                borderRadius: 100,
                alignItems: "center",
                width: 320,
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
                Register
              </Text>
            </TouchableOpacity>
            {/* <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 50,
                marginTop: 2,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Already have an account ?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Login1")}
              >
                <Text
                  style={{ color: "#00a46c", fontWeight: "bold", fontSize: 16 }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Admin;
