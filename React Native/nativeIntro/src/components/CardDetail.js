import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
// import { Image } from "react-native-web";

const CardDetail = (props) => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>
        {props.textData}
      </Text>
      <Image
        style={styles.imageStyle}
        source={props.imgSrc}
      />
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  listStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 400,
    height: 300,
  },
  textStyle: {
    fontSize: 30,
  },
});
