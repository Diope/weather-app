const images = {
  Clear: require('../assets/clear.png'),
  Hail: require('../assets/hail.png'),
  'Heavy Clouds': require('../assets/heavyClouds.png'),
  'Heavy Rain': require('../assets/heavyRain.png'), //Get it...Heavy Rain lololol!!
  'Light Clouds': require('../assets/lightClouds.png'),
  'Light Rain': require('../assets/lightRain.png'),
  Showers: require('../assets/showers.png'),
  Sleet: require('../assets/sleet.png'),
  Snow: require('../assets/snow.png'),
  Splash: require('../assets/splash.png'),
  Thunder: require('../assets/thunder.png'),
}

export default weather => images[weather];