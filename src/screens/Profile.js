import { Container } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './HomeScreen'

const Profile = ({ navigation }) => {
    return (
        <Container
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile Screen</Text>
            <Text onPress={() => navigation.navigate("HomeScreen")}>
                Home Screen
                </Text>
        </Container>
    )
}

export default Profile

const styles = StyleSheet.create({})
