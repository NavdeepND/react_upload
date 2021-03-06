import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import { Icon } from 'native-base'
import { Divider } from "react-native-elements"

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1, marginTop: responsiveHeight(3) }}>
                    <View style={styles.customHeader}>
                        <Text style={{ fontSize: responsiveFontSize(3) }}>HAVAZUSE</Text>
                        <View style={{ height: 80, width: 80, marginTop: 15, borderRadius: 80, borderWidth: 1, borderColor: "#3fad72" }}></View>
                        <Text style={{ fontSize: responsiveFontSize(2.5), marginTop: 15 }}>John Doe</Text>
                    </View>
                    <View style={{ marginLeft: responsiveWidth(7), marginTop: 10, flex: 0.38 }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5), marginVertical: 15 }}>YOUR PACKAGES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5) }}>PICKUP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5), marginVertical: 15 }}>HOME</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5) }}>CURRENT STOP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5), marginVertical: 15 }}>BREAK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5) }}>VEHICLE INSPECTION</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider style={{ backgroundColor: "gray", marginTop: 15 }} />
                    <View style={{ flex: 0.3, marginLeft: responsiveWidth(7) }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5), marginVertical: 15 }}>LOCAL SHOPPING</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5) }}>ACCOUNT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5), marginVertical: 15 }}>HELP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: responsiveFontSize(2.5) }}>FEEDBACK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Icon ios="ios-log-out-outline" android="md-log-out-outline" type="Ionicons" style={{ color: "red", marginVertical: 15 }} />
                            <Text style={{ fontSize: responsiveFontSize(2.5), marginVertical: 15, marginLeft: 5 }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default SideNav;

const styles = StyleSheet.create({
    customHeader: {
        flex: 0.28,
        alignItems: 'center',
    },
    customFooter: {
        flex: 0.8,
    },
    customIcon: {
        color: '#000',
        marginRight: responsiveWidth(2)
    },
    customtext: {
        color: '#000',
        marginLeft: responsiveWidth(2),
        fontSize: responsiveFontSize(2.3)
    },
    customButton: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
