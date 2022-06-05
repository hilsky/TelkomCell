import React, {useEffect, useState} from 'react';
import * as axios from 'axios';
import {Text, TextInput, View, StyleSheet, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ViewData = ({navigation, route}) => {

    useEffect(() => {
        axios.get('https://mighty-spire-11680.herokuapp.com/produk')
        .then(res => {
            setData(res.data);
        }
        )
        .catch(err => {
            console.log(err);
        }
        )
    }
    , [])

    const [data, setData] = useState([]);
    const [username] = useState(route.params.username)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.replace('Home', {
                    username: username
                })}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Data Paket TelkomCell</Text>
            </View>
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {data.length !== 0 ? data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.list} onPress={() => navigation.replace('DetailData', {
                                id: item._id,
                                username: username
                            })}>
                                <Text style={styles.listTextHeader}>{item.nama_paket}</Text>
                                <Text style={styles.listText}>{item.tipe_paket}</Text>
                            </TouchableOpacity>
                        )
                    }) : <Text style={styles.text}>Data tidak ditemukan</Text>}
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.replace('AddData', {
                    username: username
                })}>
                    <Text style={styles.buttonText}>Tambah Paket</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )

}

export default ViewData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        marginTop: 30,
        paddingLeft: 30,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2EC5B6',
        paddingRight: 30
    },
    headerText: {
        fontSize: 25,
        marginLeft: 10,
        fontWeight: 'bold',
        marginBottom: 10
    },
    body: {
        flex: 0.9,
        marginBottom: 10,
    },
    list: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2EC5B6',
        paddingLeft: 30,
        paddingRight: 30,
    },
    listTextHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 13,
    },
    text: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: 'gray'
    },
    footer: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    button : {
        backgroundColor: '#2EC4B6',
        width: 300,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})