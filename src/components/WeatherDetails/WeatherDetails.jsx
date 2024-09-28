import { WiHumidity } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";

import './WeatherDetails.css'

function WeatherDetails({weatherData}) {

    let sunrise = weatherData.sys.sunrise;
    let sunrisedate = new Date(sunrise * 1000);
    let sunrisetime = sunrisedate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    console.log(sunrisetime);


    let sunset = weatherData.sys.sunset;
    let sunsetdate = new Date(sunset * 1000);
    let sunsettime = sunsetdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


  return (
    <div className='weatherdetails'>
        <div className="weather-details-wrap">
            <div className="left">
                <div className="top-weather">
                    <div className="icon">
                        <WiThermometer />
                    </div>
                    <div className="details">
                        <p className="unit">{weatherData.main.feels_like} °C</p>
                        <p>Feels Like</p>
                    </div>
                </div>
                <div className="bottom-weather">
                    <div className="icon">
                        <WiHumidity />
                    </div>
                    <div className="details">
                        <p className="unit">{weatherData.main.humidity} g/kg</p>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>
            <div className="center">
            <div className="top-weather">
                    <div className="icon">
                        <WiStrongWind />
                    </div>
                    <div className="details">
                        <p className="unit">{weatherData.wind.speed} KM/H</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
                <div className="bottom-weather">
                    <div className="icon">
                        <WiStrongWind />
                    </div>
                    <div className="details">
                        <p className="unit">{weatherData.wind.gust}</p>
                        <p>Wind Gust</p>
                    </div>
                </div>
                
            </div>
            <div className="right">
            <div className="top-weather">
                    <div className="icon">
                        <WiSunrise />
                    </div>
                    <div className="details">
                        <p className="unit">{sunrisetime}</p>
                        <p>Sunrise</p>
                    </div>
                </div>
                <div className="bottom-weather">
                    <div className="icon">
                        <WiSunset />
                    </div>
                    <div className="details">
                        <p className="unit">{sunsettime}</p>
                        <p>Sunset</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WeatherDetails