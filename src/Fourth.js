import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class FourthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Fourth </Text>
        <Button onPress={() => { this.props.navigation.navigate("FirstPage")}} title='go to first' />
      </View>
    );
  }
}

export default FourthPage;
