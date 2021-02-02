import { Container } from 'native-base'
import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';


export default function DonorDetails({ navigation, route }) {

    const { Id } = route.params
    const [donorInfo, setDonorInfo] = useState([])

    useEffect(() => {
        firestore().collection('BloodBankData')
            .doc('xLMwmNhomFx9LP7SJxvy')
            .collection('DonorsData').doc(Id).onSnapshot((snapshot) => (
                setDonorInfo(snapshot.data())
            ))

    }, [])


    return (
        <Container style={styles.Maincontainer}>
            <StatusBar backgroundColor='#8a0303' barStyle="light-content" />
            <View style={styles.container}>
                {console.log(donorInfo)}
                <Text style={styles.title}>
                    {`${donorInfo.firstName} ${donorInfo.lastName}`}
                </Text>
                <Text style={styles.subtitle}>{donorInfo.gender}</Text>
                <Text style={styles.subtitle}>{donorInfo.bloodGroup}</Text>
                <Text style={styles.subtitle}>{`${donorInfo.city}, ${donorInfo.country}`}</Text>
                <Text style={styles.subtitle}>{donorInfo.address}</Text>
                <Text style={styles.subtitle}>{donorInfo.date}</Text>
                <Text style={styles.subtitle}>{donorInfo.phoneNumber}</Text>
            </View>

        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: "100%",
        flex: 0.5,
        backgroundColor: 'white',
        opacity: 1,
    },
    Maincontainer: {
        backgroundColor: '#8a0303',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 30
    },
    subtitle: {
        marginHorizontal: 15,
        fontSize: 18,
        paddingVertical: 10
    }
})
