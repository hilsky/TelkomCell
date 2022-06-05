import React, {useEffect, useState} from 'react';
import * as axios from 'axios';
import {Alert ,Text, TextInput, View, StyleSheet, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddData = ({navigation, route}) => {

    const [username] = useState(route.params.username);
    const [nama_paket, setNama_paket] = useState('');
    const [tipe_paket, setTipe_paket] = useState('');
    const [harga, setHarga] = useState('');
    const [jml_kouta, setJml_kouta] = useState('');
    const [masa_aktif, setMasa_aktif] = useState('');

    const AddData = () => {
        if(nama_paket == '' || tipe_paket == '' || harga == '' || jml_kouta == '' || masa_aktif == ''){
           Alert.alert('Error', 'Data tidak boleh kosong');
        }
        else{
            axios.post('https://mighty-spire-11680.herokuapp.com/produk', {
                nama_paket: nama_paket,
                tipe_paket: tipe_paket,
                harga: harga,
                jml_kouta: jml_kouta,
                masa_aktif: masa_aktif
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                Alert.alert('Success', 'Data berhasil ditambahkan');
                setNama_paket('');
                setTipe_paket('');
                setHarga('');
                setJml_kouta('');
                setMasa_aktif('');
            })
            .catch(err => {
                console.log(err);
            }
            )
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.replace('Home', {
                    username: username
                })}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Tambah Paket</Text>
            </View>
            <View style={styles.body}>
                <KeyboardAvoidingView style={styles.inputBody} enabled={true}>
                    <Text style={styles.inputText}>Nama Paket</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setNama_paket(text)}
                        value={nama_paket}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.inputBody} enabled={true} >
                    <Text style={styles.inputText}>Tipe Paket</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setTipe_paket(text)}
                        value={tipe_paket}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.inputBody} enabled={true}>
                    <Text style={styles.inputText}>Jumlah Kouta</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setJml_kouta(text)}
                        value={jml_kouta}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.inputBody} enabled={true}>
                    <Text style={styles.inputText}>Harga Paket</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setHarga(text)}
                        value={harga}
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.inputBody}>
                    <Text style={styles.inputText}>Masa Aktif</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setMasa_aktif(text)}
                        value={masa_aktif}
                    />
                </KeyboardAvoidingView>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={AddData}>
                    <Text style={styles.buttonText}>Tambah</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 20
    },
    headerText: {
        fontSize: 25,
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
    }
})