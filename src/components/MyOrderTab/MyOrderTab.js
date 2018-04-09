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
import DayPlan from "../../components/Mytravelgems/DayPlan/DayPlan";


const MyOrderTab = TabNavigator({
    // MyOrderPlan: {screen: MyOrderPlan},
    DayPlan: { screen: DayPlan },
    //TabC: { screen: Stack },
},
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            showIcon: Platform.OS === 'android' ? true : true,
            activeTintColor: 'white',
            activeBackgroundColor: 'grey',
            inactiveTintColor: 'black',
            labelStyle: {
                fontSize: Platform.OS === 'android' ? 12 : 16,
                paddingTop: Platform.OS === 'android' ? 5 : 10,
                margin: 0,
            },
        },
    },
);
MyOrderTab.navigationOptions = {
    title: 'tab example',
};

export default MyOrderTab;
