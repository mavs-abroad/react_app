
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';

export default function LoadingScreen({ navigation }) {
  useEffect(
     () => {
     

      
    }
  );

  if(firebase.auth().currentUser != null) {
    navigation.replace('Home');
  }else{
    navigation.replace('Signup');
  }

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size='small' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'center',
      padding: 10,
  },
  inputs: {
      marginTop:50,
      fontSize:20,
      marginLeft:10,
      marginRight:10,
      borderBottomColor:'red',
      borderBottomWidth:2, 
    },
});