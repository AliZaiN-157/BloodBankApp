import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './AuthScreen';
import SigninScreen from './SigninScreen';
import SignUpScreen from './SignUpScreen';
import SplashScreen from './SplashScreen';
import DonorForm from './DonorForm';
import Profile from './Profile';
import RecipientForm from './RecipientForm';
import HomeScreen from './HomeScreen';
import QuestionScreen from './QuestionScreen';
import { StackNavigator } from './StackNavigator';




export default ({ navigation }) => {
    return (
        <NavigationContainer >
            <StackNavigator />
        </NavigationContainer>
    );
};