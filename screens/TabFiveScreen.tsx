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
          latitude:35.6764,
          longitude: 139.6993,
        }}
        title="Meiji Shrine"
        description="fun art facility"
      />
      <Marker
        coordinate={{
          latitude:35.6595,
          longitude: 139.7005,
        }}
        title="Shibuya Crossing"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.6591,
          longitude: 139.7006,
        }}
        title="Hachiko Statue "
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.7023,
          longitude: 139.7745,
        }}
        title="Akihabara"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.62125,
          longitude: 139.688014,
        }}
        title="Starbucks Reserve Roastery Tokyo "
        description="fun art facility"
      />
      <Marker
        coordinate={{
          latitude:35.6193,
          longitude: 139.7764,
        }}
        title="Miraikan"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.6264,
          longitude: 139.7831,
        }}
        title="teamLab Borderless"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.6374,
          longitude: 139.7376,
        }}
        title="Sengakuji Temple"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.6374,
          longitude: 139.7363,
        }}
        title="Yokohama"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.3167,
          longitude: 139.5362,
        }}
        title="Great Buddha of Kamakura "
        description="fun art facility"
      />
      <Marker
        coordinate={{
          latitude:34.9671,
          longitude: 135.7727,
        }}
        title="Fushimi Inari Shrine and Torii Gates"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.646572,
          longitude: 139.653244,
        }}
        title="Arashiyama Bamboo Grove"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:34.6851,
          longitude: 135.8084,
        }}
        title="Nara"
        description="NHK broadcasting studio"
      />
      <Marker
        coordinate={{
          latitude:35.2919,
          longitude: 139.5726,
        }}
        title="Zushi Beach"
        description="NHK broadcasting studio"
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
