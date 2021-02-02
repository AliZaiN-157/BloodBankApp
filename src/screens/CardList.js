import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Card, CardItem, Body } from 'native-base';


const CardList = ({ Id, FirstName, LastName, Gender, City, Country, BloodGroup, PhoneNumber, navigation }) => {
    return (
        <TouchableOpacity transparent
            onPress={() => navigation.navigate("DonorDetails", { Id })} >
            <CardItem bordered style={styles.donorsList}>
                <Body style={styles.bloodGroupbox}>
                    <Text style={styles.bloodGroup}>
                        {BloodGroup}
                    </Text>
                </Body>
                <Body style={styles.donorDetails}>
                    <Text style={{ fontSize: 18 }}>
                        {`${FirstName} ${LastName}`}
                    </Text>
                    <Text>
                        {Gender}
                    </Text>
                    <Text>
                        {`${City} ,${Country}`}
                    </Text>
                    <Text>
                        Click Here for full details
                    </Text>
                </Body>
            </CardItem>
        </TouchableOpacity>
    )
}

export default CardList

const styles = StyleSheet.create({
    donorsList: {
        flex: 1,
        zIndex: 99,
        display: 'flex',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    bloodGroupbox: {
        flex: 0.3,
        height: 80,
        backgroundColor: "#d90429",
        justifyContent: "center",
        alignItems: "center",
    },
    bloodGroup: {
        fontSize: 34,
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        color: "white",

    },
    donorDetails: {
        marginLeft: 10,
        justifyContent: "flex-start",
        alignItems: "flex-end",
    }

})
