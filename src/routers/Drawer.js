import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import SideBar from '../components/sidebar';
import Webview from '../containers/Webview/Webview';
import Activity from '../containers/Activity/Activity';
import Destination from '../containers/Destination/Destination';
import Smalltile from '../components/Smalltile/Smalltile';
import Tabview from '../components/Tabview/Tabview';

const MainDrawerRouter = DrawerNavigator(
  {
    Home: { screen: Tabview },
    Webview: { screen: Webview },
    Activity: { screen: Activity },
    Destination: { screen: Destination },
    Smalltile: { screen: Smalltile },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <SideBar {...props} />,
  },
);

export default MainDrawerRouter;
