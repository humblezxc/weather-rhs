import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {handleCity} from '../store/reducers/WeatherSlice.ts'
import {fetchData} from "../store/reducers/ActionCreator.ts";

export default function WeatherForm() {
    const [city, setCity] = useState('')
    const lastSearchedCity = useAppSelector(state => state.weatherReducer.cityName);
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value.trim())
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city !== lastSearchedCity) {
            dispatch(handleCity(city));
            setCity(city);
        }
        dispatch(fetchData(city));
    }

    return (
        <form className="flex pb-4" onSubmit={handleSubmit}>
            <input className="border focus:border-red-600 outline-none p-2" onChange={handleChange} type="text"
                   placeholder="Enter city name"/>
            <button className="button bg-red-600">Show</button>
        </form>
    )
}
