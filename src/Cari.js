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

    // Cari = () => {
    //     this.setState({
    //         isCari: true
    //     })
    // }

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
                    {/* {isCari && (
                        <Text style={{marginTop: 20}}>
                            Selamat Jadwal Berhasil Ditemukan!
                        </Text>
                    )}      */}
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

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     bandara_kode_keberangkatan: "LPG",
//     bandara_kode_tujuan: "JKT",
//     maskapai_nama:"Elang",
//     Tanggal:"Tanggal Keberangkatan",

//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     bandara_kode_keberangkatan: "SBY",
//     bandara_kode_tujuan: "JKT",
//     maskapai_nama:"Tapis Air",
//     Tanggal:"Tanggal Keberangkatan",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     bandara_kode_keberangkatan: "PLG",
//     bandara_kode_tujuan: "JKT",
//     maskapai_nama:"Majapahit Air",
//     Tanggal:"Tanggal Keberangkatan",
//   },
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.bandara_kode_keberangkatan, textColor]}>{item.bandara_kode_keberangkatan} - {item.bandara_kode_tujuan} </Text>
//     <Text style={[styles.maskapai_nama, textColor]}>{item.maskapai_nama}</Text>
//     <Text style={[styles.Tanggal, textColor]}>{item.Tanggal}</Text>
//   </TouchableOpacity>
// );

// const Cari = () => {
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={{ backgroundColor }}
//         textColor={{ color }}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });
export default Cari;