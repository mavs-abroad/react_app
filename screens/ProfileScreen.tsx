import { ImageBackground, StyleSheet, View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut } from '../components/firebase/firebaseMethods';
export default function ProfileScreen({ navigation }) {
    let currentUserUID = firebase.auth().currentUser.uid;

    const [firstName,setFirstName]= useState("");
    useEffect(() => {
        async function getUserInfo(){
          try{
            let doc = await firebase
            .firestore()
            .collection('users')
            .doc(currentUserUID)
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setFirstName(dataObj.firstName)
            }
          }catch(err){
              Alert.alert("Error in Firestore",err.message);
          }
        }
        getUserInfo();
      })

    return (<View style={styles.background}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome {firstName}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
            loggingOut();
            navigation.replace('Login');
        }}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>)


};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:"white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 200,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: '#4ecdc4',
        padding: 5,
        margin: '2%'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'navy',
        textAlign: 'center'
    },
    inlineText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'navy',
        textAlign: 'center',
        marginTop: '5%',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    titleContainer: {
        position: 'absolute',
        top: 170,
    },
});