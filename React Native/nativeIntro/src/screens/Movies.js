import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const Movies = () => {
  const movies = [
    {
      name: "Death Note",
      year: "2021",
      Creator: "unknown",
      Genre: "Horror, Thriller",
    },
    {
      name: "Eemily in Paris",
      year: "2020",
      Creator: "Darren Star",
      Genre: "Romance, Drama",
    },
    {
      name: "Archive-81",
      year: "2022",
      Creator: "Rebecca Sonnenshine",
      Genre: "Horror, Thriller",
    },
    {
      name: "Cheer",
      year: "2021-2022",
      Creator: "Greg-Whiteley",
      Genre: "Docuseries",
    },
    {
      name: "Cobra-Kai",
      year: "2018-2022",
      Creator: "Haydern Schlossberg",
      Genre: "Drama",
    },
    {
      name: "The-Witcher",
      year: "2020-2021",
      Creator: "Lausen Schmidt Missrich",
      Genre: "Reality",
    },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(key) => {
          return key.name;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => {
          return (
            <View style={styles.boxStyles}>
              <Text style={styles.textStyles}>{item.name}</Text>
              <Text style={styles.textStyles}>{item.year}</Text>
              <Text style={styles.textStyles}>{item.Creator}</Text>
              <Text style={styles.textStyles}>{item.Genre}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  boxStyles: {
    backgroundColor: "black",
    borderRadius: 10,
    marginLeft: 3,
    // marginRight: 3,
    width: 150,
    height: 200,
    flex: 1,
    justifyContent: "center",
  },

  textStyles: {
    color: "white",
    textAlign: "center",
    marginTop: 1,
    marginBottom: 1,
    padding: 5,
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
  },
});
