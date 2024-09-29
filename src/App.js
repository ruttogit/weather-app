import { BarLoader } from "react-spinners";
import Header from "./components/Header/Header";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import useFetch from "./hooks/useFetch";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Bars } from "react-loader-spinner";

function App() {

  const [searchQuery, setSearchQuery] = useState('Eldoret');
  const {error, loading, weatherData} = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=e65158f1c8f2a433ae768b6ca1002967&units=imperial`)
  if (loading) return <div className="spiner">
    <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  </div> 
  if (error) return <p>Error!</p>
  if (weatherData.cod === '404') return <h1>The city Was no found Retry Again</h1>





  
  

  return (
    <div>
      <Header error={error} loading={loading} weatherData={weatherData}  setSearchQuery={setSearchQuery}/>
      <WeatherDetails weatherData={weatherData}/>
    </div>
  );
}

export default App;
