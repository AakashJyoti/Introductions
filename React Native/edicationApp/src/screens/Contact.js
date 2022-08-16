import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  useFonts,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import AppLoading from "expo-app-loading";

const Contact = ({ navigation }) => {
  let [fontsLoad] = useFonts({
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
  });

  if (!fontsLoad) {
    <AppLoading />;
  }

  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Please all fields");
    } else {
      Alert.alert(`Thank You ${name} `);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>
      <Text style={styles.description}> Reach us on: FakeIdHai123@gmail.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="First Last"
          value={name}
          onChangeText={(value) => setName(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Example123@gmail.com"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Mobile Number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="+91 1234567890"
          value={phone}
          onChangeText={(value) => setPhone(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Text</Text>
        <TextInput
          style={[styles.inputStyle, styles.multiLineStyle]}
          placeholder="How can we help you"
          value={message}
          onChangeText={(value) => setMessage(value)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed all Term and Conditions.*
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "#4630EB" : "grey" },
        ]}
        onPress={submit}
        disabled={!agree}
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
  },
  multiLineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_300Light",
  },
});
