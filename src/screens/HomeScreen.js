import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    Dimensions,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from 'react-native-paper';
import { Input, Button, Item, Header, Icon, Left } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import CardList from './CardList';
import firestore from '@react-native-firebase/firestore';



export default function HomeScreen({ navigation, route }) {
    const { donors, recipients } = useSelector(state => state.formReducer)
    const dispatch = useDispatch()

    const { colors } = useTheme();
    const [donorDetails, setDonorDetails] = useState([])
    const [recipientsDetails, setRecipientsDetails] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        firestore().collection('BloodBankData')
            .doc('xLMwmNhomFx9LP7SJxvy')
            .collection('DonorsData').onSnapshot((snapshot) => (
                setDonorDetails(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        firestore().collection('BloodBankData').doc('xLMwmNhomFx9LP7SJxvy').collection('RecipientsData')
            .onSnapshot((snapshot) => (
                setRecipientsDetails(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
                )))

    }, [])

    useEffect(() => {
        dispatch({
            type: 'TOTAL_DONORS',
            payload: donorDetails.length
        })
        dispatch({
            type: 'TOTAL_RECIPIENTS',
            payload: recipientsDetails.length
        })
    }, [donorDetails, recipientsDetails]);

    const [filterDonor, setFilterDonor] = useState([])

    // SearchDonor

    useEffect(() => {
        // console.log(donorDetails.filter((donor) => console.log(donor.data.bloodGroup)));
        setFilterDonor(
            donorDetails.filter((donor) =>
                donor.data.bloodGroup.toLowerCase().includes(search.toLowerCase())
            )
        )
    }, [search, donorDetails])


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#8a0303' barStyle="light-content" />
            <View style={styles.header}>

                <Header
                    transparent
                    searchBar
                    androidStatusBarColor="#8a0303"
                    style={{
                        backgroundColor: '#8a0303',
                        marginTop: 20,
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Item style={{ flex: 1, position: 'relative' }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search Blood Group"
                            onChangeText={(text) => setSearch(text)}
                        />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: 10,
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                            {donors}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'normal' }}>
                            Donor
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: 10,
                        alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                            {recipients}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'normal' }}>
                            Recipients
                    </Text>
                    </View>


                </View>
                <ScrollView showsVerticalScrollIndicator={false} >

                    <View>
                        {filterDonor && filterDonor.map(donorDetails => {
                            return (
                                <CardList
                                    route={donorDetails.id}
                                    navigation={navigation}
                                    key={donorDetails.id}
                                    Id={donorDetails.id}
                                    FirstName={donorDetails.data.firstName}
                                    LastName={donorDetails.data.lastName}
                                    address={donorDetails.data.address}
                                    Gender={donorDetails.data.gender}
                                    PhoneNumber={donorDetails.data.phoneNumber}
                                    City={donorDetails.data.city}
                                    Country={donorDetails.data.country}
                                    BloodGroup={donorDetails.data.bloodGroup}
                                />
                            )
                        })}
                    </View>
                </ScrollView>

            </Animatable.View>
        </View >
    )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        flex: 1,
        backgroundColor: '#8a0303'
    },
    header: {
        flex: 0.1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30,
        marginBottom: 20,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
    },

    // button: {
    //     alignItems: 'center',
    //     marginTop: 50
    // },

});