import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ThirdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text> Third </Text>
        <Button onPress={() => { this.props.navigation.navigate("FourthPage")}} title='go to fourth' />
      </View>
    );
  }
}

export default ThirdPage;
