import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const Drawer = createDrawerNavigator()

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FirstPage from "./first";
import FourthPage from "./Fourth";
import SecondPage from "./second";
import ThirdPage from "./Third";
import SideNav from "./SideNav/index"

class Routes1 extends Component {                           //authstack
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator headerMode='none' drawerContent={props => <SideNav {...props} />}>
                    <Drawer.Screen name="FirstPage" component={FirstPage} />
                    <Drawer.Screen name="SecondPage" component={SecondPage} />
                    <Drawer.Screen name="ThirdPage" component={ThirdPage} />
                    <Drawer.Screen name='FourthPage' component={FourthPage} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}

// class Routes2 extends Component {                           //mainstack
//     render() {
//         return (
//             <Stack.Navigator headerMode='none'>
//                 <Stack.Screen name="FirstPage" component={FirstPage} />
//                 <Stack.Screen name="SecondPage" component={SecondPage} />
//             </Stack.Navigator>
//         )
//     }
// }

// const isloogedIn = true                        //redux
// class Routes extends Component {
//     render() {
//         return (
//             <NavigationContainer>
//                 <Stack.Navigator headerMode='none'>
//                     {
//                         isloogedIn
//                             ? (<Stack.Screen name='Routes2' component={Routes2} />)
//                             : (<Stack.Screen name='Routes1' component={Routes1} />)
//                     }
//                 </Stack.Navigator>
//             </NavigationContainer>
//         );
//     }
// }

//createswithchnavigator

export default Routes1;
