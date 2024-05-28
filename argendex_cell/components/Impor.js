import React from 'react';
import { View, Text, Picker } from 'react-native';

function Impor() {
  return (
    <View>
      <Picker style={{ width: '100%', marginBottom: 20 }}>
        <Picker.Item label="Nível de Importância" value="" />
        <Picker.Item label="Pouca Importância" value="pouca" />
        <Picker.Item label="Razoavelmente Importante" value="razoavelmente" />
        <Picker.Item label="Muito Importante" value="muito" />
      </Picker>
    </View>
  );
}

export default Impor;
a