import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import firebase from "../firebase";
import HeaderButtons from "../components/HeaderButtons";
import EmptyCart from "../components/Cart/EmptyCart";
import { Button } from "@react-native-material/core";
import ViewCart from "../components/Cart/ViewCart";
import { windowWidth, windowHeight } from "../components/export";
import BottomBar from "../components/BottomBar";
import BufferScreen from "../components/BufferScreen";
import NotLoggedIn from "../components/Cart/NotLoggedIn";
import { useSelector } from "react-redux";

const db = firebase.firestore();
const user = firebase.auth().currentUser;
// export const Phones = [
//     {
//       "data" :{
//     "BackCamera": "48 MP,(wide) 8 MP(telephoto) 13 MP(ultrawide)",
//     "Battery": "4000mAh",
//     "Chipset": "Qualcomm Snapdragon 730",
//     "Colors": "Carbon black, Red flame, Glacier blue, Pearl White",
//     "Display": "Super Amoled HDR, 1080 x 2340 pixels, 19.5:6",
//     "FrontCamera": "Motorized pop-up 20 MP, f/2.2, (wide), 1/3.4\", 0.8µm",
//     "Glass": "Gorilla Glass 5",
//     "Gpu": "Adreno 618",
//     "Image": {
//       "img1": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-5.jpg",
//       "img2": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-6.jpg",
//       "img3": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-k20pro-7.jpg",
//     },
//     "LaunchDate": "2019, May",
//     "Memory": {
//       "option1": "6GB",
//       "option2": "8GB",
//       "option3": "12GB",
//     },
//     "Name": "Xioami Redmi K20",
//     "Network": "GSM/HSPA/LTE",
//     "Os": "Android 9.0 Upgradable to Android 11",
//     "Price": "18999",
//     "Rating": "4.7",
//     "Sound": "Loudspeaker:      Yes 3.5mm jack: Yes",
//     "Storage": {
//       "option1": "64GB",
//       "option2": "128GB",
//       "option3": "256GB",
//       "option4": "512GB",
//     },
//     "Weight": "191g",
//   },
//   "storageSelection":{
//     "Memory": "6GB",
//     "Storage": "64GB",
//   },
// },
// ];

export default function Cart({ route, navigation }) {
  const [Phones, setPhones] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [cartTotal, setCartTotal] = React.useState(0);
  const user = firebase.auth().currentUser;

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
    setIsLoading(false);
  };

  Phones[0] == null ? getCart() : "";
  // console.log(Phones);

  const getCartTotal = async () => {
    var cartT = 0;
    Phones.map((item) => {
      item.Price ? (cartT += parseInt(item.Price)) : (cartT += item.data.Price);
    });
    return cartT;
  };

  getCartTotal().then((result) => {
    setCartTotal(result);
    console.log(result);
  });

  useEffect(() => {
    let Total = 0;
    Phones.map((item) => (Total += item?.Price));
    console.log(Total);
  }, [Phones]);

  const buttonHandler = () => {
    navigation.navigate("PhoneList");
  };

  return (
    <>
      {isLoading == true ? (
        <BufferScreen />
      ) : Phones.length <= 0 ? (
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <HeaderButtons
            title={"Cart"}
            navigation={navigation}
            backButton={true}
          />
          <EmptyCart navigation={navigation} />
          <Button
            title="Continue Shopping"
            titleStyle={{ fontSize: 10 }}
            onPress={buttonHandler}
            style={style.button}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <HeaderButtons title={"Cart"} navigation={navigation} />
          <>
            <ViewCart
              navigation={navigation}
              data={Phones}
              cartValue={cartTotal}
              setCartValue={setCartTotal}
            />
            <BottomBar
              title="Proceed"
              navigation={navigation}
              CallingPage="cart"
              data={Phones}
              message={true}
              cartValue={cartTotal}
            />
          </>
        </View>
      )}
    </>
  );
}

const style = StyleSheet.create({
  button: {
    width: "30%",
    position: "absolute",
    bottom: windowHeight * 0.05,
    right: windowWidth * 0.05,
  },
});
