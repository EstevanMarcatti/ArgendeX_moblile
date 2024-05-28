import React from 'react';
import { View, Text, Picker } from 'react-native';

function Alerta() {
  return (
    <View>
      <Picker style={{ width: '100%', marginBottom: 20 }}>
        <Picker.Item label="Selecione um tempo para o alarme" value="" />
        <Picker.Item label="5 minutos antes do compromisso" value="5min" />
        <Picker.Item label="10 minutos antes do compromisso" value="10min" />
        <Picker.Item label="15 minutos antes do compromisso" value="15min" />
        <Picker.Item label="20 minutos antes do compromisso" value="20min" />
        <Picker.Item label="30 minutos antes do compromisso" value="30min" />
        <Picker.Item label="45 minutos antes do compromisso" value="45min" />
        <Picker.Item label="60 minutos antes do compromisso" value="60min" />
      </Picker>
    </View>
  );
}

export default Alerta;
