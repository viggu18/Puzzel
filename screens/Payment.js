import { View, Text, StyleSheet, ScrollView, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import PayOption from "../components/Payments/PayOptions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { windowWidth, windowHeight } from "../components/export";
import firebase from "../firebase";
import HeaderButtons from "../components/HeaderButtons";
import BottomBar from "../components/BottomBar";
import Paytm from "../assets/images/payment/Paytm.png";
import UPI from "../assets/images/payment/UPI.png";
import Card from "../assets/images/payment/Card.png";
import COD from "../assets/images/payment/COD.png";
import NetBank from "../assets/images/payment/NetBank.png";
const db = firebase.firestore();

export default function Payment({ route, navigation }) {
  const [paymentOption, selectedPaymentOption] = useState("");
  const [Phones, setPhones] = useState([]);
  const [user, setUser] = useState("");

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      return jsonValue != null ? setUser(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // error reading value
    }
  };

  const getCart = async () => {
    const docRef = db.collection("users/" + user.email + "/cart");
    await docRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          Phones.push(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const AddData = () => {
    Phones.map((item) => {
      item["Address"] = route.params;
      item["user"] = user.email;
    });
  };
  const AddToOrders = (data) => {
    let defName = data.Name ? data.Name : data.data?.Name;
    defName
      ? db
          .collection("users/" + user.email + "/orders")
          .doc(defName)
          .set(data)
          .catch((error) => {
            console.log(error);
          })
      : "";
  };

  const ClearCart = async () => {
    const docRef = db.collection("users/" + user.email + "/cart");
    await docRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          db.collection("users/" + user.email + "/cart")
            .doc(doc.id)
            .delete()
            .then(() => {
              console.log("Document successfully deleted!");
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const AddOrders = () => {
    !paymentOption
      ? ToastAndroid.showWithGravityAndOffset(
          "Select an Payment Option",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          100
        )
      : // AddData()
        Phones.map((item) => {
          AddToOrders(item);
        });
    ToastAndroid.showWithGravityAndOffset(
      "Order Placed Successfully",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      100
    );
    ClearCart();
    navigation.pop(4);
    navigation.pop(2);
  };

  useEffect(() => {
    getCart();
    getData();
  }, []);

  console.log(route.params);
  return (
    <View style={style.PaymentContainer}>
      <HeaderButtons navigation={navigation} title="Payment" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.PaymentContainer}
      >
        <PayOption
          label="UPI"
          img={UPI}
          selectedPaymentOption={selectedPaymentOption}
          paymentOption={paymentOption}
        />
        <PayOption
          label="Paytm"
          img={Paytm}
          selectedPaymentOption={selectedPaymentOption}
          paymentOption={paymentOption}
        />
        <PayOption
          label="Card"
          img={Card}
          selectedPaymentOption={selectedPaymentOption}
          paymentOption={paymentOption}
        />
        <PayOption
          label="NetBanking"
          img={NetBank}
          selectedPaymentOption={selectedPaymentOption}
          paymentOption={paymentOption}
        />
        <PayOption
          label="Cash on Delivery"
          img={COD}
          selectedPaymentOption={selectedPaymentOption}
          paymentOption={paymentOption}
        />
      </ScrollView>
      <BottomBar title={"Place Order"} handler={AddOrders} />
    </View>
  );
}

const style = StyleSheet.create({
  PaymentContainer: {
    flex: 1,
  },
});
