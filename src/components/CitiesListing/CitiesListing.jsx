import CityCard from "../CityCard/CityCard";
import "./styles.css"

import selectedCities from "../../fakeDatabase/cities"

function CitiesListing({handleClick}) {
    return (
        <div className="citiesContainer">
            {selectedCities && 
            selectedCities.map(city => (
                <CityCard name={city.name} key={city.id} handleClick={handleClick}/>
            ))}
        </div>
    )
}

export default CitiesListing;