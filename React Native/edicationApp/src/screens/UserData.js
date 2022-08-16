import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";
import {
  useFonts,
  JosefinSans_400Regular,
} from "@expo-google-fonts/josefin-sans";
import AppLoading from "expo-app-loading";

const UserData = () => {
  let [fontsLoad] = useFonts({
    JosefinSans_400Regular,
  });

  if (!fontsLoad) {
    <AppLoading />;
  }
  const [isLoading, setIsLoading] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const realdata = await response.json();
    setMyData(realdata.results);
    setIsLoading(false);
    // console.log(myData);
  };

  // render the students Cards
  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.picture.large }} />
        </View>
        <View>
          <View style={styles.mainContain}>
            <Text style={styles.myName}>
              Name: {item.name.first} {item.name.last}
            </Text>
            <Text style={styles.myName}>Phone: {item.phone}</Text>
            <Text style={styles.myName}>Email: {item.email}</Text>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => getUserData(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Some of Our Teachers: </Text>
      <FlatList
        keyExtractor={(item) => item.location.postcode}
        data={myData}
        renderItem={showUserData}
      />
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  mainConatiner: {
    width: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  mainHeader: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    backgroundColor: "#fff",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    paddingVertical: 10,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 300,
    borderRadius: 5,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    fontFamily: "JosefinSans_400Regular",
  },
  container: {
    height: "100%",
  },
});
