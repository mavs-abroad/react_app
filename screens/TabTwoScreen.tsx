import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <MapView
    style= {styles.map}
    region={{
      latitude: 35.6762,
      longitude:139.6503,
      latitudeDelta: 0.5,
      longitudeDelta: 0.9,
    }}
    >
      <Marker
        coordinate={{
          latitude:35.6491,
          longitude: 139.7898,
        }}
        title="teamLab Planets TOKYO"
        description="fun art facility"
      />
      <Marker
        coordinate={{
          latitude:35.6651,
          longitude: 139.6967,
        }}
        title="NHK Studio Park"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.4550,
          longitude:139.6314,
        }}
        title="Yokohama Landmark Tower"
        description="the second tallest building and 4th tallest structure in Japan"
      />
    </MapView>
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
