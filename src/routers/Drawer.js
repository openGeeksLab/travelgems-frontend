import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import SideBar from '../components/sidebar';
import Webview from '../containers/Webview/Webview';
import Activity from '../containers/Activity/Activity';
import Destination from '../containers/Destination/Destination';
import QuestionnaireContainer from '../containers/Questionnaire/index';
import Mytravelgems from '../components/MyTravelgems/Mytravelgems';
import DayPlan from '../components/MyTravelgems/DayPlan/DayPlan';
import Smalltile from '../components/Smalltile/Smalltile';
import Tabview from '../components/Tabview/Tabview';
import MyOrderPlan from '../containers/Myorder/Myorderplan/MyOrderPlan';
import MyOrderTab from '../components/MyOrderTab/MyOrderTab';
const MainDrawerRouter = DrawerNavigator(
  {
    
    Home: { screen: Tabview },
    Webview: { screen: Webview },
    Activity: { screen: Activity },
    Destination: { screen: Destination },
    Smalltile: { screen: Smalltile },
    Questionnaire: { screen: QuestionnaireContainer },
    MyOrderPlan: { screen: MyOrderPlan },
    MyOrderTab: { screen: MyOrderTab },
    Mytravelgems: { screen: Mytravelgems },
   DayPlan: { screen: DayPlan },
  },
  {
    initialRouteName: 'Questionnaire',
    // initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <SideBar {...props} />,
  },
);

export default MainDrawerRouter;
