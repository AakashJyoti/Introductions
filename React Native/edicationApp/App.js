import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Courses from "./src/screens/Courses";
import UserData from "./src/screens/UserData";
import { useFonts } from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";
import CourseDetails from "./src/screens/CourseDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoad] = useFonts({
    Nunito_600SemiBold,
  });

  if (!fontsLoad) {
    <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        {/* Home Sccren */}
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Home {...props} siteName={"educare"} />}
        </Stack.Screen>

        {/* Cource Screen */}
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />

        {/* UserData Screen */}
        <Stack.Screen
          name="Teachers"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Students",
            headerTitleAlign: "center",
          }}
        />

        {/* Cource Screen */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />

        {/* Contact Screen */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />

        {/* CourseDetails Screen */}
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
