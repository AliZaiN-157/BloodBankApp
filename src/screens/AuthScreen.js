import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import SigninScreen from './SigninScreen';
import QuestionScreen from './QuestionScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function AuthScreen({ navigation }) {
    const [emailaddress, setEmailaddress] = useState("")
    const { colors } = useTheme();

    const AuthHandler = async () => {
        // AsyncStorage.getItem('emailaddress')
        //     .then(
        //         (value) => !value ? "null" : setEmailaddress(value)

        //     )
        // navigation.navigate('SigninScreen')
        try {
            const emailaddress = await AsyncStorage.getItem('emailaddress')
            if (emailaddress !== null) {
                console.log(emailaddress)
                setEmailaddress(emailaddress)
                navigation.replace('QuestionScreen')
            }
            else {
                navigation.replace('SigninScreen')
            }

        }
        catch (err) {
            alert(err)
        }

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#8a0303' barStyle="light-content" />
            <View style={[styles.header]}>
                <LottieView
                    source={require('../Assests/blood-transfusion.json')}
                    autoPlay loop
                    style={styles.logo}
                />

            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.Logotext, { color: colors.text }]}
                >
                    Welcome
                </Text>
                <Text style={[styles.title, {
                    color: colors.text
                }]}>Stay connected with Saylani</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={AuthHandler}>
                        <LinearGradient
                            colors={['#d90429', '#e71d36']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View >
    )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8a0303'
    },
    header: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 0.85,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    Logotext: {
        fontWeight: 'bold',
        color: '#05375a',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 15,

    }
})
