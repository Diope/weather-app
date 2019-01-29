import React from 'react';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';
import {fetchLocation, fetchWeather, } from './utils/weatherAPI'

import weatherImages from './utils/weatherImages';


import InputSearch from './components/InputSearch';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: '',
      location: '',
      loading: false,
      error: false,
      temperature: 0,
      weather: '',
      humidity: 0
    }

    this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
  }

  handleUpdateLocation = async (city) => {

    if (!city) return

    this.setState({loading: true}, async () => {
      try {
        const locationId = await fetchLocation(city)
        const {location, weather, temperature, country, humidity} = await fetchWeather(locationId)
        
        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature,
          country,
          humidity
        })

      } catch (e) {
        this.setState({
          loading: false,
          error: true
        })
      }
    })
  }

  render() {

    const {location, humidity, country, weather, loading, error, temperature} = this.state;
    console.log(weather)

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={weatherImages(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailContainer}>
            <ActivityIndicator animating={loading} color="white" size="large" />

            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different city.
                  </Text>
                )}

                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
                    <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                    <Text style={[styles.smallText, styles.textStyle]}>Humidity: {humidity}</Text>
                    <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature*9/5) + 32}`}°F</Text>
                  </View>
                )}

                <InputSearch
                  placeholder="Please Enter A City"
                  onSubmit={this.handleUpdateLocation}
                />
              </View>
            )}

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
