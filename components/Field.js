import React from "react";
import { TextInput } from "react-native";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: "#000000",
        paddingHorizontal: 10,
        width: 290,
        height: 35,
        backgroundColor: "rgb(220,220, 220)",
        marginVertical: 10,
        marginRight: 80,
      }}
      placeholderTextColor="#000000"
    ></TextInput>
  );
};

export default Field;
