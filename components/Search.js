import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const Search = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
  return (
    // <View style4={{ width:  }}>
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <View
          style={
            clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
          }
        >
          <Feather
            name="search"
            size={25}
            color="#000000"
            style={{ marginLeft: 1 }}
          />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor={"#000000"}
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => {
              "setCLicked(true)";
            }}
          />
          {clicked && (
            <Entypo
              name="cross"
              size={20}
              color="black"
              style={{ padding: 1 }}
              onPress={() => {
                setSearchPhrase("");
              }}
            />
          )}
        </View>

        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                ("setCLicked(false)");
              }}
            ></Button>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
export default Search;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 18,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "70%",
    backgroundColor: "#fff",
    borderRadius: 30,
    elevation: 10,
    marginBottom: 3,
    marginTop: -30,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
  },
  searchBar__unclicked: {
    padding: 10,

    flexDirection: "row",
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: "#493d8a",
  },
});
