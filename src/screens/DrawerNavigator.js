import React, { useState } from 'react';
import { Button, Text, Image, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';

import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { StackNavigator, HomeNavigator } from './StackNavigator';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import SettingsScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

const LogOutHandler = async () => {
    try {
        const value = await AsyncStorage.clear()
        console.log(value);

    } catch (e) {
        alert(e)
    }

}




const DrawerContent = props => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginVertical: 30,
                    alignItems: 'center'
                }}>
                    <Image source={
                        require('../Images/profile1.jpeg')
                    }
                        style={{ height: 90, width: 90, borderRadius: 60 }}
                        resizeMode="center"
                    />
                    <View>
                        <Text style={{ fontSize: 18 }}>
                            Ali Zain
                        </Text>
                        <Text>
                            alizain@gmail.com
                        </Text>
                    </View>

                </View>
                <DrawerItem
                    label="Home"
                    onPress={() => props.navigation.navigate("HomeScreen")}
                    icon={() =>
                        <MaterialIcons
                            name="home"
                            color="black"
                            size={20}
                        />
                    }
                />
                <DrawerItem
                    label="Profile"
                    onPress={() => props.navigation.navigate("Profile")}
                    icon={() =>
                        <MaterialIcons
                            name="person"
                            color="black"
                            size={20}
                        />
                    }
                />
                <DrawerItem
                    label="Settings"
                    onPress={() => props.navigation.navigate("SettingsScreen")}
                    icon={() =>
                        <MaterialIcons
                            name="settings"
                            color="black"
                            size={20}
                        />
                    }
                />
                <DrawerItem
                    style={{
                        Bottom: 0
                    }}
                    label="Logout"
                    labelStyle={{ color: 'black' }}
                    icon={() => <MaterialIcons name="logout" color="black" size={16} />}
                    onPress={LogOutHandler}
                />
            </View>

        </DrawerContentScrollView>
    )
}

const DrawerNavigator = ({ navigation }) => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerLeft: () => (
                    <TouchableOpacity transparent>
                        <MaterialIcons
                            name="menu" size={24} color="white"
                            style={{
                                paddingHorizontal: 10, marginBottom: 20,
                            }}
                            onPress={() => navigation.openDrawer()}
                        />
                    </TouchableOpacity>
                )
            }}
            drawerContent={(props) => {
                return <DrawerContent {...props} />

            }}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator >
    )
}

export default DrawerNavigator


