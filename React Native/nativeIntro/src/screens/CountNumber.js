import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, LogBox } from "react-native";

const CountNumber = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.counter}> {counter} </Text>

      <View style={styles.button_group}>
        <TouchableOpacity
          style={[styles.commonButton, styles.subtract]}  
          onPress={() => {
            setCounter(counter + 1);
            // console.log(counter);
          }}
        >
          <Text style={styles.commonText}> + 1 </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.commonButton, styles.add]}
          onPress={() => {  
            if (counter > 0) setCounter(counter - 1);
          }}
        >
          <Text style={styles.commonText}> - 1 </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.commonButton, styles.reset]}
          onPress={() => {
            setCounter(0);
          }}
        >
          <Text style={styles.commonText}> Reset </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountNumber;

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
  },
  button_group: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  counter: {
    fontSize: 70,
    textAlign: "center",
    width: "100%",
    padding: 20,
    marginTop: 250,
    marginBottom: 30,
  },
  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: "blue",
    width: 200,
    height: 80,
  },
  commonText: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    // textShadowColor: "black",
  },
});
