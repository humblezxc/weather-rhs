import axios from "axios";
import {useEffect, useState} from "react";
import {ICityWeather} from "../models.ts";
import CitiesData from "./CitiesData.tsx";

interface WeatherLayoutProps {
    city: string | null
}

const API_KEY = import.meta.env.VITE_API_KEY;
export default function MainContent({city}: WeatherLayoutProps) {
    const [cities, setCities] = useState<ICityWeather[]>([])
    const fetchWeatherData = async () => {
        try {
            if (city) {
                const response = await axios.get<ICityWeather>(
                    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
                );
                setCities((prevCities) => [...prevCities, response.data]);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, [city])
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
                    {cities.map( (city, index) => <CitiesData key={index} cityWeather={city} />)}
                    </tbody>
                </table>
            </section>
        </main>
    );

}
