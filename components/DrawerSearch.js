import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { FloatingAction } from "react-native-floating-action";
import AntDesign from "react-native-vector-icons/AntDesign";
const DrawerSearch = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        margin: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "14%",
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 8,
        marginBottom: 3,
        marginTop: -50,
        marginLeft: 292,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{
          // height: 80,
          padding: 10,

          flexDirection: "row",
          width: "100%",
          backgroundColor: "#FFF",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <AntDesign name="menufold" color={"#000"} size={27} />
        </View>
      </TouchableOpacity>
    </View>
    // <View style={styles.container}>
    //   <FloatingAction
    //     actions={actions}
    //     onPressItem={(name) => {
    //       console.log(`selected button: ${name}`);
    //     }}
    //     style={{ backgroundColor: "#FFF", borderRadius: 10 }}
    //   />
    // </View>
  );
};
export default DrawerSearch;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
