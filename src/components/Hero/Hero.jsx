import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import './Hero.css'







function Hero({searchQueryerror, loading, weatherData}) {


    
    let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`





    let obj = new Date(); 
    let day = obj.getDate();
    const month = obj.toLocaleString('fr-FR', { month: 'short' }); 
    // let month = obj.getMonth() + 1;  
    let year = obj.getFullYear(); 
  return (
    <div className="hero">
        <div className="hero-left">
            <div className="city-cont">
                <IoLocationOutline />
                <h1 className="city">{weatherData.name}</h1>
            </div>
            <div className="bottom">
                <h1 className="temperature">{weatherData.main.temp}°C</h1>
                <h2 className="weather">{weatherData.weather[0].main}</h2>
                <div className="date">
                    <div className="calendar-icon">
                        <FaRegCalendarAlt />
                    </div>
                    <p>{day} {month} {year}</p>
                </div>
                </div>
        </div>
        <div className="hero-right">
            <img src={iconUrl} alt=""/>
        </div>
    </div>
  )
}

export default Hero