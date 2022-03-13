import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContext } from 'react-navigation';
// import BgImage from './assets/Background.png';

class Cari extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LokasiBerangkat: '',
            LokasiTujuan: '',
            Tanggal: '',
            // isCari: false,
        };
    }

    render() {
        const { LokasiBerangkat, LokasiTujuan, Tanggal, navigation } = this.state;
        return (
            <View style={styles.container}>
                {/* <Image style={styles.BgImage} source={BgImage}/> */}
                <Text style={styles.title}>Hiling.id</Text>
                <View style={styles.garis} />


                <View style={styles.isi}>
                    <View style={styles.wrapperInput}>
                        <Text style={styles.textIsi}>Lokasi Berangkat      : </Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Masukkan Lokasi Keberangkatan"
                            value={LokasiBerangkat}
                            onChangeText={(LokasiBerangkat) => this.setState({ LokasiBerangkat })}
                        />
                    </View>
                    <View style={styles.wrapperInput}>
                        <Text style={styles.textIsi}>Lokasi Tujuan      : </Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Masukkan Lokasi Tujuan"
                            value={LokasiTujuan}
                            onChangeText={(LokasiTujuan) => this.setState({ LokasiTujuan })}
                        />
                    </View>
                    <View style={styles.wrapperInput}>
                        <Text style={styles.textIsi}>Tanggal Keberangkatan      : </Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Masukkan Tanggal Keberangkatan"
                            value={Tanggal}
                            onChangeText={(Tanggal) => this.setState({ Tanggal })}
                        />
                    </View>

                    {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List') } >
                        <Text style={styles.textButton}>Cari</Text>
                        {/* <a onClick={() => { window.location.href = 'List.js'; }}>Cari</a> */}
                    {/* </TouchableOpacity> */}

                    <Button
                        title='Cari'
                        onPress={()=> this.props.navigation.navigate('List')}
                    />

                </View>
                <Text style={styles.copyright}> COPYRIGHT Sophia Nouriska - 119140027 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#86B257',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 10,
    },
    garis: {
        borderBottomWidth: 1,
        marginTop: 10,
        borderColor: '#fff',
    },
    isi: {
        marginTop: 30,
        backgroundColor: '#fff',
        padding: 13,
        borderRadius: 10,

    },
    textIsi: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    TextInput: {
        backgroundColor: '#fff',
        borderWidth: 1,
        padding: 8,
        borderColor: 'grey',
        borderRadius: 5,
    },
    wrapperInput: {
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    copyright: {
        backgroundColor: '#86B257',
        textAlign: 'center',
        marginBottom: 0,
        marginTop: 'auto',
        color: '#fff',
        fontWeight: 'bold',
    }
});
export default Cari;