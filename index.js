/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player'
LogBox.ignoreLogs(['Require cycle', 'Warning']);
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);
LogBox.ignoreLogs(['react-native-gesture-handler'])
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./Service.js'))