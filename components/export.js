import { Dimensions } from "react-native";
import firebase from '../firebase';

const db = firebase.firestore();

export const user = firebase.auth().currentUser;

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

// export const navigationReset = (navigation, routeName) => {
//   navigation.dispatch(
//     NavigationActions.reset({
//       index: 0,
//       key: null,
//       actions: [NavigationActions.navigate({ routeName })]
//     })
//   );
// };


export const navigationReset = (navigation) => {
    navigation.reset({     
        index: 0,
        routes: [{ name: 'PhoneList' }]
    });
};