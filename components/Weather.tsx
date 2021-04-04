import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../components/WeatherConditions';

const Weather = ({ weather, temperature, city, country }) => {
  return (
    // <View
    //   style={[
    //     styles.weatherContainer,
    //     { /*backgroundColor: weatherConditions[weather].color */}
    //   ]}>
    //   <View style={styles.headerContainer}>
    //   <Text style={styles.title}>{city}</Text>
    //   {/* <Ionicons name={weatherConditions[weather].icon} size={70} /> */}
    //     {/* <MaterialCommunityIcons
    //       size={80}
    //       name={weatherConditions[weather].icon}
    //       color={'#fff'}
    //     />
    //     <Text style={styles.tempText}>{temperature}˚F</Text> */}
    //   </View>
    //   <View style={styles.subHeaderContainer}>
    //   <Ionicons name={weatherConditions[weather].icon} size={40} />
    //   <Text style={styles.tempText}>{temperature}˚F</Text>
    //   </View>
    //   <View style={styles.bodyContainer}>
    //     <Text style={styles.title}>{weatherConditions[weather].title}</Text>
    //     <Text style={styles.subtitle}>
    //       {weatherConditions[weather].subtitle}
    //     </Text>
    //   </View>
    // </View>
    <View
       style={[
         styles.weatherContainer,
          { backgroundColor : weatherConditions[weather].color}
       ]}>
        <View style ={styles.headerContainer} >
          <Ionicons name={weatherConditions[weather].icon} size={60} color="#fff"/>
          <Text style={styles.tempText}>{temperature}˚F</Text>
          <Text style ={styles.city_name}>{city}</Text>
          <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        </View>
      </View>


  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    padding:20,
  },
  city_name:{
    fontSize:70,
    color: "#fff",
  },
  tempText:{
    fontSize:40,
    color: "#fff",
  },
  title:{
    fontSize:40,
    color: "#fff",
  }

});

export default Weather;
