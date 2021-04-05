import * as React from 'react';


import {PureComponent} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,Button,ScrollView} from 'react-native';
import * as Linking from 'expo-linking';

export default class App extends PureComponent {
  render() {
    let {container, cardText, card, cardImage} = styles
    return (
      <ScrollView style={container}>
        <TouchableOpacity style={styles.button} onPress={_handleOpenUTASafety}>
          <Image style={cardImage} source={{ uri: 'https://studyabroad.uta.edu/accounts/C5D1D58E3088A42391B6FF5F023253CC/themes/stockassets/banner%202.png' }} />
          <Text style={cardText}>UTA Health and Safety</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={_handleOpenEmergency}>
          <Image style={cardImage} source={{ uri: 'https://www.2st.com.au/images/emergency-information-contact-slide.jpg' }} />
          <Text style={cardText}>Emergency Contact Info</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
  const _handleOpenUTASafety = () => {
    Linking.openURL('https://studyabroad.uta.edu/index.cfm?FuseAction=Abroad.ViewLink&Parent_ID=0&Link_ID=4D7E02C2-BCDE-E7F3-5680F6FF6D9FEC06');
  };
  
  const _handleOpenEmergency = () => {
    Linking.openURL('https://jp.usembassy.gov/u-s-citizen-services/emergency-contact/calling-for-help/');
  };


const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  cardText: {
    fontSize: 30,
    padding: 10,
  },
  card: {
    backgroundColor: '#FF8C00',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#FF8C00',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
