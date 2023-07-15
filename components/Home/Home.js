import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { windowHeight, windowWidth } from "../export";
import firebase from "../../firebase";
import ProfilePicture from "react-native-profile-picture";
import { useSelector, useDispatch } from "react-redux";

export default function Home(props) {
  const [user, setUser] = useState("");

  const navigation = props.navigation;

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("custom-device");
    } catch (e) {
      console.log(e);
    }
    console.log("Custom Device clear");
  };

  const us = useSelector((state) => state.user);

  useEffect(() => {
    getData().then((data) => setUser(data));
    removeValue();
  }, []);

  const Box = (props) => (
    <TouchableOpacity
      style={styles.Box}
      activeOpacity={0.5}
      onPress={() => navigation.navigate(props.screen)}
    >
      <Text style={styles.ContainerText}>{props.title}</Text>
    </TouchableOpacity>
  );
  const Profile = () => (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <ProfilePicture
        isPicture={false}
        user={user != null ? user?.displayName : "User"}
        shape="circle"
        backgroundColor="black"
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.HomeContainer}>
      <View style={styles.topBar}>
        <Text style={styles.WelcomeText}>
          Hi, {user != null ? user?.displayName : "User"} 👋{" "}
        </Text>
        <Profile />
      </View>
      <View style={styles.BoxScroller}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            title="Build a Phone"
            screen="Customization"
            navigation={navigation}
          />
          <Box title="Checkout our devices" screen="PhoneList" />
          <Box title="Let us build one for you" screen="GenerateDesign" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  BoxScroller: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    justifyContent: "center",
    // alignItems: 'center',
    alignSelf: "center",
  },
  Box: {
    backgroundColor: "white",
    height: windowHeight * 0.5,
    width: windowWidth * 0.6,
    elevation: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
  },
  ContainerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  WelcomeText: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    margin: 15,
  },
});
