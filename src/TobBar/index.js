import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const Drawer = createDrawerNavigator()

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FirstPage from "../first";
import FourthPage from "../Fourth";
import SecondPage from "../second";
import ThirdPage from "../Third";

class Routes1 extends Component {                     
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator headerMode='none' tabBarOptions={{activeTintColor:"#3fad72", inactiveTintColor:"gray", indicatorStyle:{backgroundColor:"#3fad72"}}}>
                    <Tab.Screen name="clothing" component={FirstPage} />
                    <Tab.Screen name="Men's" component={SecondPage} />
                    <Tab.Screen name="Women's" component={ThirdPage} />
                    <Tab.Screen name='Socks' component={FourthPage} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
export default Routes1