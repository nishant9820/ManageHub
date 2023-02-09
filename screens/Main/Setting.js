import React from "react";
import MapView from "react-native-maps";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Marker } from "react-native-maps";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          // key={index}
          // image={{ uri: "custom_pin" }}
          draggable
          coordinate={{
            latitude: 19.1285,
            longitude: 72.8646,
          }}
          onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={"Test Marker"}
          description={"This is a description of the marker"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
// import { Marker } from "react-native-maps";
// import React from "react";
// import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";
// import MapView from "react-native-maps";
// import { useState } from "react";
// import { useRef } from "react";
// export default function App() {
//   const mapRef = useRef(null);
//   const [region, setRegion] = useState({
//     latitude: 19.1285,
//     longitude: 72.8646,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//   });
//   const tolaniRegion = {
//     // latitude: 19.1285,
//     // longitude: 72.8646,
//     // latitudeDelta: 0.01,
//     // longitudeDelta: 0.01,
//     latitude: 35.6762,
//     longitude: 139.6503,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//   };
//   const goToTolani = () => {
//     //complete this animation in 3 seconds
//     mapRef.current.animateToRegion(tolaniRegion, 3 * 1000);
//   };
//   return (
//     <View style={styles.container}>
//       <MapView
//         ref={mapRef}
//         style={styles.map}
//         initialRegion={{
//           latitude: 19.1285,
//           longitude: 72.8646,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         onRegionChangeComplete={(region) => setRegion(region)}
//       />
//       <TouchableOpacity
//         style={{ height: 40, width: 60, backgroundColor: "#000" }}
//         onPress={() => goToTolani()}
//       >
//         <Text style={{ color: "#fff" }}>Go to Tolani</Text>
//       </TouchableOpacity>
//       <Text style={styles.text}>Current latitude{region.latitude}</Text>
//       <Text style={styles.text}>Current longitude{region.longitude}</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     height: "80%",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   text: {
//     fontSize: 20,
//     // backgroundColor: "lightblue",
//   },
// });
