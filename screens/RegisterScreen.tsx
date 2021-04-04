import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Alert, Image } from 'react-native';

import { RootStackParamList } from '../types';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { registration } from '../components/firebase/firebaseMethods';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import Navigation from '../navigation';

export default function RegisterScreen() {

    const [message, setMessage] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [disabled, setDisabled] = React.useState(false);

    const navigation = useNavigation();

    function createAccount() {
        // console.log(state);
        // return;
        setDisabled(true);
        registration(email, password, "", name).then((currentUser) => {
            Alert.alert("Success", "Success!! Please login now.");
            navigation.navigate("Login");

        }).catch(err => {

            Alert.alert("Error", err.message);
            setDisabled(false);
        }).finally(() => {

        })

    }


    function handleLogin() {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <Image
                    style={styles.image}

                    source={require('./../assets/images/splash.png')}
                />
            </View>
            <Text style={{ textAlign: "center", fontSize: 25 }}>Welcome!! Let's get started</Text>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Your name</Text>

                <TextInput placeholder="Name" style={styles.inputs} value={name} onChangeText={e => setName(e)} />

            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Email" style={styles.inputs} value={email} onChangeText={e => setEmail(e)} />

            </View>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Password</Text>

                <TextInput placeholder="Password" secureTextEntry={true} value={password} style={styles.inputs} textContentType="password" onChangeText={e => setPassword(e)} />

            </View>
            <Text>{message}</Text>
            <Button title="Signup" disabled={disabled} onPress={() => { createAccount() }}>Signup</Button>

            <View style={styles.button}>
                <Text style={{ textAlign: "center", marginBottom: 5 }}>Already registered? Login</Text>

                <Button title="Login" onPress={() => { handleLogin() }}>Signin</Button>
            </View>
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
        paddingHorizontal: 15
    },
    inputs: {
        flex: 3,
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
    },
    button: {
        marginTop: 20
    },
    inputGroup: {
        marginVertical: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    label: {
        flex: 1
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: "center"
    }
});
