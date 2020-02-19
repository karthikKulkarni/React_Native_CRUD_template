import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from '../components/HomeScreen';
import Sample1 from '../components/Sample1';

class RootContainer extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#E6E6E6', height: '100%', width: '100%' }}>
        <SafeAreaView />
        <StatusBar barStyle="dark-content" />
        <Text>Hello Crud</Text>

        <Sample1 />
        <HomeScreen />
      </View>
    );
  }
}

export default RootContainer;
