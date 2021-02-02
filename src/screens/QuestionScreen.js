import React, { useRef } from 'react'
import { Animated, StyleSheet, Text, Image, View, TouchableOpacity, StatusBar } from 'react-native'
import { useTheme } from 'react-native-paper';
import DonorForm from './DonorForm';
import RecipientForm from './RecipientForm';


const QuestionScreen = ({ navigation }) => {

    const { colors } = useTheme();


    return (
        <View style={styles.questionContainer}>
            <StatusBar backgroundColor='#8a0303' barStyle="light-content" />
            <View style={styles.container}>
                <Text style={{
                    paddingVertical: 20,
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: 'white',
                    justifyContent: 'flex-start'
                }}>
                    Who are you 🤔❔
                </Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.donor}
                    activeOpacity={1}
                    onPress={() => navigation.replace("DonorForm")}>
                    <Image
                        style={{ height: 100, width: 100, margin: 20 }}
                        source={require('../Images/addimg.png')}
                        resizeMode={'stretch'}
                    />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Donor 😇</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: colors.text }}>
                    OR
                </Text>
                <TouchableOpacity style={styles.donor} activeOpacity={1}
                    onPress={() => navigation.replace("RecipientForm")}
                >
                    <Image
                        style={{ height: 100, width: 100, margin: 20, }}
                        source={require('../Images/mainRecipient.png')}
                        resizeMode={'stretch'}
                    />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>Recipient 🙂</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default QuestionScreen

const styles = StyleSheet.create({
    questionContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#8a0303'
    },
    container: {
        flex: 0.55,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    donor: {
        backgroundColor: 'white',
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
})
