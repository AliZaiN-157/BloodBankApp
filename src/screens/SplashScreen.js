import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import AuthScreen from './AuthScreen';
import SettingsScreen from './SettingsScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';



export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("AuthScreen")
        }, 3500)
    }, [])

    return (
        <View style={styles.splashContainer}>
            <StatusBar backgroundColor='#8a0303' barStyle="light-content" />

            <LottieView source={require('../Assests/blood-drop.json')}
                autoPlay loop
                style={styles.splashAnimation}
            // onAnimationFinish={() => props.navigation.navigate("HomeScreen")}
            />
            <View style={{
                flex: 0.3,
                alignItems: "center",
            }}>
                <Text style={styles.splashText}>SAYLANI BLOOD BANK</Text>
                <Text style={styles.splashSlogan}>Donate Blood Save Life</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
    },
    splashAnimation: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "center",
        height: 400,
    },
    splashText: {
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: 'Lato',
        textAlign: 'center',
    },
    splashSlogan: {
        fontSize: 20,
        letterSpacing: 5
    }

})
