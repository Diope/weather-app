import React from 'react';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, ImageBackground } from 'react-native';

import weatherImages from './utils/weatherImages';

import InputSearch from './components/InputSearch';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={weatherImages('Snow')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>Toronto, Canada</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Snow</Text>
            <Text style={[styles.largeText, styles.textStyle]}>18° F</Text>
 
            <InputSearch placeholder={"Enter Any City"}/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1 
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    opacity: 10
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
    }),
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 1.0)',
    textShadowRadius: 7,
    textShadowOffset: {width: 0 ,height: 5}
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
});
