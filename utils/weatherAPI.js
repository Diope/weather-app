export const fetchLocation = async (city) => {
  const response = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
  //console.log(response, response.json())
  const locations = await response.json();
  //console.log(locations, locations[0])
  return locations[0].woeid;

}

export const fetchWeather = async (woeid) => {
  const response = await fetch(`https://www.metaweather.com/api/location/${woeid}`)
  const {title, consolidated_weather, parent} = await response.json();
  // console.log(consolidated_weather, parent)
  const {weather_state_name, the_temp, humidity} = consolidated_weather[0]
  const country = parent.title
  

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
    humidity,
    country
  }
}