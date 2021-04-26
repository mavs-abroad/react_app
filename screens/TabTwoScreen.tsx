import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import {PureComponent} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,Button,ScrollView} from 'react-native';
import * as Linking from 'expo-linking';
//import Modal from 'react-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends PureComponent {
  render() {
    // let {container, cardText, card, styles.cardImage} = styles
    return (
      <View>
      {/* <Modal style ={styles.modal} visible={true}>
        <Text>Hello</Text>
      </Modal> */}
      <ScrollView style={styles.container}>
        
        <TouchableOpacity style={styles.button} /*onPress={_handleMeiji}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/meiji.jpg')} />
          <Text style={styles.cardText}>Meiji Shrine</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/shibuya.jpg')} />
          <Text style={styles.cardText}>Shibuya Crossing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/hachiko.jpg')} />
          <Text style={styles.cardText}>Hachiko Statue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/akihabara.jpg')} />
          <Text style={styles.cardText}>Akihabara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/starbucks.jpg')} />
          <Text style={styles.cardText}>Starbucks Reserve Roastery Tokyo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/miraikan.jpg')} />
          <Text style={styles.cardText}>Miraikan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/teamlabs.jpg')} />
          <Text style={styles.cardText}>teamLab Borderless</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/sengakuji.jpg')} />
          <Text style={styles.cardText}>Sengakuji Temple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/yokohama.jpg')} />
          <Text style={styles.cardText}>Yokohama</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/buddha.jpg')} />
          <Text style={styles.cardText}>Great Buddha of Kamakura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/gates.jpg')} />
          <Text style={styles.cardText}>Fushimi Inari Shrine and Torii Gates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/bamboo.jpg')} />
          <Text style={styles.cardText}>Arashiyama Bamboo Grove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/nara.jpg')} />
          <Text style={styles.cardText}>Nara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={_handleOpenUTASafety}*/>
          <Image style={styles.cardImage} source={require('../assets/images/places/zushi.jpg')} />
          <Text style={styles.cardText}>Zushi Beach</Text>
        </TouchableOpacity>
        
      </ScrollView>
      </View>
    )
  }
}

const _handleMeiji = () => {
  // const navigation = useNavigation();
  // navigation.navigate("Places",{id:"meiji"});
};

const _handleOpenUTASafety= () => {
  Linking.openURL('https://jp.usembassy.gov/u-s-citizen-services/emergency-contact/calling-for-help/');
};


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //marginTop: 50,
  },
  modal:{
    flex:1,
  },
  cardText: {
    fontSize: 25,
    padding: 10,
    color: "#0000ff",
    backgroundColor: '#ff7f50',
    width:"100%",
  },
  card: {
    marginBottom: 50,
    //marginLeft: '2%',
    width: '96%',
    //height: "80%",
    shadowColor: '#FF8C00',
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardImage: {
    width: '100%',
    height: "300%",
    resizeMode: 'stretch',
    
  },
  button: {
    alignItems: 'center',
    justifyContent: "center",
    flex: 1/18,
    padding: 10,
    marginBottom:150,
    
  },
});


const DATA = [
  {
    title: 'Meiji Shrine',
    //data: "Zushi Beach is popular for all ages, with windsurfing, paddle boarding, swimming, hotels, and restaurants. It's facing Sagami Bay, and on a clear day, you can see Mount Fuji. It's also the site for Summer fireworks festivals, film festivals, and \"Yabusame\", where mounted archers shoot at targets while galloping on a horse. There are some restrictions, such as no tattoos, alcohol, barbecues, or loud music. You cannot wear your swimsuit walking to the beach, but you can change clothes there. It's a nice getaway from the city!",
  },
  {
    title: 'Shibuya Crossing',
    //data: 'Meiji Shrine ( Meiji Jingū) is a Shinto shrine dedicated to the first emperor of modern Japan, Emperor Meiji and Empress Shoken. It is the most popular and visited the shrine in Japan, with 3 million visitors attending for the traditional first prayers of the New Year (Hatsumode). You enter through a large Torii gate, and walk a 10-minute path to the main buildings, surrounded by a forest of trees and the sounds of nature. It\'s a popular place for weddings, events, and rituals. It\'s open every day and admission is free, but you should bring cash if you wish to visit the museum, the inner garden, the gift shops, restaurant, or café."
  },
  // {
  //   title: "Hachiko Statue",
  //   data: [ 'Dōitashimashite','どういたしまして'],
  // },
  // {
  //   title: 'Akihabara',
  //   data: ['Sumimasen','すみません'],
  // },
  // {
  //   title: 'Starbucks Reserve Roastery Tokyo',
  //   data: ['Gomennasai', 'ごめんなさい'],
  // },
  // {
  //   title: 'Miraikan',
  //   data: ['Eigo o hanasemasu ka', 'えいごをはなせますか'],
  // },
  // {
  //   title: "teamLab Borderless",
  //   data: [ 'Dōitashimashite','どういたしまして'],
  // },
  // {
  //   title: 'Sengakuji Temple',
  //   data: ['lie','いいえ'],
  // },
  // {
  //   title: 'Yokohama',
  //   data: ['Sumimasen','すみません'],
  // },
  // {
  //   title: 'Great Buddha of Kamakura',
  //   data: ['Gomennasai', 'ごめんなさい'],
  // },
  // {
  //   title: 'Fushimi Inari Shrine and Torii Gates',
  //   data: ['Gomennasai', 'ごめんなさい'],
  // },
  // {
  //   title: 'Arashiyama Bamboo Grove',
  //   data: ['Eigo o hanasemasu ka', 'えいごをはなせますか'],
  // },
  // {
  //   title: 'Nara',
  //   data: ['Eigo o hanasemasu ka', 'えいごをはなせますか'],
  // },
  // {
  //   title: 'Zushi Beach',
  //   data: [ 'hai','はい'],
  // },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
