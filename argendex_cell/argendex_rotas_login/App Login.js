import React from "react";
import styles from "../../Styles";
import {TextInput, KeyboardAvoidingView, TouchableOpacity, Text, ScrollView, Image, View } from "react-native";
import { useState } from 'react';

const CadastroForm = () => {
 
  const [email, setEmail] = useState('')
  const [Senha, setSenha] = useState('')
  

  const handleCadastro = () => {

    console.log(" Email", email);
    setEmail('')
    console.log(" Senha", Senha);
    setSenha('')
  }


  return (

    <KeyboardAvoidingView style={styles.Background} behavior="padding">
      <View>
        <Image style={ styles.Logo} resizeMode="contain" source={require('./assets/image/argendex.png')}/>
      </View>
    
      <ScrollView keyboardShouldPersistTaps style={styles.container} >

        <TextInput style={styles.Inputs}
          value={email} placeholder="E-mail" placeholderTextColor='#b8b8b8' onChangeText={setEmail} />

        <TextInput style={styles.Inputs}
          placeholder="Senha" value={Senha} placeholderTextColor={'#b8b8b8'} onChangeText={setSenha} />

        <TouchableOpacity style={styles.btnCadastro}
          onPress={handleCadastro}>

          <Text style={styles.submitTxt}>Fazer Login</Text>
        </TouchableOpacity>


      </ScrollView>
    </KeyboardAvoidingView>

  )


}
export default CadastroForm;