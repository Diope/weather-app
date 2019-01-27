import React from 'react';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, TextInput } from 'react-native';

import InputSearch from './components/InputSearch';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={[styles.largeText, styles.textStyle]}>Toronto, Canada</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Snow</Text>
        <Text style={[styles.largeText, styles.textStyle]}>18° F</Text>

        <InputSearch placeholder={"Enter Any City"}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18
  },
});
