import React, {Component} from 'react';
import { Text, SytleSheet, View, TouchableOpacity  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
 
import Cari from './src/Cari';
import List from './src/List';

// const RootStack = createSwitchNavigator ({
//     "Cari": Cari,
//     "List": List,
// });

const Stack = createNativeStackNavigator();

const App = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Cari' screenOptions={{headerShown: false}}>
                <Stack.Screen name='Cari' component={Cari}/>
                <Stack.Screen name='List' component={List}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

//Yang belum : 
//1. Navigasi buat pindah halaman
//2. Icon