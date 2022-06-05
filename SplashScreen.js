import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
    })

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./Logo.png')} style={styles.image} />
        </SafeAreaView>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    }

})