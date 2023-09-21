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
    }, [dispatch])

    return (
        <main>
            <section className="container py-10">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-gray-900 uppercase">
                    <tr>
                        <th scope="col" className="md:px-6 py-3">
                            City
                        </th>
                        <th scope="col" className="md:px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="md:px-6 py-3">
                            Temperature
                        </th>
                        <th scope="col" className="md:px-6 py-3">
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
