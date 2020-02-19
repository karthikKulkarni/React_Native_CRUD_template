import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Sample1 extends Component {
  render() {
    return (
      <View>
        <Text testID={'Samlple'}> textInComponent </Text>
      </View>
    );
  }
}

export default Sample1;
