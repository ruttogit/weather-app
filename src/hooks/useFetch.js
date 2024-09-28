
import { useState, useEffect} from "react";
const useFetch = (url) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true)

        try{
            const res = await fetch(url)
            const json = await res.json()



            setWeatherData(json)
            setLoading(false)
        }catch(error){
            setError(error)
            setLoading(false)
            console.log('error')
            
        }
      }
      fetchData()
    }, [url]);

    return { loading, error, weatherData }; // Return as an object
};

export default useFetch;