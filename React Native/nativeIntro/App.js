// import libraries to create component
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContactForm from "./src/project/ContactUs/ContactForm";
// import HookEffect from "./src/screens/HookEffect";
// import ColorGenerator from "./src/project/ColorGenerator";
// import NetflixCard from "./src/components/NetflixCard";
// import CountNumber from "./src/screens/CountNumber";
// import OurButtons from "./src/screens/OurButton";
// import ImageFile from "./src/screens/Images";
// import Movies from "./src/screens/Movies";
// import CustomComponent from "./src/screens/CustomComponent";
// import FlatListDemo from "./src/screens/FlatListDemo";
import Home from "./src/project/ContactUs/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//  Create a cmponent that return some JSX / simple function
const App = () => {
  // const myName = "Aakash jyoti";
  // const myElement = <Text>Content comming from Const Variable</Text>;
  // const getFullName = (firstPerson, secondPerson, thirdPerson) => {
  //   return `${firstPerson}, ${secondPerson} and ${thirdPerson}`;
  // };
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
  <Stack.Navigator  initialRouteName="Login">
  <Stack.Screen name="Login" component={ContactForm} />  
  <Stack.Screen name="Home" component={Home} />  
  </Stack.Navigator>
</NavigationContainer>
  );
};

// {/* <View style={styles.container}> */}
// {/* <ContactForm /> */}
// {/* <HookEffect /> */}
// {/* <ColorGenerator /> */}
// {/* <CountNumber /> */}
// {/* <NetflixCard /> */}
// {/* <OurButtons /> */}
// {/* <ImageFile /> */}
// {/* <Movies /> */}
// {/* <CustomComponent /> */}
// {/* <Text>Gazab bhai.. Sahi khel gya ladke {myName}</Text> */}
// {/* {myElement} */}
// {/* <Text> Hello All of you {getFullName("Abba", "Dabba", "Jabba")}</Text> */}
// {/* <FlatListDemo /> */}
// {/* <StatusBar style="auto" /> */}
// {/* </View> */}

//  Create a Style Sheet to create a component
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: "100%",
    // width: "100%",
    // alignItems: "center",
    // backgroundColor: "#99D5E7",
  },
});

//  Export the file so we can use it elesewhere in our App
export default App;

// we ccan defice an JSX  variable inside a JSX block by using culy braces
// always return JSX using () or group tags, Never give the return value undefined.
// We can assign JSX element to variable, then we can show thet variable in JSX block
// We can asseble different JSX element like normal HTML using View
// Any JAVASCRIPT expression will worrk between curly braces, includeing function calls

// expo install @expo-google-fonts/josefin-sans
// expo install expo-app-loading
