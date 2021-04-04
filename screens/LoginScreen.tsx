import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native';

import { RootStackParamList } from '../types';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { registration, signIn } from '../components/firebase/firebaseMethods';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';

export default function LoginScreen (){

    
       const  [message,setMessage] = React.useState("");
       const  [email,setEmail] = React.useState("");
       const  [password,setPassword] = React.useState("");
const [disabled,setDisabled] = React.useState(false);
      const navigation = useNavigation();
     

    function initializeState(){
        setMessage("");
        setEmail("");
        setPassword("");
    }

      
    function handleLogin(){
        setDisabled(true);
        signIn(email,password).then((currentUser)=>{
            if(currentUser != null){
                navigation.navigate("Root");
            }
        }).catch(err=>{

        }).finally(()=>{
            setDisabled(false);
        })
        
    }

   function handleForget(){
       navigation.navigate("PasswordReset");
    }

    
        return (
            <View style={styles.container}>
                <Text style={{textAlign:"center"}}>Welcome!! Let's login</Text>

                <View>
                <TextInput placeholder="Email" style={styles.inputs} onChangeText={e => setEmail(e)} />

                </View>
                <View> 
                <TextInput placeholder="Password" value={password} secureTextEntry={true} style={styles.inputs} textContentType="password" onChangeText={e => setPassword(e)} />

                </View>
                <Text>{message}</Text>
                <View style={styles.button}>
                <Button title="Login" disabled={disabled}  onPress={()=>{handleLogin()}}>Signin</Button>
                </View>
                <View style={styles.button}>
                <Button title="Forget Password"   onPress={()=>{handleForget()}}>Forget Password</Button>
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
        marginTop:50,
        fontSize:20,
        marginLeft:10,
        marginRight:10,
        borderBottomColor:'red',
        borderBottomWidth:2, 
      },
      button:{
          marginTop:20
      }
});
