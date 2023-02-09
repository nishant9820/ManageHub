import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Background from "../Background";
import Btn from "../../components/btn";
import { useEffect, useState } from "react";
import Field from "../../components/Field";
import { auth } from "../Firebase/firebase";
import { useNavigation } from "@react-navigation/core";

const Login1 = (props) => {
  const navigation = useNavigation();

  const [email, verifyEmail] = useState("");
  const [password, verifyPassword] = useState("");
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("HomeScreen"))

      .catch((error) => alert(error.message));
  };
  return (
    <Background>
      <View style={{ width: 460 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 64,
            fontWeight: "bold",
            marginVertical: 20,
            marginTop: 40,
            marginLeft: 100,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "#fff",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "#064F60",
              fontWeight: "bold",
              marginLeft: "10%",
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              color: "#808080",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
              marginLeft: "20%",
            }}
          >
            Login to your account
          </Text>
          <View style={{ alignItems: "center" }}>
            <Field
              placeholder="Email / Username"
              keyboardType={"email-address"}
              onChangeText={(text) => verifyEmail(text)}
            />
            <Field
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => verifyPassword(text)}
            />
          </View>
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 200,
            }}
          >
            <Text
              style={{ color: "#064F60", fontWeight: "bold", fontSize: 16 }}
            >
              Forgot Password ?
            </Text>
          </View>
          <View style={{ marginLeft: 15 }}>
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                backgroundColor: "#064F60",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                width: 300,
                paddingVertical: 5,
                marginVertical: 10,
                marginLeft: 18,
                height: 50,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  fontWeight: "bold",
                  // marginTop: 1,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 75,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Admin")}
            >
              <Text
                style={{ color: "#064F60", fontWeight: "bold", fontSize: 16 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Background>
  );
};

export default Login1;
