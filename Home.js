import React, {useEffect, useState} from 'react';
import * as axios from 'axios';
import { Alert,Text, TextInput, View, StyleSheet, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation, route}) => {

    const [username] = useState(route.params.username);

    const Logout = () => {
        Alert.alert(
            'Konfirmasi',
            'Apakah anda yakin ingin keluar?',
            [
                {text: 'Tidak', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Ya', onPress: () => navigation.replace('Login')},
            ],
            {cancelable: false},
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="user" size={50} color="#000" />
                <View style={{marginLeft: 5}}>
                    <Text style={styles.headerText}>Hello, {username}</Text>
                    <Text style={styles.headerText2}>Kabar Baik?</Text>
                </View>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.replace('AddData', {
                    username: username
                })}>
                    <Text style={styles.buttonText}>Data Produk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => navigation.replace('ViewData', {
                    username: username
                })}>
                    <Text style={styles.buttonText}>Lihat Produk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={Logout}>
                    <Text style={styles.buttonText2}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    headerText2: {
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold'
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
        height: 150,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
        paddingLeft: 10,
        paddingTop: 10
    },
    button2 : {
        backgroundColor: '#000',
        width: 100,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '400',
    },
    buttonText2: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '400',
    }
})