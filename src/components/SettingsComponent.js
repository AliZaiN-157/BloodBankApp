import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function SettingsComponent({ settingsOptions }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <StatusBar backgroundColor='#8a0303' barStyle="light-content" />
            {settingsOptions.map(({ title, subTitle, onPress }) => {
                return (
                    <TouchableOpacity key={title}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{
                                paddingHorizontal: 20,
                                paddingBottom: 25,
                                paddingTop: 25,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Text style={{ fontSize: 18 }}>{title}</Text>
                                {subTitle &&
                                    <Text style={{ fontSize: 14, opacity: 1, color: 'grey' }}>
                                        {subTitle}
                                    </Text>}

                            </View>
                            <View style={{ paddingRight: 10 }}>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="black"
                                    size={25}
                                />
                            </View>
                        </View>
                        <View style={{ height: 0.7, backgroundColor: 'black' }}>

                        </View>
                    </TouchableOpacity>
                )
            }

            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({})
