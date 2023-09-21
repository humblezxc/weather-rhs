import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {fetchData} from "../store/reducers/ActionCreator.ts";
import ErrorMessage from "./ErrorMessage.tsx";
import {handleCity} from "../store/reducers/WeatherSlice.ts";

export default function WeatherForm() {
    const [city, setCity] = useState('')
    const [error, setError] = useState("")
    const {cityName} = useAppSelector(state => state.weatherReducer);
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('')
        setCity(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim().length === 0) {
            setError('Please enter existing city.')
            return;
        }
        dispatch(handleCity(city));
        dispatch(fetchData(cityName))
    }
    useEffect(() => {
        if (cityName) {
            dispatch(fetchData(cityName));
        }
    }, [cityName, dispatch]);

    return (
        <form className="flex flex-col pb-4" onSubmit={handleSubmit}>
            <div className="flex">
                <input className="border w-full sm:max-w-200 focus:border-red-600 outline-none p-2"
                       onChange={handleChange}
                       type="text" placeholder="Enter city name"/>
                <button className="button bg-red-600">Show</button>
            </div>
            {error && <>
                <ErrorMessage error={error}/>
            </>}
        </form>
    )
}
