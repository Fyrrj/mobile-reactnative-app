import React from "react";
import { View, StyleSheet } from "react-native";
import StartScreen from "./screens/StartScreen";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmn6mWPKoegASr--SwzgSa9oCqVWBMPHQ",
  authDomain: "imagerate-1806c.firebaseapp.com",
  databaseURL: "https://imagerate-1806c.firebaseio.com",
  projectId: "imagerate-1806c",
  storageBucket: "imagerate-1806c.appspot.com",
  messagingSenderId: "867023774766",
  appId: "1:867023774766:web:33790c92c387884ae96bbf",
  measurementId: "G-MFPTQYZY9P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View>
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
