import {useEffect} from "react";
import CityWeatherData from "./CityWeatherData.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {fetchData} from "../store/reducers/ActionCreator.ts";
import {Modal} from "./Modal.tsx";

export default function MainContent() {
    const {weather, cityName, error, isLoading, modal} = useAppSelector(state => state.weatherReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (cityName) dispatch(fetchData(cityName));
    }, [dispatch])
    return (
        <main>
            <section className="container py-10">
                {error && modal && (
                    <Modal title={"Error"}>
                        {error}
                    </Modal>
                )}
                {isLoading && modal && (
                    <Modal title={"Loading..."}>
                        {isLoading}
                    </Modal>
                )}
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
                    {weather.map((city, index) => (
                        <CityWeatherData key={index} cityWeather={city}/>
                    ))}
                    </tbody>
                </table>
            </section>
        </main>
    );

}
