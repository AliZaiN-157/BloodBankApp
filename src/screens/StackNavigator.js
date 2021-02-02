import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button, Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import DrawerNavigator from './DrawerNavigator';


// Import Screens

import HomeScreen from './HomeScreen';
import Profile from './Profile';
import DonorDetails from './DonorDetails';
import AuthScreen from './AuthScreen';
import SigninScreen from './SigninScreen';
import SignUpScreen from './SignUpScreen';
import SplashScreen from './SplashScreen';
import DonorForm from './DonorForm';
import RecipientForm from './RecipientForm';
import QuestionScreen from './QuestionScreen';
import SettingsScreen from './SettingsScreen';

const Stack = createStackNavigator();


const StackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen"
            screenOptions={{
                headerTransparent: true,
                headerTitle: null,
                headerLeft: null,
            }}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
            <Stack.Screen name="SigninScreen" component={SigninScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
            <Stack.Screen name="DonorForm" component={DonorForm} />
            <Stack.Screen name="DonorDetails" component={DonorDetails} />
            <Stack.Screen name="RecipientForm" component={RecipientForm} />
            <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
            <Stack.Screen name="Profile" component={DrawerNavigator} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

// const HomeNavigator = ({ navigation }) => {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerTransparent: true,
//                 headerTitle: null,
//                 headerLeft: () => (
//                     <TouchableOpacity transparent>
//                         <MaterialIcons
//                             name="menu" size={24} color="white"
//                             style={{
//                                 paddingHorizontal: 10,
//                             }}
//                             onPress={() => navigation.openDrawer()}
//                         />
//                     </TouchableOpacity>
//                 )
//             }}>
//             <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
//             <Stack.Screen name="Profile" component={DrawerNavigator} />
//         </Stack.Navigator>
//     )
// }

export { StackNavigator };
