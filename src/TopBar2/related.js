import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowWidthset = windowWidth - 25;

class Related extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ width: windowWidthset, height: responsiveHeight(22), borderRadius: 10, marginVertical: 20, marginHorizontal: 10, alignItems: "center", justifyContent: "center", flex: 0.4, backgroundColor: "#3fad72" }}>
                        <Text>Your Image goes here</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: 115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8 }}>
                            </View>
                            <View style={{ width:115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8, marginLeft:10 }}>
                            </View>
                            <View style={{ width: 115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8, marginLeft:10 }}>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop:5 }}>
                            <View style={{ width: 115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8 }}>
                            </View>
                            <View style={{ width:115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8, marginLeft:10 }}>
                            </View>
                            <View style={{ width: 115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8, marginLeft:10 }}>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop:5, marginBottom:10 }}>
                            <View style={{ width: 115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8 }}>
                            </View>
                            <View style={{ width:115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8, marginLeft:10 }}>
                            </View>
                            <View style={{ width: 115, height: 150, borderWidth: 1, borderColor: "gray", borderRadius: 8, marginLeft:10 }}>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Related;
