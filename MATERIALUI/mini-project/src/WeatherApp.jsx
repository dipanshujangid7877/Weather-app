import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function  WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
        
            city: "Delhi",
            feelslike: 24.84,
            temp: 25.05,
            tempMin: 25.05,
            humidity: 47,
            weather: "haze"
        
    });
    
    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} />
        </div>
    )
}