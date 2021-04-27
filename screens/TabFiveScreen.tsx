import * as React from 'react';
import MapView, { Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, BackHandler,Image } from 'react-native';
import TabOneScreen from "../screens/TabOneScreen";
import openMap from 'react-native-open-maps';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';

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
      >
        <Callout  style = {styles.callout} onPress={handleMeiji}>
          <Text style = {styles.calloutTitle}>Meiji Shrine</Text>
          {/* <Text>Meiji Shrine ( , Meiji Jingū) is a Shinto shrine dedicated to the first emperor of modern Japan, Emperor Meiji and Empress Shoken. It is the most popular and visited the shrine in Japan, with 3 million visitors attending for the traditional first prayers of the New Year (Hatsumode). You enter through a large Torii gate, and walk a 10-minute path to the main buildings, surrounded by a forest of trees and the sounds of nature. It's a popular place for weddings, events, and rituals. It's open every day and admission is free, but you should bring cash if you wish to visit the museum, the inner garden, the gift shops, restaurant, or café.</Text> */}
          <Text style={{padding:10,marginRight:10}}>Go to Harajuku Station on the JR Yamanote Line. Exit the station to the right and walk for about one minute. The entrance will be on the right.</Text>
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.6595,
          longitude: 139.7005,
        }}
        title="Shibuya Crossing"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleShibayu}>
          <Text style = {styles.calloutTitle}>Shibuya Crossing</Text>
          {/* <Text>Shibuya Crossing (also known as the Scramble intersection) is one of the most iconic Tokyo spots. When traffic stops, thousands of people cross the intersection in all directions. On the ground, it's a lively and energetic rush while you cross the street, surrounded by the lights, sounds, and people of the city. Step into the Starbucks overlooking the street for a view from above while sipping a latte, or check it out from the 360° open-air observation deck located on the roof of the Shibuya Scramble Square skyscraper, called Shibuya Sky. You've probably seen this intersection before, in movies and music videos. It's surrounded by shops, cafes, restaurants, and constant energy. A must-see spot in Tokyo!</Text> */}
          <Text style={{padding:10,marginRight:10}}>From Shibuya station, take the Hachiko exit. You can see it from the Hachiko statue!</Text>
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
        </Callout>
        </Marker>
      <Marker
        coordinate={{
          latitude:35.6591,
          longitude: 139.7006,
        }}
        title="Hachiko Statue "
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleHachi}>
          <Text style = {styles.calloutTitle}>Hachiko Statue</Text>
          {/* <Text>Hachikō ( , 10 November 1923 – 8 March 1935) was a Japanese Akita dog known for his remarkable loyalty. He would leave home and meet his owner, Hidesaburō Ueno, at Shibuya Station each evening after his commute from work at Tokyo Imperial University. One day Ueno suffered a cerebral hemorrhage during a lecture, and never returned to the station where Hachiko waited. Hachiko continued to wait for over nine years following Ueno's death. Commuters and station staff began to bring him food and treats as word of his faithfulness spread.</Text> */}
          {/* <Text>Hachikō became a national sensation. His faithfulness to his master's memory impressed the people of Japan as a spirit of family loyalty to which all should strive to achieve. Teachers and parents used Hachikō's vigil as an example for children to follow. A bronze statue was erected in his honor at Shibuya Station in 1948, which serves as a popular meeting spot today.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>From Shibuya Station. Take the Hachikō Exit ( , Hachikō-guchi) on the west side.</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.7023,
          longitude: 139.7745,
        }}
        title="Akihabara"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleAkihabara}>
          <Text style = {styles.calloutTitle}>Akihabara</Text>
          {/* <Text>Akihabara is a shopping district well known for electronics, manga, anime, video games, maid cafés, and arcades. The area grew rapidly after WWII when there was little government oversight. Its nickname became "Electric Town" because the shops there focused on 'futuristic' household electronics and appliances, and then computers, video games, and the gamers that love them. Now you might consider it the center of pop-culture in Japan. It's a clean and safe area to shop for otaku culture items and souvenirs.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>Akihabara Station, on the west side of the station</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.62125,
          longitude: 139.688014,
        }}
        title="Starbucks Reserve Roastery Tokyo "
        //description="fun art facility"
      >
        <Callout  style = {styles.callout} onPress={handleStarbucks}>
          <Text style = {styles.calloutTitle}>Starbucks Reserve Roastery Tokyo </Text>
          {/* <Text>Japan is filled with coffee shops and cafes, but you don't want to miss this coffee experience at the Starbucks Reserve Roastery in Tokyo. The building is beautifully and thoughtfully designed, inspired by Japan's love of craftsmanship, innovation, and excellence. Stepping inside is a wonderland for your senses, with four floors to explore. Exclusive and rare coffees, teas, pastries and merchandise are available.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>Exit Naka-Meguro Station and head northeast on Yamate-Dori Avenue. About a 12 minute walk. The building will be on the right.</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.6193,
          longitude: 139.7764,
        }}
        title="Miraikan"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleMiraikan}>
          <Text style = {styles.calloutTitle}>Miraikan</Text>
          {/* <Text>The National Museum of Emerging Science and Innovation, known as the Miraikan , features many science and technological innovations. There are interactive displays within three permanent exhibits, focused on space, the earth, and sustainability. It includes a large, impressive, LED panel display of the earth (the Geo-Cosmos) with current weather patterns depicted. You'll see a demonstration of Honda’s ASIMO robot, which has opposable thumbs and can walk, run, and kick a soccer ball. There are English audio guides for the permanent exhibits and a dome theater. There is a small admission fee. Inside is a cafe and museum shop.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>5-minute walk from “Tokyo International Cruise Terminal Station</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.6264,
          longitude: 139.7831,
        }}
        title="teamLab Borderless"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleTeamlabs}>
          <Text style = {styles.calloutTitle}>teamLab Borderless</Text>
          {/* <Text>TeamLab Borderless is a digital art museum and an unforgettable visual experience, where you can immerse yourself, interact with, and influence the art. It's an art collection without boundaries, in a museum without a map, created by the art collective teamLab. This is an interdisciplinary group of artists formed in 2001 in Tokyo, Japan. The group refers to themselves as “Ultra-technologists, ” and consists of artists, programmers, engineers, CG animators, mathematicians, and architects. Some of the art changes seasonally, and there are special temporary installations throughout Japan to enjoy. There is an admission fee (about $30 for adults).</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text>A 5-minute walk from Tokyo Teleport Station on the Rinkai Line or 3 minutes walk from Aomi Station on the Yurikamome Line.</Text>
          <Text style={{padding:10,marginRight:10}}>Go to the second floor of Palette Town, and go through the MEGA WEB building towards the giant Ferris wheel.</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.6374,
          longitude: 139.7376,
        }}
        title="Sengakuji Temple"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleSengakuji}>
          <Text style = {styles.calloutTitle}>Sengakuji Temple</Text>
          {/* <Text>Sengakuji is a famous Buddhist temple located in Minato, Tokyo. This small temple is famous as the gravesite for the 47 Ronin, or leaderless Samurai, who died avenging their master's honor. The incident took place in 1701, when Asano Naganori, Feudal Lord of Ako, drew his sword against his rival, Kira Yoshinaka, within the Edo Castle. He was sentenced to die by Seppuku, while his rival, who had insulted and maligned him for years, had no punishment. Asano's samurai planned their revenge for almost two years, then attacked and killed Kira, presenting his head to Asano's grave at Sengakuji. They were sentenced to die by seppuku and buried alongside their master.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>Go to Sengakuji Station, take exit A2, and go to the right. The temple is about a 4-minute walk.</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.6374,
          longitude: 139.7363,
        }}
        title="Yokohama"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleYokohoma}>
          <Text style = {styles.calloutTitle}>Yokohama</Text>
          {/* <Text>Yokohama is a harbor city overlooking Tokyo Bay, where Japan first opened up to the world in 1859. It's the capital of Kanagawa Prefecture, with almost 4 million citizens, second in size to Tokyo. You'll find numerous attractions here, including Landmark Tower, Cosmo Clock 21 Ferris Wheel in Cosmo World, the Nippon Maru, Minato Mirai 21 area, China Town, Museums, Shops, Restaurants, Gardens, and beautiful views of the bay.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>Yokohama Station leads to many areas of interest. Sakuragicho Station is closest to Landmark Tower, Cosmoworld, Cup Noodles Museum. Kannai Station is closer to Yokohama Stadium, the Gundam Factory, and Chinatown</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.3167,
          longitude: 139.5362,
        }}
        title="Great Buddha of Kamakura "
       // description="fun art facility"
      >
        <Callout  style = {styles.callout} onPress={handleBuddha}>
          <Text style = {styles.calloutTitle}>Great Buddha of Kamakura</Text>
          {/* <Text>The Great Buddha of Kamakura ( , Kamakura Daibutsu) is a bronze statue standing almost 44 feet tall including its base, located on the grounds of Kotoku-in Temple. It was built in 1252, and is the second largest Buddha in Japan, second to the Nara Daibutsu. It has endured typhoons and earthquakes, and is unique in that it sits in the open air. Visitors can even go inside the body of the Buddha, and see the construction from the inside. It is one of the most iconic symbols of Kamakura, and a popular spot for photos. While most of the population of Japan do not adhere to any religious beliefs, Buddhism is second to Shinto beliefs in Japan.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>Get off at JR Yokosuka Line Kamakura Station. Change to the Enoshima Electric Railway (bound for Fujisawa) and get off at Hase Station, the third stop (approx. seven minutes from Kamakura). Kotoku-in is a seven-minute walk North from the station.</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:34.9671,
          longitude: 135.7727,
        }}
        title="Fushimi Inari Shrine and Torii Gates"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleInari}>
          <Text style = {styles.calloutTitle}>Fushimi Inari Shrine and Torii Gates</Text>
          {/* <Text>The famed vermilion torii gates can be found at Fushimi Inari Shrine. This type of shrine is used to worship the deity Inari. There are thousands of shrines dedicated to Inari, which are typically associated with rice, prosperity, the color red, and symbols of foxes. Foxes act as Inari's messengers and are often depicted at the shrine entrance, holding a symbolic item in their mouth or under their paw. Offerings of rice, sake, and fried tofu are popular. Fushimi Inari-Taisha, the head shrine of Inari, is known for its path of a thousand vermilion torii gates, which were donated by Japanese merchants. It may take up to 2 hours to walk the entire path, but there are beautiful views, with an overlook of Kyoto about halfway up. The shrine is open 24 hours a day and there is no fee. There are many shops and food stalls leading to the shrine, and you can purchase a fox ema, which is a wooden plaque where you can write your wishes.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>Right next to Inari Station, on the JR Nara Line (5 minutes from Kyoto station)</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.646572,
          longitude: 139.653244,
        }}
        title="Arashiyama Bamboo Grove"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleBamboo}>
          <Text style = {styles.calloutTitle}>Arashiyama Bamboo Grove</Text>
          {/* <Text>The Arashiyama Bamboo Grove on the west side of Kyoto is a beautiful forest of green. The path leads you through towering bamboo trees, which can be a breathtaking, and peaceful experience. The least crowded time to visit is early morning. There are shops and restaurants in the area around the grove, but in the summer, be prepared for the heat and humidity. This area of Kyoto is known for its natural beauty, as well as Togetsukyo Bridge and Tenryuji temple, a World Cultural Heritage site.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>The grove is a 10-minute walk from Saga- Arashiyama Station on the JR Sagano Line.</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:34.6851,
          longitude: 135.8084,
        }}
        title="Nara"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleNara}>
          <Text style = {styles.calloutTitle}>Nara</Text>
          {/* <Text>Japan was unified in Nara, where the first capital was established from 710 - 784. During this time Nara became the center for Buddhism, art, politics, and cultural exchange. As a result there are many ancient temples and world heritage sites. Nara is also known for hundreds of freely roaming deer. They are considered messengers to the Gods, and are protected as a national treasure. You can buy crackers to feed the deer for about 150 yen, and they are eager to interact with you, but remember they are wild animals. They will bow and expect a treat, and if you are too slow you may get a nudge or a nibble! You can see a little of everything by heading toward Nara Park. It is the location of many of Nara's main attractions including Todaiji, Kasuga Taisha, Kofukuji and the Nara National Museum.</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>From Kyoto, go to Nara Station, or even better, Kintetsu-Nara station, and walk East along Omiya-dori.</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:35.2919,
          longitude: 139.5726,
        }}
        title="Zushi Beach"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleZushi}>
          <Text style = {styles.calloutTitle}>Zushi Beach</Text>
          {/* <Text>Zushi Beach is popular for all ages, with windsurfing, paddle boarding, swimming, hotels, and restaurants. It's facing Sagami Bay, and on a clear day, you can see Mount Fuji. It's also the site for Summer fireworks festivals, film festivals, and "Yabusame", where mounted archers shoot at targets while galloping on a horse. There are some restrictions, such as no tattoos, alcohol, barbecues, or loud music. You cannot wear your swimsuit walking to the beach, but you can change clothes there. It's a nice getaway from the city!</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10}}>From Zushi station, take the East exit and it's about a 15-minute walk.</Text>
        </Callout>
      </Marker>
      <Marker
        coordinate={{
          latitude:30.2672,
          longitude: -97.7431,
        }}
        title="Austin, TX"
        //description="NHK broadcasting studio"
      >
        <Callout  style = {styles.callout} onPress={handleAustin}>
          <Text style = {styles.calloutTitle}>Austin, TX</Text>
          {/* <Text>Zushi Beach is popular for all ages, with windsurfing, paddle boarding, swimming, hotels, and restaurants. It's facing Sagami Bay, and on a clear day, you can see Mount Fuji. It's also the site for Summer fireworks festivals, film festivals, and "Yabusame", where mounted archers shoot at targets while galloping on a horse. There are some restrictions, such as no tattoos, alcohol, barbecues, or loud music. You cannot wear your swimsuit walking to the beach, but you can change clothes there. It's a nice getaway from the city!</Text> */}
          {/* <Image style = {styles.calloutImage} source={require('../assets/images/places/meiji1.jpg')} /> */}
          <Text style={{padding:10,marginRight:10,}}>Fun Destination for Spring Break</Text>
        </Callout>
      </Marker>
      
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
  },
  callout:{
    flex:1,
    position:"relative",
    // width: Dimensions.get('window').width/2,
    // height: Dimensions.get('window').height/6,
    //justifyContent:"center",
    alignItems :"center",
    //backgroundColor:"pink",
    //flexDirection:"row",
    
  },
  calloutTitle:{
    fontWeight:"bold",
  },
  calloutImage:{
    width: 80,
    height: 80,
    resizeMode:"cover",
  }
});

