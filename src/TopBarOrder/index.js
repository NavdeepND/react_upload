import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const Drawer = createDrawerNavigator()

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import All from "./all"
import Completed from "./completed"
import Cancelled from "./cancelled"

class Routes1 extends Component {                     
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator headerMode='none' tabBarOptions={{activeTintColor:"#3fad72", inactiveTintColor:"gray", indicatorStyle:{backgroundColor:"#3fad72"}}}>
                    <Tab.Screen name="all" component={All} />
                    <Tab.Screen name="completed" component={Completed} />
                    <Tab.Screen name="cancelled" component={Cancelled} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
export default Routes1