import { ImageBackground, StyleSheet } from "react-native";

export default style = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    Logo: {
        width: 500,
        height: 250,
        alignItems: 'center'
    },

    container: {
        flex: 1,
        width: '90%',
    },

    Inputs:{
        backgroundColor: '#000',
        width: '90%',
        marginBottom: 30,
        borderRadius: 5,
        padding: 10,
        fontSize: 17,
        borderRadius: 5,
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#008000',
        color: '#b8b8b8'
    
    },

    btnSubmit:{
        backgroundColor: '#D75413',
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        width: '90%',
        height: 45,
        borderRadius: 5,
    },

    submitTxt:{
        color: '#fff',
        fontSize: 18,
    },

    btnCadastro:{
        backgroundColor: '#606060',
        justifyContent: 'center',
        marginBottom1:15,
        alignItems: 'center',
        width: '90%',
        height: 45,
        borderRadius:5,
    }
});