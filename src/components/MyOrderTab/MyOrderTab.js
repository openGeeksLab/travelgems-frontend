import {
    StackNavigator, TabNavigator
} from 'react-navigation';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MyOrderPlan from "../containers/Myorderplan/MyOrderPlan";


export const MyOrderTab = TabNavigator({
    MyOrderPlan: {screen: MyOrderPlan},
   // NotificationsScreen: {screen: NotificationsScreen},
    //TabC: { screen: Stack },
}, {
    order: ['MyOrderPlan',]
});
export default Tabs;
