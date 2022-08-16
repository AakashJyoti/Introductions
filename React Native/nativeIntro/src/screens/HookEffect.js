import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const HookEffect = () => {
  const [myUserData, setMyUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const myData = await response.json();
      // console.log(myData);
      setMyUserData(myData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View>
      {isLoading ? (
        <View style={styles.load}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View>
          <FlatList
            data={myUserData}
            renderItem={({ item }) => {
              return (
                <View style={styles.container}>
                  <Image
                    style={styles.inage}
                    resizeMode="cover"
                    source={{ uri: item.image }}
                  />
                  <Text>{item.id < 10 ? `#0${item.id}` : `#${item.id}`}</Text>
                  <Text>{item.name}</Text>
                  <Text>{item.email}</Text>
                  <Text>{item.mobile}</Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default HookEffect;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  inage: {
    height: 400,
    width: 400,
  },
  load: {
    marginTop: 400,
  },
});
