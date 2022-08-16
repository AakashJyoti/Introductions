import { Button, Image, StyleSheet, Text, View, Linking } from "react-native";
import React from "react";
import {
  JosefinSans_700Bold,
  JosefinSans_600SemiBold,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const NetflixCard = () => {
  let [fontLoad] = useFonts({
    JosefinSans_700Bold,
    JosefinSans_600SemiBold,
    JosefinSans_400Regular,
  });

  if (!fontLoad) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Card</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyles}
          source={{
            uri: "https://www.pinkvilla.com/files/all_dead_main_0.jpg",
          }}
        />
        <View style={styles.poster_info}>
          <Text style={styles.poster_title}>All of Us Dead</Text>
          <Text style={styles.poster_text}>
            Find out why All of us dead. When an island populated by happy,
            flighless birds is visited by misterious green pigges, it's up to
            three unlike outcast
          </Text>
        </View>
        <Button
          title="Watch Now"
          onPress={() => {
            Linking.openURL("https://www.youtube.com");
          }}
          color="#841584"
        />
      </View>
    </View>
  );
};

export default NetflixCard;

const styles = StyleSheet.create({
  imageStyles: {
    width: 400,
    height: 300,
  },
  borderStyles: {
    borderWidth: 0,
    borderRadius: 20,
  },
  imgStyles: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_400Regular",
    textAlign: "center",
  },
  poster_title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "JosefinSans_600SemiBold",
  },
  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster: {
    width: 250,
    borderWidth: 2,
    alignItems: "center",
    borderColor: "#841584",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "JosefinSans_700Bold",
    color: "red",
    fontVariant: ["small-caps"],
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
  },
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
