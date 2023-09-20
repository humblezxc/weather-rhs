import {useEffect} from "react";
import CityWeatherData from "./CityWeatherData.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {fetchData} from "../store/reducers/ActionCreator.ts";

export default function MainContent() {
    const citiesWithCount = useAppSelector((state) => state.weatherReducer.weather);
    const dispatch = useAppDispatch();
    const city = useAppSelector(state => state.weatherReducer.cityName);

    useEffect(() => {
        if (city) {
            dispatch(fetchData(city));
        }
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
