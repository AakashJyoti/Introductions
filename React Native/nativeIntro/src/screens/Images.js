import { View } from "react-native";
import React from "react";
import CardDetail from "../components/CardDetail";
// import { Image } from "react-native-web";

const ImageFile = () => {
  return (
    <View>
      <CardDetail
        textData="jabba"
        imgSrc={require("../../assets/splash.png")}
      />
      <CardDetail textData="Abba" imgSrc={require("../../assets/fruits.jpg")} />
      <CardDetail textData="dabba" imgSrc={require("../../assets/icon.png")} />
    </View>
  );
};

export default ImageFile;
