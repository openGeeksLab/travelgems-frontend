import {
    StackNavigator, TabNavigator
} from 'react-navigation';
import {
    TouchableOpacity,
    Text,
    View,
    Platform
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


import Activity from "../../containers/Myorder/Activity/Activity";
import Plan from "../../containers/Myorder/Plan/plan";
const MyOrderTab = TabNavigator({
    Plan: { screen: Plan },
    Activity: { screen: Activity },

},
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
           
            activeTintColor: 'white',
            activeBackgroundColor: '#46DFE8',
            inactiveTintColor: 'black',

            labelStyle: {

                fontSize: Platform.OS === 'android' ? 12 : 16,
                paddingBottom: Platform.OS === 'android' ? 7 : 10,
                margin: 0,
            },

        },

    },
);
MyOrderTab.navigationOptions = {
    title: 'tab travelgems',
};

export default MyOrderTab;
