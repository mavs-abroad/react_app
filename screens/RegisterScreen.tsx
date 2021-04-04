import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';

import { RootStackParamList } from '../types';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { registration } from '../components/firebase/firebaseMethods';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import Navigation from '../navigation';

export default function RegisterScreen (){

    const [message, setMessage] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [disabled, setDisabled] = React.useState(false);

    const navigation = useNavigation();

       function createAccount(){
            // console.log(state);
            // return;
            setDisabled(true);
            registration(email, password, "", name).then((currentUser) => {
                Alert.alert("Success", "Success!! Please login now.");
                navigation.navigate("Login");
                
            }).catch(err => {
                
                Alert.alert("Error", err.message);
                setDisabled(false); 
            }).finally(()=>{
                
            })

        }


    function handleLogin(){
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ textAlign: "center" }}>Welcome!! Let's get started</Text>
                <TextInput placeholder="Name" style={styles.inputs} value={name} onChangeText={e => setName(e)} />

            </View>
            <View>
                <TextInput placeholder="Email" style={styles.inputs} value={email} onChangeText={e => setEmail(e)} />

            </View>
            <View>
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
    },
    inputs: {
        marginTop: 50,
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },
    button: {
        marginTop: 20
    }
});
