import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CoursesData from "../api/CourseApi";
import {
  useFonts,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const CourseDetails = ({ navigation, route }) => {
  let [fontsLoad] = useFonts({
    JosefinSans_500Medium,
    Nunito_600SemiBold,
  });

  if (!fontsLoad) {
    <AppLoading />;
  }
  const id = route.params.courseId;
  const selectedCourses = CoursesData.find((element) => {
    return id === element.id;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <Text style={styles.mainHeader}>{selectedCourses.title}</Text>
        <View>
          <Image
            style={styles.cardImage}
            source={selectedCourses.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.description}>{selectedCourses.description}</Text>
        <Text style={styles.content}>Content :</Text>
        <View style={styles.coursesContainer}>
          <Text style={styles.course}>{selectedCourses.course1}</Text>
          <Text style={styles.course}>{selectedCourses.course2}</Text>
          <Text style={styles.course}>{selectedCourses.course3}</Text>
        </View>
        <Text style={styles.price}>Rs. {selectedCourses.price}</Text>
      </View>
    </View>
  );
};

export default CourseDetails;

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
    // fontWeight: 500,
    // paddingTop: 15,
    // paddingBottom: 15,
  },
  description: {
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  coursesContainer: {
    display: "flex",
    flexDirection: "row",
  },
  course: {
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
    paddingBottom: 5,
    lineHeight: 20,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  price: {
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
    paddingBottom: 5,
    paddingTop: 10,
    lineHeight: 20,
    fontSize: 20,
    color: "white",
    backgroundColor: "green",
    marginTop: 15,
    borderRadius: 5,
  },
  content: {
    fontSize: 25,
  },
});
