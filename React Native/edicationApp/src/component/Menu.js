import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Courses")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }}
        />
        <Text>Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Teachers")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/conference.png",
          }}
        />
        <Text>Teachers</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />
        <Text>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
          }}
        />
        <Text>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonStyle: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 15,
  },
  iconStyle: {
    width: 30,
    height: 30,
    aspectRatio: 1,
  },
});
