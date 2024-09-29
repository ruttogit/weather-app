import { useState } from "react";
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import './Header.css'


function Header({error, loading, weatherData, searchQuery, setSearchQuery}) {










  const [query, setQuery] = useState('Eldoret');


  const handleSearch = () => {
    setSearchQuery(query);
  }



  return(
    <div className="header">
      <Navbar setQuery={setQuery} onSearch={handleSearch} weatherData={weatherData}/>
      <Hero searchQuery={searchQuery} error={error} loading={loading} weatherData={weatherData}/>
    </div>
  )
  
}

export default Header