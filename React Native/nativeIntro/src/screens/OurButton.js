import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const OurButtons = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Buttons</Text>

      <Button
        title="jabba"
        // disabled
        onPress={() => {
          // console.log("Kallua bhag ");
          Alert.alert("Abba Dabba Jabba");
        }}
      />

      <TouchableOpacity
        onPress={() => {
          console.log("Kallua bhag ");
          Alert.alert("Touchable Opacity");
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../../assets/fruits.jpg")}
        />
        {/* <Text>Kallua</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default OurButtons;

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 20,
    marginTop: 50,
    alignItems: "center",
    fontSize: 30,
  },
  imageStyle: {
    marginTop: 20,
    width: 400,
    height: 300,
  },
});
