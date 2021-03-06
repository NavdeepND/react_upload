import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions"
import { Icon } from "native-base"
import Swiper from "react-native-swiper"
import { Divider } from "react-native-elements"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowWidthset = windowWidth - 50;

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ width: windowWidthset, height: 220, marginHorizontal: 15, marginTop: 40, borderRadius: 10 }}>
                        <Swiper style={styles.wrapper} showsButtons={false} autoplay={false} paginationStyle={{ bottom: 15 }} activeDotColor="#3fad72">
                            <View style={{ flex: 0.8, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                                <Image source={require("../../assets/wheel.png")} style={{ resizeMode: "contain", height: responsiveHeight(25) }} />
                                {/* <Text style={styles.text}>Hello</Text> */}
                            </View>
                            <View style={styles.slide2}>
                                <Text style={styles.text}>World</Text>
                            </View>
                            <View style={styles.slide3}>
                                <Text style={styles.text}>Hello World</Text>
                            </View>
                        </Swiper>
                    </View>
                    <Divider style={{ backgroundColor: "gray", marginVertical: 10 }} />
                    <View style={{ marginHorizontal: 15 }}>
                        <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.5) }}>Professional Modification of racing car Steering Wheel</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10, marginHorizontal: 15, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: responsiveFontSize(2.5) }}>$53.00</Text>
                            <Text style={{ textDecorationLine: "line-through", color: "gray", fontSize: responsiveFontSize(2), marginHorizontal: 5 }}>$55.00</Text>
                        </View>
                        <Icon name="sharealt" type="AntDesign" style={{fontSize:responsiveFontSize(3)}} />
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop:5 }}>
                        <Icon name="shipping-fast" type="FontAwesome5" style={{ color: "#3fad72", fontSize:responsiveFontSize(2) }} />
                        <Text style={{fontSize:responsiveFontSize(1.8), marginLeft:3}}>Free Shipping  Arrivals: Tuesday, Nov 21</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 10 }}>
                        <Icon name="star" type="AntDesign" style={{ color: "#3fad72", fontSize: 20 }} />
                        <Icon name="star" type="AntDesign" style={{ color: "#3fad72", marginLeft: 5, fontSize: 20 }} />
                        <Icon name="star" type="AntDesign" style={{ color: "#3fad72", marginLeft: 5, fontSize: 20 }} />
                        <Icon name="star" type="AntDesign" style={{ color: "#3fad72", marginLeft: 5, fontSize: 20 }} />
                        <Icon name="star" type="AntDesign" style={{ color: "#3fad72", marginLeft: 5, fontSize: 20 }} />
                        <Text style={{ color: "gray", marginLeft: 5 }}>(5000)</Text>
                    </View>
                    <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                        <Text style={{ color: "gray", fontSize: responsiveFontSize(2) }}>Availability: <Text style={{ color: "#3fad72" }}> In stock (12)</Text></Text>
                        <Text style={{ marginTop: 20, fontSize: responsiveFontSize(2.5), fontWeight: "bold" }}>Color</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 10, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: 30, height: 30, backgroundColor: "red", borderRadius: 30 }}></View>
                            <View style={{ width: 30, height: 30, backgroundColor: "brown", borderRadius: 30, marginLeft: 10 }}></View>
                            <View style={{ width: 30, height: 30, backgroundColor: "gray", borderRadius: 30, marginLeft: 10 }}></View>
                            <View style={{ width: 30, height: 30, backgroundColor: "violet", borderRadius: 30, marginLeft: 10 }}></View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ height: 30, width: 30, borderRadius: 10, borderWidth: 1, borderColor: "#3fad72", alignItems: "center", justifyContent: 'center', }}>
                                <Text style={{ color: "#3fad72", fontSize: responsiveFontSize(3) }}>-</Text>
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: responsiveFontSize(2.5) }}>1</Text>
                            <View style={{ height: 30, width: 30, marginLeft: 10, borderRadius: 10, borderWidth: 1, borderColor: "#3fad72", alignItems: "center", justifyContent: 'center', }}>
                                <Text style={{ color: "#3fad72", fontSize: responsiveFontSize(3) }}>+</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{width:windowWidthset, marginHorizontal:25, backgroundColor:"#3fad72",borderRadius:15, marginTop:30, height:responsiveHeight(8), alignItems:"center", justifyContent:"center"}}>
                        <Text style={{color:"white", fontSize:responsiveFontSize(2)}}>Buy it Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:windowWidthset, marginHorizontal:25,borderWidth:1, borderColor:"#3fad72", backgroundColor:"fff",borderRadius:15, marginVertical:10, height:responsiveHeight(8), alignItems:"center", justifyContent:"center"}}>
                        <Text style={{color:"#3fad72", fontSize:responsiveFontSize(2)}}>Add to Cart</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Overview;

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
