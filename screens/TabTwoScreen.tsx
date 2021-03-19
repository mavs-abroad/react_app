import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
    </View>
  );
}

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
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
