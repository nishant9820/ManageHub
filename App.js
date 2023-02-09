import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./screens/Onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Daily from "./screens/Features/Daily.js";
import Maid from "./screens/Features/Daily/Maid.js";
import Emergency from "./screens/Features/Emergency";
import More from "./screens/Features/More.js";
import Setting from "./screens/Main/Setting";
import Services from "./screens/Main/Services";
import Residents from "./screens/Features/Residents";
import Covid from "./screens/Features/Covid.js";
import Means from "./screens/Account/Admin/Means";
import Driver from "./screens/Features/Daily/Driver";
import Milk from "./screens/Features/Daily/Milk";
import Paper from "./screens/Features/Daily/Paper";
import CommunityScreen from "./screens/Main/CommunityScreen";
import Amenities from "./screens/Engage/Amenities";
import Communications from "./screens/Engage/Communications";
import Help from "./screens/Engage/Help";
import Notice from "./screens/Engage/Notice";
import Documents from "./screens/Engage/Documents";
import Dues from "./screens/Pay/Dues";
import Meter from "./screens/Pay/Meter";
import Rent from "./screens/Pay/Rent";
import Utility from "./screens/Pay/Utility";
import TrialScreen from "./screens/Main/TrialScreen";
import Background from "./screens/Background";
import Accounts from "./screens/Account/Accounts";
import Nishant from "./screens/Features/Daily/Nishant";
import Login from "./screens/Account/Login";
import Admin from "./screens/Account/Admin/Admin";
import Login1 from "./screens/Account/Login1";
import PostScreen from "./screens/Main/PostScreen";
import Add from "./screens/Account/Admin/Add";
import Yuvraj from "./screens/Features/Daily/Yuvraj";
import Login2 from "./screens/Account/Login2";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Moments from "./screens/Drawer/Moments";
import Chat from "./screens/Chat";
import Profile from "./screens/Drawer/Profile";
import "react-native-gesture-handler";
import CustomDrawer from "./components/CoustomDrawer";
const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Drawer1() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Notice"
        component={Notice}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Moments"
        component={Moments}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        /> */}
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Onboarding">
        <stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Add"
          component={Add}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Maid"
          component={Maid}
          // options={{ headerShown: false }}
        />
        <stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="HomeScreen"
          component={Drawer1}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Services"
          component={Services}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Means"
          component={Means}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Admin"
          component={Admin}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="PostScreen"
          component={PostScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Yuvraj"
          component={Yuvraj}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Nishant"
          component={Nishant}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Driver"
          component={Driver}
          // options={{ headerShown: false }}
        />
        <stack.Screen
          name="Milk Man"
          component={Milk}
          // options={{ headerShown: false }}
        />
        <stack.Screen
          name="Paper Boy"
          component={Paper}
          // options={{ headerShown: false }}
        />
        <stack.Screen
          name="Login1"
          component={Login1}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Login2"
          component={Login2}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="TrialScreen"
          component={TrialScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Accounts"
          component={Accounts}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Background"
          component={Background}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="Daily"
          component={Daily}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Emergency"
          component={Emergency}
          // options={{ headerShown: false }}
        />
        <stack.Screen
          name="More"
          component={More}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Residents"
          component={Residents}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Community"
          component={CommunityScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Covid"
          component={Covid}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Communications"
          component={Communications}
          // options={{ headerShown: false }}
        />
        <stack.Screen
          name="Amenities"
          component={Amenities}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Documents"
          component={Documents}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Help"
          component={Help}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Notice"
          component={Notice}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Dues"
          component={Dues}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Meter"
          component={Meter}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Rent"
          component={Rent}
          // options={{ headerShown: false }}
        />
        <stack.Screen
          name="Utility"
          component={Utility}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
