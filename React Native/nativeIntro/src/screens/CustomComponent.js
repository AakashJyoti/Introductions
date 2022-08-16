// import libraries to create component
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//  Create a cmponent that return some JSX / simple function
const CustomComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>
         CustomComponent Text is here
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

//  Create a Style Sheet to create a component
const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
});

//  Export the file so we can use it elesewhere in our App
export default CustomComponent;
