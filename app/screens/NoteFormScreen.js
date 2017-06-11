import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NoteFormScreen extends React.Component {
  static navigationOptions = {
    title: 'Add note',
  };
  render() {
    return (
      <View>
        <Text>Add a note</Text>
      </View>
    );
  }
}
