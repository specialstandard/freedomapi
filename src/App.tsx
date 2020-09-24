import React, { FC, useState } from 'react';
import styles from './App.module.css';
import axios from 'axios'
import { useEffect } from 'react';
import CityWeather from './components/CityWeather/CityWeather';
import Nav from './components/Nav/Nav';

const App: FC = () => {

  const [weather, setWeather] = useState<any>(null)

  const cityIds: string[] = ['6619279', '2158177', '2063523', '2078025', '2174003', '2073124']
  const cityIdParameter: string = cityIds.join()
  const url: string = `http://api.openweathermap.org/data/2.5/group?id=${cityIdParameter}&appid=ba11d1f71eeace48b3ac1eb50b3b1f2c`

  useEffect(() => {
    axios.get(url).then((result) => {
      setWeather(result.data.list)
    })
  }, [url, setWeather])

  if(!weather) return null

  return (
    <div className={styles.app}>
      <Nav />
      <div className={styles.citiesContainer}>
        {weather.map((cityWeather: any) => <CityWeather key={cityWeather.id} weather={cityWeather} />)}
      </div>
    </div>
  );
}

export default App;
