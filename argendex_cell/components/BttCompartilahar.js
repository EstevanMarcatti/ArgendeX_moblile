import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput } from 'react-native';

function Bttcompartilhar() {
  const [modalVisible, setModalVisible] = useState(false);
  const [seuEmail, setSeuEmail] = useState('');
  const [emailCompartilhamento, setEmailCompartilhamento] = useState('');

  const handleClose = () => setModalVisible(false);
  const handleShow = () => setModalVisible(true);

  const compartilhar = () => {
  
    console.log('Compartilhar:', seuEmail, emailCompartilhamento);
    handleClose();
  };

  return (
    <>
      <Button title="Compartilhe" onPress={handleShow} style={{ marginBottom: 20 }} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Compartilhe Sua tarefa</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', padding: 5 }}
              placeholder="Seu Email para compartilhar"
              value={seuEmail}
              onChangeText={setSeuEmail}
            />
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%', padding: 5 }}
              placeholder="Email de compartilhamento"
              value={emailCompartilhamento}
              onChangeText={setEmailCompartilhamento}
            />
            <View style={{ flexDirection: 'row' }}>
              <Button title="Cancelar" onPress={handleClose} />
              <Button title="Compartilhar" onPress={compartilhar} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default Bttcompartilhar;
