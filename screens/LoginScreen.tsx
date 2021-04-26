//import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
//import { StyleSheet, Text, TouchableOpacity, View, Button, Alert, Image } from 'react-native';
import { StyleSheet, Text, View, Button, Image,KeyboardAvoidingView } from 'react-native';
//import { RootStackParamList } from '../types';
import { TextInput } from 'react-native-gesture-handler';
//import * as firebase from 'firebase';
import { registration, signIn } from '../components/firebase/firebaseMethods';
//import { signIn } from '../components/firebase/firebaseMethods';
//import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {

    const [message, setMessage] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [disabled, setDisabled] = React.useState(false);
    const navigation = useNavigation();


    function initializeState() {
        setMessage("");
        setEmail("");
        setPassword("");
    }


    function handleLogin() {
        setDisabled(true);
        signIn(email, password).then((currentUser) => {
            if (currentUser != null) {
                navigation.navigate("Root");
            }
        }).catch(err => {

        }).finally(() => {
            setDisabled(false);
        })

    }

    function handleForget() {
        navigation.navigate("PasswordReset");
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <View style={{ justifyContent: "center", alignItems:"center", padding:20}}>
                <Image
                    style={styles.image}
                    source={require('./../assets/images/splash.png')}

                />
                <Text style={{ textAlign: "center", fontSize: 30, color: "#f48c06", }}>Welcome Maverick!!</Text>
                
                <Text style={{ textAlign: "center", fontSize: 30,color: "#f48c06",  }}>Log In</Text>
            </View>


            <View style={styles.inputGroup}>

                <TextInput placeholder="Email" style={styles.inputs} onChangeText={e => setEmail(e)} />
                <TextInput placeholder="Password" value={password} secureTextEntry={true} style={styles.inputs} textContentType="password" onChangeText={e => setPassword(e)} />

            </View>


            <Text>{message}</Text>

            <Button title="LOG IN" titleStyle={{}} disabled={disabled} onPress={() => { handleLogin() }}/>

            <View style={styles.button}>
                <Button title="Forget Password" onPress={() => { handleForget() }}>Forget Password</Button>
            </View>

            <View style={styles.signupButton}>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text style={{textAlign:"center"}}>Back to sign up </Text>

                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        //padding: 10,
        //paddingHorizontal: 15,
        //paddingTop:40,
        //marginTop:100,
    },
    inputs: {
        //flex: 3,
        fontSize: 20,
        //marginLeft: 10,
        //marginRight: 10,
        //margin:30,
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        textAlign:"center",
        paddingBottom:10,
        marginHorizontal:50,
        marginVertical:10,
        //color : "blue",
    },
    button: {
        marginTop: 20,
    },
    signupButton: {
        marginTop: 20,
        textAlign:"center"
    },
    inputGroup: {
        //marginVertical: 10,
        //alignItems: "center",
        //flexDirection: "row",
    },
    label: {
        flex: 1,
    },
    image: {
        width: 240,
        height: 240,
        resizeMode: "center",
    }
});
