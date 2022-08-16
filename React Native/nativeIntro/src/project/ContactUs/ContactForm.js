import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";
import React, { useState } from "react";
// import AppLoading from "expo-app-loading";

const ContactForm = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    // return Alert.alert(userName, password);
    if (userName === "Abba" && password == "jabba") {
      Alert.alert(`ThankYou ${userName}`);
      setUserName("");
      setPassword("");
      setAgree(false);
      navigation.navigate("Home", { myName: `${userName}` });
    } else {
      Alert.alert(`Bkl ${userName} glat initials`);
    }
  };

  return (
    <View style={styles.mainConatainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        You can reach us any time via Abba Dabba Jabba
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(name) => setUserName(name)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(pass) => setPassword(pass)}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "blue" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have readd and agreed with this TC
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "blue" : "grey" },
        ]}
        disabled={!agree}
        onPress={() => submit()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  mainConatainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    // fontFamily: "bold",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    // fontFamily: "regular",
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    // fontFamily: "regular",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    // fontFamily: "regular",
    fontSize: 18,
  },
  wrapper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  wrapperText: {
    marginLeft: 10,
  },
  buttonStyle: {
    marginTop: 40,
    textAlign: "center",
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
