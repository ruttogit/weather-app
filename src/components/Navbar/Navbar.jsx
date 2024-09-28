
import { CiSearch } from "react-icons/ci";
import { MdGpsFixed } from "react-icons/md";



function Navbar({setQuery, onSearch, query, weatherData}) {

  
  const handleOnChange = (e) => {
    setQuery(e.target.value); 
  }

  const handleSearchClick = () => {
    onSearch(query); 
  }


  return (
    <div className="nav-bar">
      <div className="logo">
        <img src="logoipsum-288.svg" alt="" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search City Name" onChange={handleOnChange}/>
        <div className="search-icon" onClick={handleSearchClick}>
            <CiSearch />
        </div>
      </div>
      <div className="right-nav">
        <div className="gps">
          <MdGpsFixed />
        </div>
        <p>{weatherData.sys.country}</p>
      </div>
  </div>
  )
}

export default Navbar