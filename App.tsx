import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBIkzUAEQTEF6h4K8Ui_Z8mF6WeM1f1Ff4",
  authDomain: "mavs-abroad-dda3b.firebaseapp.com",
  databaseURL: "https://mavs-abroad-dda3b-default-rtdb.firebaseio.com",
  projectId: "mavs-abroad-dda3b",
  storageBucket: "mavs-abroad-dda3b.appspot.com",
  messagingSenderId: "583288162608",
  appId: "1:583288162608:web:e6cba5ee73bad917d7a0f5",
  measurementId: "G-F8WJE0L2W1"
};

export default function App() {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig);
  }
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
