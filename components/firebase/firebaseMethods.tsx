import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export async function registration(email:string, password:string, lastName:string, firstName:string) {
  // return Promise.resolve("Done");

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      }).catch(err=>{
        console.log(err);
        Alert.alert("Error in firestore:",err.message);
      });
      return Promise.resolve(currentUser);

  } catch (err) {
    return Promise.reject(err);
  }
}

export async function signIn(email:string, password:string) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return Promise.resolve(firebase.auth().currentUser);
  } catch (err) {
    Alert.alert("Error", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}



export async function sendResetEmail(email:string) {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
  } catch (err) {
    Alert.alert('Cannot send reset email', err.message);
  }
}