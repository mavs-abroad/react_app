import * as React from 'react';
import { Dimensions, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.weather_container}>
        <Text style = {styles.weather_text}>Sunny</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather_container: {
    flex: 6,
    // backgroundColor: "aqua",
    width:Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
