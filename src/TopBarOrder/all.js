import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const windowWidthset = windowWidth - 50;

class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems:"center", justifyContent:"center", flex:1, marginHorizontal:15}}>
        <Text style={{fontSize:responsiveFontSize(3), fontWeight:"bold", marginVertical:10}}> You made no orders yet </Text>
        <Text style={{color:"grey"}}>All your orders and tracking details go here.</Text>
        <TouchableOpacity style={{alignItems:"center", justifyContent:"center",marginTop:20,width:windowWidthset,height:responsiveHeight(8), backgroundColor:"#3fad72",borderRadius:10}}>
            <Text style={{color:"white", fontSize:responsiveFontSize(2)}}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default All;
