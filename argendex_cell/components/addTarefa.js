import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput } from 'react-native';
import Data from './Data';
import Bttcompartilhar from './BttCompartilhar';
import Alerta from './Alerta';
import Impor from './Impor';

function AddTarefa() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => setModalVisible(false);
  const handleShow = () => setModalVisible(true);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Adicionar Tarefa" onPress={handleShow} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Adicionar Tarefa</Text>
            <Data />
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', padding: 5 }}
              placeholder="Titulo"
            />
            <Bttcompartilhar />
            <Alerta />
            <Impor />
            <TextInput
              style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', padding: 5 }}
              placeholder="Descrição"
              multiline={true}
            />
            <View style={{ flexDirection: 'row' }}>
              <Button title="Cancelar" onPress={handleClose} />
              <Button title="Salvar" onPress={handleClose} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AddTarefa;
