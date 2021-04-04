import { ImageBackground, StyleSheet, View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut, sendResetEmail } from '../components/firebase/firebaseMethods';
export default function ResetScreen({ navigation }) {

    const [email,setEmail]= useState("");
   

    return (<View style={styles.background}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Send password reset email</Text>
        </View>
       
                <TextInput placeholder="email" style={styles.inputs} onChangeText={e => setEmail(e)} />

           
        <TouchableOpacity style={styles.button} onPress={() => {
            sendResetEmail(email);
            Alert.alert("Success","Successfully sent reset request");
        }}>
            <Text style={styles.buttonText}>Reset password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate("Login");
        }}>
            <Text style={styles.buttonText}>Back to login</Text>
        </TouchableOpacity>
    </View>)


};

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
    inputs: {
        fontSize:20,
      
        borderBottomColor:'red',
        borderBottomWidth:2,
        alignSelf:"stretch",
        marginHorizontal:25, 
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