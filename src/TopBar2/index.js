import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const Drawer = createDrawerNavigator()

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Overview from "./overview"
import Related from "./related"

class Routes1 extends Component {                     
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator headerMode='none' tabBarOptions={{activeTintColor:"#3fad72", inactiveTintColor:"gray", indicatorStyle:{backgroundColor:"#3fad72"}}}>
                    <Tab.Screen name="overview" component={Overview} />
                    <Tab.Screen name="related" component={Related} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
export default Routes1