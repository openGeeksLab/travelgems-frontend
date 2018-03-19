import './ReactotronConfig'
import { AppRegistry, StatusBar } from 'react-native';
import WarplyReactSDK from './src/services/WarplyReactSDK/WarplyReactSDK';
import App from './src/setup';

WarplyReactSDK.init();
StatusBar.setBarStyle('default');
AppRegistry.registerComponent('App', () => App);
