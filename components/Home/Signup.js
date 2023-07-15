import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import firebase from "../../firebase";

export default function Signup({ navigation }) {
  const [Name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [buttonDisable, setButtonDisable] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
        navigation.navigate("Login");
        verifyUser();
        updateProfile(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
    console.log(Name, mobile, email, password);
  };

  const updateProfile = (user) => {
    user == null ? console.log("user is null") : console.log(Name, mobile);
    user
      .updateProfile({
        displayName: Name,
        phoneNumber: mobile,
      })
      .then(() => {
        console.log("Profile updated successfully");
        navigation.navigate("Login");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyUser = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        console.log("Email verification sent!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyPassword = () => {
    password === confirmPassword
      ? handleSignUp()
      : setErrorMessage("Password doesn't match");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.appTitle}>Sign up</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#101010"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile Number"
          keyboardType="numeric"
          placeholderTextColor="#101010"
          maxLength={10}
          onChangeText={(mob) => setMobile(mob)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#101010"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#101010"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Re-Enter Password"
          placeholderTextColor="#101010"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <Text>{errorMessage}</Text>
      <TouchableOpacity
        onPress={verifyPassword}
        style={styles.loginBtn}
        activeOpacity={0.7}
        disabled={buttonDisable}
      >
        <Text style={styles.notuser}>Signup</Text>
      </TouchableOpacity>

      <View style={styles.notuserBtn}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.push("Login")}
        >
          <Text>Have an account ? Login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },

  image: {
    marginTop: 100,
    marginBottom: 40,
    height: 50,
    width: 50,
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    elevation: 5,
    // alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignContent: "center",
  },

  forgot_button: {
    height: 30,
    marginTop: 10,
    marginBottom: 20,
  },

  loginBtn: {
    width: "25%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#48C9B0",
  },

  notuserBtn: {
    height: 30,
    marginTop: 10,
    marginBottom: 20,
    alignSelf: "center",
  },

  appTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    fontFamily: "sans-serif",
    marginBottom: 30,
    marginTop: 20,
  },
});
