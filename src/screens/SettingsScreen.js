import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SettingsComponent from '../components/SettingsComponent'

const SettingsScreen = () => {
    const settingsOptions = [
        { title: 'Dark Theme', subTitle: 'Light', onPress: () => { } },
        { title: 'Profile', subTitle: 'Original', onPress: () => { } },
        { title: 'Notification', subTitle: 'Set Notifications', onPress: () => { } },
        { title: 'Details', subTitle: 'Permenant', onPress: () => { } },
        { title: 'Data', subTitle: '6.5GB', onPress: () => { } },
        { title: 'Files', subTitle: 'Upload', onPress: () => { } },
        { title: 'Font Size', subTitle: 'Medium', onPress: () => { } },
        { title: 'Version', subTitle: 'v2.1', onPress: () => { } },
    ]
    return (
        <View>
            <SettingsComponent settingsOptions={settingsOptions} />
        </View>
    )
}
export default SettingsScreen

const styles = StyleSheet.create({})
