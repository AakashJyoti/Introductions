import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../component/Menu";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Home = (props) => {
  const description = "We do Education with care";
  let [fontsLoad] = useFonts({
    JosefinSans_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoad) {
    <AppLoading />;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/logo.jpg")}
        />
        <Text style={styles.mainHeader}>Wecolme To</Text>
        <Text
          style={[
            styles.mainHeader,
            { fontSize: 40, color: "#4c5dab", marginTop: 0 },
          ]}
        >
          {props.siteName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
        <Text style={[styles.paraStyle, { textAlign: "center" }]}>
          Welcometo EDUCARE here we make student educated with Fun and get
          lessons completed not from syllabus from real life too..
        </Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "white",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    borderRadius: 20,
    marginTop: 30,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Nunito_600SemiBold",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#707070",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily: "JosefinSans_400Regular",
    fontSize: 20,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: "grey",
  },
});

export default Home;
