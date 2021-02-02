/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/screens/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import store from './src/store/store';

const RNRedux = () => (
    <Provider store={store} >
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
