import { StyleSheet, Text, View } from "react-native";
// import Checkbox from "expo-checkbox";
import React from "react";
// import { useState } from "react";
import Unorderedlist from "react-native-unordered-list";
import AntDesign from "react-native-vector-icons/AntDesign";
const Rent = () => {
  // const [isSelected, setSelection] = useState(false);
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#fff",
          height: 80,
          width: "90%",
          borderRadius: 10,
          marginTop: "5%",
          alignItems: "center",
          elevation: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#064F60",
            height: 50,
            width: 50,
            borderRadius: 50,
            marginLeft: 20,
            alignItems: "center",
          }}
        >
          <AntDesign
            name="home"
            color={"#fff"}
            size={30}
            style={{ marginTop: 8 }}
          />
        </View>

        <Text
          style={{
            fontSize: 30,
            fontWeight: "600",
            color: "#064F60",
            marginLeft: 17,
          }}
        >
          Pay Rent
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          height: 450,
          width: "90%",
          borderRadius: 10,
          marginTop: "5%",
          elevation: 20,
        }}
      >
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 25,
            fontWeight: "650",
          }}
        >
          Why pay rent through ManageHub?
        </Text>
        <View>
          <Unorderedlist
            color="#064F60"
            style={{ fontSize: 40, marginLeft: 20 }}
          >
            <Text style={{ color: "#000", marginTop: 17 }}>
              Free up cash and enjoy the 45-60 days interest-free credit period.
            </Text>
          </Unorderedlist>
          <Unorderedlist
            color="#064F60"
            style={{ fontSize: 40, marginLeft: 20 }}
          >
            <Text style={{ color: "#000", marginTop: 17 }}>
              Earn credit card rewards.
            </Text>
          </Unorderedlist>
          <Unorderedlist
            color="#064F60"
            style={{ fontSize: 40, marginLeft: 20, marginTop: -8 }}
          >
            <Text style={{ color: "#000", marginTop: 9 }}>
              Manage all your house-related expenses ManageHub and set reminders
              to never miss payment.
            </Text>
          </Unorderedlist>
          <Unorderedlist
            color="#064F60"
            style={{ fontSize: 40, marginLeft: 20 }}
          >
            <Text style={{ color: "#000", marginTop: 17 }}>
              get rent receipt to claim maximum HRA {"\n"}
              tax benefits
            </Text>
          </Unorderedlist>
          <Unorderedlist
            color="#064F60"
            style={{ fontSize: 40, marginLeft: 20 }}
          >
            <Text style={{ color: "#000", marginTop: 17 }}>
              Get cashback on each payment.
            </Text>
          </Unorderedlist>
          <Unorderedlist
            color="#064F60"
            style={{ fontSize: 40, marginLeft: 20, marginTop: -15 }}
          >
            <Text style={{ color: "#000", marginTop: 3 }}>
              Make Secure Payment through ManageHUb.
            </Text>
          </Unorderedlist>
        </View>
      </View>
      {/* <View style={styles.checkboxContainer}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text> */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "78%",
          marginTop: 30,
          marginLeft: 30,
        }}
      >
        <Text style={{ color: "#808080", fontSize: 10 }}>
          By Reading this, you agree to our{" "}
        </Text>
        <Text style={{ color: "#064F60", fontWeight: "bold", fontSize: 10 }}>
          Terms & Conditions
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "78%",
          // paddingRight: 16,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "#808080", fontSize: 10 }}>and </Text>
        <Text style={{ color: "#064F60", fontWeight: "bold", fontSize: 10 }}>
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default Rent;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});
