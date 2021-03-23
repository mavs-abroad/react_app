import * as React from 'react';

import {Component} from 'react';
import {Button, StyleSheet} from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Open UTA Study Abroad Health and Safety"
          onPress={this._handleOpenWithLinking}
          style={styles.button}
        />
        <Button
          title="Emergency Phone Numbers"
          onPress={this._handleOpenEmergency}
          style={styles.button}
        />
      </View>
    );
  }

  _handleOpenWithLinking = () => {
    Linking.openURL('https://studyabroad.uta.edu/index.cfm?FuseAction=Abroad.ViewLink&Parent_ID=0&Link_ID=4D7E02C2-BCDE-E7F3-5680F6FF6D9FEC06');
  };
  _handleOpenEmergency = () => {
    Linking.openURL('https://jp.usembassy.gov/u-s-citizen-services/emergency-contact/calling-for-help/');
  };
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginVertical: 10,
  },
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
