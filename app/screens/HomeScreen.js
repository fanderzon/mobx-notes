import React, { Component } from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Notes',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        onPress={() => navigate('NoteForm')}
        title="Add a note" />
    );
  }
}
