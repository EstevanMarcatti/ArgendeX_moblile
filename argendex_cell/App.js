import React, { useState } from "react";
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text} from "react-native";
import { ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Importe o DateTimePickerModal

import styles from "./Styles";

const CadastroForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cidade, setCidade] = useState('');
    const [dataNascimento, setDataNascimento] = useState(null); // Alterado para null
    const [showDatePicker, setShowDatePicker] = useState(false); // Estado para controlar a visibilidade do DatePicker

    const handledCadastro = () => {
        console.log("Nome Completo: ", nome);
        console.log("E_mail: ", email);
        console.log("Senha: ", senha);
        console.log("cidade: ", cidade);
        console.log("DataNascimentos: ", dataNascimento);
    }

    const handleDateConfirm = (date) => {
        setShowDatePicker(false);
        setDataNascimento(date);
    };

    return (
        <KeyboardAvoidingView style={styles.Header} behavior="padding">
            <View style={styles.containerLogo}>
                <Image style={styles.logo} resizeMode='contain' source={require('./assets/images/argendex.png')} />
            </View>

            <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
                <TextInput style={styles.inputs} placeholder="Nome Completo" placeholderTextColor='#b8b8b8' value={nome} onChangeText={setNome}/>
                <TextInput style={styles.inputs} placeholder="E-mail" placeholderTextColor='#b8b8b8' value={email} onChangeText={setEmail}/>
                <TextInput style={styles.inputs} placeholder="Senha" placeholderTextColor='#b8b8b8' value={senha} onChangeText={setSenha}/>
                <TextInput style={styles.inputs} placeholder="Cidade" placeholderTextColor='#b8b8b8' value={cidade} onChangeText={setCidade}/>

                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <TextInput style={styles.inputs} placeholder="Selecione a data de nascimento" placeholderTextColor='#b8b8b8' editable={false} value={dataNascimento ? dataNascimento.toLocaleDateString() : ''} />
                </TouchableOpacity>

                <DateTimePickerModal
                    isVisible={showDatePicker}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={() => setShowDatePicker(false)}
                />
            </ScrollView>

            <TouchableOpacity style={styles.btnCriar} onPress={handledCadastro}>
                <Text style={styles.Txtbtn}>Criar Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnvl} >
                <Text style={styles.Txtbtnvl}>Já tem uma conta ? Fazer Login</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default CadastroForm;