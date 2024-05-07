import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './Styles';

export default function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image style={styles.bars} resizeMode='contain' source={require('./assets/images/menu.png')} />

        <TextInput style={styles.search_box}
          placeholder="Search"
          onChangeText={text => setSearchTerm(text)}
          value={searchTerm}
        />

        <Image style={styles.bars} resizeMode='contain' source={require('./assets/images/profile.png')} />

        <View />

      </View>

      <Image style={styles.carousel_image} resizeMode='contain' source={require('./assets/images/carousel_temp.png')} />

      <Image style={styles.calendar_image} resizeMode='contain' source={require('./assets/images/calendar_temp.png')} />

      <StatusBar style="auto" />

    </View>
  );
}