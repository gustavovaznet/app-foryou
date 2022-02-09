//PAGE HADER CSS

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f83e8',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 50,
    },

    titleBold: {
        fontWeight: 'bold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {       
        backgroundColor: '#339dff',
    },

    buttonSecondary: {       
        backgroundColor: '#f26d21',
    },

    buttonText: {       
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 19,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 30,

    }
});

export default styles;
