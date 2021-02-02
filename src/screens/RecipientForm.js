import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native'
import { HelperText, TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import HomeScreen from './HomeScreen';




export default function RecipientsForm({ navigation }) {


    const OnFormSubmit = () => {


        const formCredentials = {
            firstName,
            lastName,
            gender,
            bloodGroup,
            phoneNumber
        }

        console.log(formCredentials);

        firestore().collection("BloodBankData").doc('xLMwmNhomFx9LP7SJxvy').collection("RecipientsData").add(formCredentials);

        setFirstName('')
        setLastName('');
        setPhoneNumber('')
        setGender('')
        setBloodGroup('')
        navigation.replace('HomeScreen')

    }

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');


    // Blood Group



    // Input Errors

    const FirstNameErrors = () => {
        return firstName.length < 3
    }
    const LastNameErrors = () => {
        return lastName.length < 3
    }

    //Form Validation

    // Will do it later



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#8a0303' barStyle="light-content" />

            <View backgroundColor='#8a0303'>
                <Text style={styles.title}>
                    Recipients Form
               </Text>
            </View>
            <ScrollView>
                <View style={{
                    marginHorizontal: 30,
                    marginVertical: 30,
                    paddingBottom: 30,
                }}>
                    <View>
                        <TextInput label="First Name*" value={firstName} onChangeText={firstName => setFirstName(firstName)} />
                        <HelperText type="error" visible={FirstNameErrors()}>
                            First Name is invalid!
                </HelperText>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput label="Last Name*" value={lastName} onChangeText={lastName => setLastName(lastName)} />
                        <HelperText type="error" visible={LastNameErrors()}>
                            Last Name is invalid!
                </HelperText>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TextInput label="Phone number*" value={phoneNumber} onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} />
                        {/* <HelperText type="error" visible={LastNameErrors()}>
                    Last Name is invalid!
                </HelperText> */}
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select Gender',
                                value: gender,
                                color: 'black',
                            }}
                            style={styles.RNPicker}
                            color={'black'}
                            value={gender}
                            onValueChange={(gender) => setGender(gender)}
                            items={[
                                { label: 'Male', value: 'Male' },
                                { label: 'Female', value: 'Female' },
                                { label: 'Others', value: 'Others' },
                            ]}
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select Blood Group You Need...',
                                value: bloodGroup,
                                color: 'black',
                            }}
                            style={styles.RNPicker}
                            color={'black'}
                            value={bloodGroup}
                            onValueChange={(bloodGroup) => setBloodGroup(bloodGroup)}
                            items={[
                                { label: 'A+', value: 'A+' },
                                { label: 'A-', value: 'A-' },
                                { label: 'B+', value: 'B+' },
                                { label: 'B-', value: 'B-' },
                                { label: 'AB+', value: 'AB+' },
                                { label: 'AB-', value: 'AB-' },
                                { label: '0+', value: '0+' },
                                { label: '0-', value: '0-' },
                            ]}
                            style={{ color: 'black' }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.submitBtn} onPress={OnFormSubmit}>
                            <Text style={styles.submitBtnText}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                    </View>
                </View>
            </ScrollView>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    submitBtn: {
        backgroundColor: '#e71d36',
        marginTop: 20,
        color: 'white',
    },

    submitBtnText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontSize: 24,
        padding: 10,
        color: 'white',
        textAlign: 'center',
    },
    RNPicker: {
        backgroundColor: 'white',
        color: 'black'
    }

})
