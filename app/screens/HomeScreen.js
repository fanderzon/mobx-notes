import React, { Component } from 'react';
import { Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes',
  };
  render() {
    return <Text>Add a note</Text>;
  }
}
