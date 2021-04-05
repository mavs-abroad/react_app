import { ImageBackground, StyleSheet, View, Text, Alert, Button, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut, sendResetEmail } from '../components/firebase/firebaseMethods';
export default function ResetScreen({ navigation }) {

    const [email, setEmail] = useState("");


    return (<View style={styles.background}>
        <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Image
                style={styles.image}

                source={require('./../assets/images/splash.png')}
            />
        </View>

        <Text style={styles.title}>Send password reset email</Text>


        <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>

            <TextInput placeholder="Email" style={styles.inputs} onChangeText={e => setEmail(e)} />

        </View>


        <Button title="Reset" onPress={() => {
            sendResetEmail(email);
            Alert.alert("Success", "Successfully sent reset request");
        }}></Button>

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
        paddingHorizontal: 20,
        backgroundColor:"white",
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'navy',
        textAlign: 'center'
    },
    button: {
        marginTop: 20
    },
    signupButton: {
        marginTop: 20,
        textAlign: "center"
    },
    inputGroup: {
        marginVertical: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    label: {
        flex: 1
    },
    inputs: {
        flex: 3,
        borderBottomWidth: 2,
        borderBottomColor: "blue"
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: "center"
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center",
    }
});