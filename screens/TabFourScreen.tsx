import * as React from 'react';
import { StyleSheet, SafeAreaView, SectionList } from 'react-native';
import { Text, View} from '../components/Themed';
import Constants from 'expo-constants';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  title: {
    fontSize: 18,
    color:"dodgerblue",
  },
  item: {
    backgroundColor: 'aliceblue',
    padding:10,
    marginLeft:20,
  },
  header: {
    fontSize: 20,
    fontWeight:"bold",
    backgroundColor: 'silver',
    color:"darkblue",
    padding:8,
  },
});

const DATA = [
  {
    title: 'Yes',
    data: [ 'hai','はい'],
  },
  {
    title: 'No',
    data: ['lie','いいえ'],
  },
  {
    title: 'Please',
    data: ['O-negai shimasu', 'おねがいします'],
  },
  {
    title: 'Thank you',
    data: ['Arigatō', 'ありがとう'],
  },
  {
    title: "You're welcome",
    data: [ 'Dōitashimashite','どういたしまして'],
  },
  {
    title: 'Excuse me',
    data: ['Sumimasen','すみません'],
  },
  {
    title: 'I am sorry',
    data: ['Gomennasai', 'ごめんなさい'],
  },
  {
    title: 'Do you speak English?',
    data: ['Eigo o hanasemasu ka', 'えいごをはなせますか'],
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
