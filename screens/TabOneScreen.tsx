import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.weather}> Current Weather at "Location"</Text>
      <View style={styles.weather_container}></View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.notif}> Notifications</Text>
      <View style={styles.notif_container}></View>
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical:20,
  },
  notif: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical:20,
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
  weather_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notif_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
