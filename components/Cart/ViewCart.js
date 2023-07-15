import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Items from "./Items";
import { ScrollView } from "react-native-gesture-handler";
import Bill from "./Bill";
import firebase, { db } from "../../firebase";
import CustomItem from "./CustomItem";

export default function ViewCart(props) {
  console.log(props.data);

  const user = firebase.auth().currentUser;

  const DeleteItem = (Item) => {
    Item.Price
      ? props.setCartValue(props.cartValue - Item.Price)
      : props.setCartValue(props.cartValue - Item.data.Price);
    db.collection("users/" + user.email + "/cart")
      .doc(Item.Name)
      .delete()
      .then(() => {
        props.data.splice(props.data.indexOf(Item), 1);
        ToastAndroid.showWithGravityAndOffset(
          "Removed",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0,
          100
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {props.data.map((item, index) =>
          !item.componentPosition ? (
            <Items
              key={index}
              data={item}
              DeleteItem={DeleteItem}
              cartValue={props.cartValue}
              setCartValue={props.setCartValue}
              display={props.display}
            />
          ) : (
            <CustomItem
              key={index}
              data={item}
              DeleteItem={DeleteItem}
              cartValue={props.cartValue}
              setCartValue={props.setCartValue}
              display={props.display}
            />
          )
        )}
        {!props.seeOrders ? <Bill cartValue={props.cartValue} /> : <></>}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  checkoutbtn: {
    elevation: 20,
    width: "25%",
    height: "10%",
    backgroundColor: "white",
    position: "absolute",
    bottom: "5%",
    right: "5%",
    borderRadius: 50,
    alignItems: "center",
  },
});
