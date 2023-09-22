import CityWeatherData from "./CityWeatherData.tsx";
import {useAppSelector} from "../hooks/redux.ts";
import {Modal} from "./Modal.tsx";

export default function MainContent() {
    const {weather, error, isLoading, modal} = useAppSelector(state => state.weatherReducer)

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
