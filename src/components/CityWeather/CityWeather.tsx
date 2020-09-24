import React, { FC } from 'react'

import { kelvinToCelsius } from '../../utils/utils'
import styles from './CityWeather.module.css'

interface CityWeatherProps {
  weather: any
}

const CityWeather: FC<CityWeatherProps> = ({ weather }) => {

  const {name, sys: { country }, main: { temp, feels_like }, weather: weatherArray } = weather

  const currentlyCelsius = Math.round(kelvinToCelsius(temp))
  const feelsLikeCelsius = Math.round(kelvinToCelsius(feels_like))
  const weatherIcon = `http://openweathermap.org/img/w/${weatherArray[0].icon}.png`

  if(!weather) return null

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {name}, {country}
      </div>
      <div className={styles.subHeading}>
        Currently {currentlyCelsius}&#8451;
      </div>
      <div className={styles.subHeading}>
        Feels like {feelsLikeCelsius}&#8451;
      </div>
      <div className={styles.text}>
        Weather conditions are {weatherArray[0].description}
      </div>
      <div className={styles.text}>
        <img src={weatherIcon} alt="weather icon}"/>
      </div>
    </div>
  )
}

export default CityWeather
