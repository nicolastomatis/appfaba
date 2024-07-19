// screens/LoginScreen.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Linking, ImageBackground, Image, Dimensions } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const handleLogin = () => {
        // Navegar a la pantalla de ingresar datos de inicio de sesión
        navigation.navigate('IngresarDatos');
    };

    const handleRegister = () => {
        const email = 'example@example.com'; // Reemplaza con la dirección de correo deseada
        const subject = 'Solicitud de Registro';
        const body = 'Quiero registrarme en la aplicación.';
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        Linking.openURL(mailtoUrl);
    };

    return (
        <ImageBackground source={require('../assets/images/fondo.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Text style={styles.registerButtonText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: windowWidth,
        height: windowHeight,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    logo: {
        width: windowWidth * 0.5,
        height: windowWidth * 0.5,
        marginBottom: 32,
    },
    loginButton: {
        width: '100%',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerButton: {
        width: '100%',
        marginTop: 16,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
    },
    registerButtonText: {
        color: 'blue',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
