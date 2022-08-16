import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ route, navigation }) => {
  const { myName } = route.params;

  return (
    <View>
      <Text>welcome {myName} </Text>
      <Button title="Simon Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
