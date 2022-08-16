import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CoursesData from "../api/CourseApi";
import {
  useFonts,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import AppLoading from "expo-app-loading";

const Cource = ({ navigation }) => {
  let [fontsLoad] = useFonts({
    JosefinSans_500Medium,
  });

  if (!fontsLoad) {
    <AppLoading />;
  }

  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>

          {/* <Text style={styles.description}>{item.description}</Text> */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("CourseDetails", {
                  courseId: item.id,
                })
              }
            >
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CoursesData}
      renderItem={courseCard}
    />
  );
};

export default Cource;

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginVertical: -30,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 20,
  },
  mainHeader: {
    fontSize: 28,
    color: "#344055",
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "JosefinSans_500Medium",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "green",
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
  },
});
