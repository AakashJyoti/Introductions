import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import AppLoading from "expo-app-loading";

const About = () => {
  let [fontsLoad] = useFonts({
    JosefinSans_400Regular,
  });

  if (!fontsLoad) {
    <AppLoading />;
  }

  return (
    <View style={styles.aboutStyle}>
      <View>
        <Text style={styles.descriptionAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          officiis aut eos aperiam dolore, vitae deleniti minus? Deserunt cumque
          libero nobis quae tempore, molestiae ducimus. Quia, harum doloribus
          sequi quis aliquam quam eaque voluptate dolor ullam ut hic odit
          asperiores voluptates commodi illum minus illo, a sunt veritatis modi?
          Inventore quis, velit cupiditate minima aperiam in!
        </Text>
        <Text style={styles.descriptionAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          officiis aut eos aperiam dolore, vitae deleniti minus? Deserunt cumque
          libero nobis quae tempore, molestiae ducimus. Quia, harum doloribus
          sequi{" "}
        </Text>
        <Text style={styles.descriptionAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          officiis aut eos aperiam dolore, vitae deleniti minus? Deserunt cumque
          libero nobis quae tempore, molestiae ducimus. Quia, harum doloribus
          sequi quis aliquam quam eaque voluptate dolor ullam ut hic odit
          asperiores voluptates commodi illum minus illo, a sunt veritatis modi?
          Inventore quis, velit cupiditate minima aperiam in!
        </Text>
        <Text style={styles.descriptionAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          officiis aut eos aperiam dolore, vitae deleniti minus? Deserunt cumque
          libero nobis quae tempore, molestiae ducimus. Quia, harum doloribus
          sequi quis aliquam quam eaque voluptate dolor ullam ut hic odit
          asperiores voluptates commodi illum minus illo, a sunt veritatis modi?
          Inventore quis, velit cupiditate minima aperiam in!
        </Text>
        <Text style={styles.descriptionAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          Inventore quis, velit cupiditate minima aperiam in!
        </Text>
      </View>

      <View>
        <Text style={styles.socialDaba}>Follow us on: </Text>
        <View style={styles.socialMedia}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("Instagram.com/mannu_1_7")}
          >
            <Image
              style={styles.mediaIcon}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.youtube.com/c/GoodTimesWithScar")
            }
          >
            <Image
              style={styles.mediaIcon}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://discord.com/channels/@me")}
          >
            <Image
              style={styles.mediaIcon}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>2022 Copyright ©️ reserved by Educare</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutStyle: {
    height: "100%",
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  descriptionAbout: {
    fontSize: 18,
    fontFamily: "JosefinSans_400Regular",
    marginBottom: 20,
  },

  socialMedia: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  buttonStyle: {
    margin: 10,
  },
  mediaIcon: {
    height: 40,
    width: 40,
  },
  footer: {
    marginBottom: 10,
    alignItems: "center",
  },
  socialDaba: {
    marginTop: 40,
    fontSize: 20,
    textDecorationLine: "underline",
    fontFamily: "JosefinSans_400Regular",
  },
});