const handleMeiji =() => {
  openMap({ end:"1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557,Japan", provider:"apple" });
}
const handleShibayu =() => {
  openMap({ end:"2-chōme-1 Dōgenzaka, Shibuya City, Tokyo 150-0043, Japan", provider:"apple" });
}
const handleHachi =() => {
  openMap({ end:"2 Chome-1 Dogenzaka, Shibuya City, Tokyo 150- 0043, Japan", provider:"apple" });
}
const handleAkihabara =() => {
  openMap({ end:"Taito City, Tokyo 110-0006", provider:"apple" });
}
const handleStarbucks =() => {
  openMap({ end:"2-19-23 Aobadai, Meguro-ku, Tokyo, 153-0042", provider:"apple" });
}
const handleMiraikan =() => {
  openMap({ end:"2-3-6 Aomi, Koto-ku, Tokyo, Japan", provider:"apple" });
}
const handleTeamlabs =() => {
  openMap({ end:"Odaiba Palette Town 2F, 1-3-8 Aomi, Koto-ku, Tokyo, Japan", provider:"apple" });
}
const handleSengakuji =() => {
  openMap({ end:"108-0074 2-11-1 Takanawa, Minato-ku, Tokyo", provider:"apple" });
}
const handleYokohoma =() => {
  openMap({ end:"Japan, 220-0011 Kanagawa, Yokohama, Nishi Ward, Takashima,220-0005", provider:"apple" });
}
const handleBuddha =() => {
  openMap({ end:"4-2-28, Hase, Kamakura,Kanagawa Prefecture 248-0016, Japan", provider:"apple" });
}
const handleInari =() => {
  openMap({ end:"68 Fukakusa Yabunouchi-cho, Fushimi-ku, Kyoto City 612-0882", provider:"apple" });
}
const handleBamboo =() => {
  openMap({ end:"JUkyo Ward, Kyoto, 616-0000, Japan", provider:"apple" });
}
const handleNara =() => {
  openMap({ end:"4-469 Zoshicho, Nara 630-8501 Nara Prefecture", provider:"apple" });
}
const handleZushi=() => {
  openMap({ end:"2-chōme-3 Shinjuku, Zushi, Kanagawa 249-0007, Japan", provider:"apple" });
}
const handleAustin=() => {
  openMap({ end:"Autsin, TX", provider:"apple" });
}