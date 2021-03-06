import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text> second </Text>
        <Button onPress={() => { this.props.navigation.navigate("ThirdPage")}} title='go to third' />
      </View>
    );
  }
}

export default SecondPage;
