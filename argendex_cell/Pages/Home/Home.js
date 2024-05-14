// pages/HomeScreen.js
import * as React from 'react';
import { View, TextInput, Image, TouchableOpacity, Button, Text } from 'react-native';
import style from "./Style_home.js";

export default function Home({ navigation }) {
    return (
        <View style={style.Header}>
            <Text style={style.home}>Seja bem vindo ao </Text>
            <View >
                <Image style={style.logo} resizeMode='contain' source={require('../../assets/images/argendex.png')} />
            </View>
            
            <TouchableOpacity style={style.btnCriar} onPress={() => navigation.navigate('Login')}>
                <Text style={style.Txtbtn}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.btnCriar} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={style.Txtbtn}>Cadastrar</Text>
            </TouchableOpacity>
            
        </View>
    );
}
