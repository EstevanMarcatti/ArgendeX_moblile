import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './Styles_Calendar';
import useHeaderOptions from '../../components/Header.js';

export default function App() {

  const [searchTerm, setSearchTerm] = useState('');

  useHeaderOptions();

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image style={styles.bars} resizeMode='contain' source={require('./imagesCalendar/menu.png')} />

        <TextInput style={styles.search_box}
          placeholder="Search"
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />

        <Image style={styles.bars} resizeMode='contain' source={require('./imagesCalendar/profile.png')} />

        <View />

      </View>

      <Image style={styles.carousel_image} resizeMode='contain' source={require('./imagesCalendar/carousel_temp.png')} />

      <Image style={styles.calendar_image} resizeMode='contain' source={require('./imagesCalendar/calendar_temp.png')} />

      <StatusBar style="auto" />

    </View>
  );
}