import React, {useState} from "react";
import {useAppDispatch} from "../hooks/redux.ts";
import {handleCity} from '../store/reducers/WeatherSlice.ts'

export default function WeatherForm() {
    const [city, setCity] = useState('')
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value.trim())
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim() !== '') {
            dispatch(handleCity(city.trim()));
        }
    }

    return (
        <form className="flex pb-4" onSubmit={handleSubmit}>
            <input className="border focus:border-red-600 outline-none p-2" onChange={handleChange} type="text"
                   placeholder="Enter city name"/>
            <button className="button bg-red-600">Show</button>
        </form>
    )
}
