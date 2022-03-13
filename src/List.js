import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-web";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    bandara_kode_keberangkatan: "Lampung",
    bandara_kode_tujuan: "Jakarta",
    maskapai_nama:"Elang",
    Tanggal:"(Tanggal Keberangkatan)",

  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    bandara_kode_keberangkatan: "Surabaya",
    bandara_kode_tujuan: "Jakarta",
    maskapai_nama:"Tapis Air",
    Tanggal:"(Tanggal Keberangkatan)",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    bandara_kode_keberangkatan: "Palembang",
    bandara_kode_tujuan: "Jakarta",
    maskapai_nama:"Majapahit Air",
    Tanggal:"(Tanggal Keberangkatan)",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.bandara_kode_keberangkatan, textColor]}>{item.bandara_kode_keberangkatan}  -  {item.bandara_kode_tujuan} </Text>
    <Text style={[styles.maskapai_nama, textColor]}>{item.maskapai_nama}</Text>
    <Text style={[styles.Tanggal, textColor]}>{item.Tanggal}</Text>
  </TouchableOpacity>
);

const List = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ?  "#4C7126" : "#fff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hiling.id</Text>
        <Text style={styles.h2}>Hasil Pencarian Penerbangan</Text>
        <Text style={styles.h3}>(Tanggal Keberangkatan)</Text>
        <View style={styles.garis} />
    </View>

      <FlatList style={styles.FlatList}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

      <Text style={styles.copyright}> COPYRIGHT Sophia Nouriska - 119140027 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  header:{
    backgroundColor: '#86B257',
  },
  FlatList:{
    padding: 20,
    backgroundColor: '#E5E5E5',
  },
  item: {
    shadowColor: '#BEBEBE',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  h2: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
  h3: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  bandara_kode_keberangkatan: {
    fontSize: 14,
    marginBottom: 30,
    fontWeight: 'bold'  
  },
  maskapai_nama: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  Tanggal: {
    textAlign: 'right',
    textColor: 'blue',
  },
  
  garis: {
      borderBottomWidth: 1,
      marginTop: 10,
      borderColor: '#fff',
  },
  copyright: {
    padding: 10,
    backgroundColor: '#E5E5E5',
    textAlign: 'center',
    fontWeight: 'bold',

  }
});

export default List;