import { FlatList, StyleSheet, Text } from "react-native";
import React from "react";

const FlatListDemo = () => {
  const names = [
    {
      index: "1",
      name: "Aakash",
    },
    {
      index: "2",

      name: "Abba",
    },
    {
      index: "3",

      name: "Dabba",
    },
    {
      index: "4",
      name: "Jabba",
    },
    {
      index: "5",
      name: "Jabba",
    },
    {
      index: "6",
      name: "Jabba",
    },
    {
      index: "7",
      name: "Jabba",
    },
    {
      index: "8",
      name: "Jabba",
    },
  ];
  return (
    <FlatList
      keyExtractor={(key) => {
        return key.index;
      }}
      horizontal
      // inverted
      // numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({ item }) => {
        return <Text style={styles.textStyles}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyles: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    fontSize: 10,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
});

// We use FlatList  to  read data from API's like Map function and ForEach function
// it need 2 props array name and  renderItems = mapping

export default FlatListDemo;
