import React, {useEffect, useState} from 'react';
import * as axios from 'axios';
import {Alert,Text, TextInput, View, StyleSheet, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DatabaseUser } from './database';

const db = DatabaseUser.getConnection();

const Register = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const RegisterUser = () => {
        if(username == '' || password == ''){
            Alert.alert('Error', 'Data tidak boleh kosong');
        }
        else{
            db.transaction(tx => {
                tx.executeSql(
                    'INSERT INTO user (username, password) VALUES (?, ?)',
                    [username, password],
                    (tx, results) => {
                        Alert.alert('Sukses', 'Berhasil mendaftar');
                        setUsername('');
                        setPassword('');
                    },
                    (tx, error) => {
                        console.log('Something went wrong');
                    }
                );
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./Logo.png')} style={styles.logo}/>
                <Text style={styles.text}>Daftar</Text>
            </View>
            <View style={styles.body}>
                <KeyboardAvoidingView style={styles.inputBody} enabled={true}>
                    <Text style={styles.inputText}>Username</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.inputBody} enabled={true}>
                    <Text style={styles.inputText}>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                    />
                </KeyboardAvoidingView>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => RegisterUser()} style={styles.button}>
                    <Text style={styles.buttonText}>Daftar</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 20, alignSelf: 'center'}}>
                    <Text style={styles.footerText}>Sudah punya akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.footerText2}>Masuk</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )

}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        letterSpacing: 2,
    },
    body: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    inputBody: {
        marginBottom: 10,
    },
    inputText: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#2EC4B6',
        width: '100%',
        height: 40,
        borderRadius: 10,
        paddingLeft: 10,

    },
    button : {
        backgroundColor: '#2EC4B6',
        width: 300,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 20,
        marginBottom: 20,
    },
    footerText: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 5,
    },
    footerText2: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 5,
        color: '#2EC4B6',
        marginLeft: 5,
    }

});