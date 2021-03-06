import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { Divider } from "react-native-elements"
import { Icon } from 'native-base';
import { responsiveFontSize } from "react-native-responsive-dimensions"
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
        <Divider style={{ backgroundColor: "gray", marginTop: 20 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 5 }}>
          <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', flexDirection: "row" }}>
            <Text style={{ fontSize: responsiveFontSize(1.8) }}>Sort</Text>
            <Icon name="chevron-small-down" type="Entypo" />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', flexDirection: "row" }}>
            <Text style={{ fontSize: responsiveFontSize(1.8) }}>Categories</Text>
            <Icon name="chevron-small-down" type="Entypo" />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', flexDirection: "row" }}>
            <Text style={{ fontSize: responsiveFontSize(1.8) }}>Size</Text>
            <Icon name="chevron-small-down" type="Entypo" />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', flexDirection: "row" }}>
            <Text style={{ fontSize: responsiveFontSize(1.8) }}>Filter</Text>
            <Icon name="filter" type="FontAwesome" style={{ fontSize: 20 }} />
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ width: windowWidthset, height: 220, marginHorizontal: 15, marginTop: 15, borderRadius: 10 }}>
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
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }}>
            <Text style={{ alignSelf: "center", fontSize: responsiveFontSize(2), fontWeight:"bold" }}>Good Price</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', flexDirection: "row" }}>
                <Text style={{ fontSize: responsiveFontSize(2), color: "#3fad72" }}>View All</Text>
                <Icon name="chevron-small-right" type="Entypo" style={{ color: "#3fad72" }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginHorizontal: 15, justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor:"gray" }}>
              </View>
              <Text style={{ marginLeft: 5 }}>T-shirts</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor:"gray" }}>
              </View>
              <Text style={{ marginLeft: 5 }}>Shirts</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor:"gray" }}>
              </View>
              <View style={{ flexDirection: "column" }}></View>
              <Text style={{ marginLeft: 5 }}>Polo T-shirts</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop:30 }}>
            <Text style={{ alignSelf: "center", fontSize: responsiveFontSize(2), fontWeight:"bold" }}>New Release</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', flexDirection: "row" }}>
                <Text style={{ fontSize: responsiveFontSize(2), color: "#3fad72" }}>View All</Text>
                <Icon name="chevron-small-right" type="Entypo" style={{ color: "#3fad72" }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginHorizontal: 15, justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor:"gray" }}>
              </View>
              <Text style={{ marginLeft: 5 }}>T-shirts</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor:"gray" }}>
              </View>
              <Text style={{ marginLeft: 5 }}>Shirts</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ width: 110, height: 150, borderWidth: 1, borderRadius: 10, borderColor:"gray" }}>
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

// export default FirstPage = ({ navigation }) => {
//   console.log(navigation);
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
//       <Text>First Page</Text>
//       <Button title='go to second' onPress={() => { navigation.navigate('SecondPage') }} />
//     </View>
//   )
// }