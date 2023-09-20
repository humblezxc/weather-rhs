import React, {useState} from "react";
import {IHandleCityChange} from "../models/ICityWeather.ts";

interface WeatherFormProps {
    handleCityChange: IHandleCityChange
}
export default function WeatherForm({handleCityChange}: WeatherFormProps) {
    const [city, setCity] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value.trim())
    }
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
        handleCityChange(city);
    }
    return (
        <form className="flex pb-4" onSubmit={handleSubmit}>
            <input className="border focus:border-red-600 outline-none p-2" onChange={handleChange} type="text" placeholder="Enter city name"/>
            <button className="button bg-red-600">Show</button>
        </form>
    )
}
