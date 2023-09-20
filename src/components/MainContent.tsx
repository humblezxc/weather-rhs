import axios from "axios";
import {useEffect} from "react";
import {ICityWeather} from "../models/ICityWeather.ts";
import CityWeatherData from "./CityWeatherData.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {weatherSlice} from "../store/reducers/WeatherSlice.ts";

interface WeatherLayoutProps {
    city: string | null
}

const API_KEY = import.meta.env.VITE_API_KEY;

export default function MainContent({city}: WeatherLayoutProps) {
    const citiesWithCount = useAppSelector((state) => state.weatherReducer.weather);
    const {requestCount} = weatherSlice.actions
    const dispatch = useAppDispatch();

    const fetchWeatherData = async () => {
        try {
            if (city) {
                const response = await axios.get<ICityWeather>(
                    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
                );
                dispatch(requestCount({...response.data, count: 1}))
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, [city, dispatch])
    return (
        <main>
            <section className="container relative overflow-x-auto py-10">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            City
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Temperature
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Count
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {citiesWithCount.map((city, index) => (
                        <CityWeatherData key={index} cityWeather={city}/>
                    ))}
                    </tbody>
                </table>
            </section>
        </main>
    );

}
