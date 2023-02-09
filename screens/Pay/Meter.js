import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useStripe } from "@stripe/stripe-react-native";
import React, { useState } from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import Payment from "../../components/Payment";
// import Cards from "react-credit-cards";

const Meter = () => {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51MBXXNSHJLr1jwGDmvepcylN5nJA4nHHIOdKhuVzgtVCYQms6zjLAXBhMQn6m5k69S6FXr46hnQHSng1rQO8BNEm00QRiJqfzx">
        <Payment />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
};

export default Meter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
