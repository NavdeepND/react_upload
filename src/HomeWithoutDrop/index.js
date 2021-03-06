import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { Divider } from "react-native-elements"
import { Icon } from 'native-base';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions"
import Swiper from "react-native-swiper"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowWidthset = windowWidth - 35;

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Divider style={{ backgroundColor: "gray", marginTop: 10 }} />
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ width: windowWidthset, height:responsiveHeight, marginHorizontal: 15, marginTop: 5, borderRadius: 10 }}>
                        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} paginationStyle={{ bottom: 15 }} activeDotColor="#3fad72">
                            <View style={styles.slide1}>
                                <Text style={styles.text}>Hello</Text>
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.text}>World</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>Hello World</Text>
                            </View>
                        </Swiper>
                    </View>

                    <View style={{ width: windowWidthset, height: 100, marginHorizontal: 15, flexDirection: "row" }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <View style={{ width: 60, height: 60, backgroundColor: "#3fad72", borderRadius: 60, alignItems: "center", justifyContent: "center" }}>
                                    <Icon name='cupcake' type="MaterialCommunityIcons" style={{ color: "white" }} />
                                </View>
                                <Text>Brownies</Text>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ width: 60, height: 60, backgroundColor: "#3fad72", borderRadius: 60, alignItems: "center", justifyContent: "center" }}>
                                    <Icon name='muffin' type="MaterialCommunityIcons" style={{ color: "white" }} />
                                </View>
                                <Text>Muffins</Text>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ width: 60, height: 60, backgroundColor: "#3fad72", borderRadius: 60, alignItems: "center", justifyContent: "center" }}>
                                    <Icon name='cookie' type="MaterialCommunityIcons" style={{ color: 'white' }} />
                                </View>
                                <Text>Cookies</Text>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ width: 60, height: 60, backgroundColor: "#3fad72", borderRadius: 60, alignItems: "center", justifyContent: "center" }}>
                                    <Icon name='leaf-maple' type="MaterialCommunityIcons" style={{ color: "white" }} />
                                </View>
                                <Text>Weed</Text>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ width: 60, height: 60, backgroundColor: "#3fad72", borderRadius: 60, alignItems: "center", justifyContent: "center" }}>
                                    <Icon name='cupcake' type="MaterialCommunityIcons" style={{ color: "white" }} />
                                </View>
                                <Text>Brownies</Text>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 10 }}>
                                <View style={{ width: 60, height: 60, backgroundColor: "#3fad72", borderRadius: 60, alignItems: "center", justifyContent: "center" }}>
                                    <Icon name='cupcake' type="MaterialCommunityIcons" style={{ color: "white" }} />
                                </View>
                                <Text>Brownies</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop: 15 }}>
                        <Text style={{ alignSelf: "center", fontSize: responsiveFontSize(2), fontWeight: "bold" }}>Recent Views</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', flexDirection: "row" }}>
                                <Text style={{ fontSize: responsiveFontSize(2), color: "#3fad72" }}>View All</Text>
                                <Icon name="chevron-small-right" type="Entypo" style={{ color: "#3fad72" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 15, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor: "gray" }}>
                            </View>
                            <Text style={{ marginLeft: 5 }}>T-shirts</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor: "gray" }}>
                            </View>
                            <Text style={{ marginLeft: 5 }}>Shirts</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor: "gray" }}>
                            </View>
                            <View style={{ flexDirection: "column" }}></View>
                            <Text style={{ marginLeft: 5 }}>Polo T-shirts</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop: 30 }}>
                        <Text style={{ alignSelf: "center", fontSize: responsiveFontSize(2), fontWeight: "bold" }}>Good Price Items</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', flexDirection: "row" }}>
                                <Text style={{ fontSize: responsiveFontSize(2), color: "#3fad72" }}>View All</Text>
                                <Icon name="chevron-small-right" type="Entypo" style={{ color: "#3fad72" }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginHorizontal: 15, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor: "gray" }}>
                            </View>
                            <Text style={{ marginLeft: 5 }}>T-shirts</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor: "gray" }}>
                            </View>
                            <Text style={{ marginLeft: 5 }}>Shirts</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor: "gray" }}>
                            </View>
                            <View style={{ flexDirection: "column" }}></View>
                            <Text style={{ marginLeft: 5 }}>Polo T-shirts</Text>
                        </View>
                    </View>
                    <Divider style={{ backgroundColor: "gray", marginTop: 20 }} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default FirstPage;

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        borderRadius: 10
    },
    slide2: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        borderRadius: 10
    },
    slide3: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
        borderRadius: 10
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})