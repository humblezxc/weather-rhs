import { ICityWeather } from "../models/ICityWeather.ts";

interface CitiesDataProps {
    cityWeather: ICityWeather;
}

export default function CityWeatherData({ cityWeather }: CitiesDataProps) {
    return (
        <>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {cityWeather.location.name}
                </th>
                <td className="px-6 py-4">
                    {cityWeather.location.localtime}
                </td>
                <td className="px-6 py-4">
                    {cityWeather.current.temp_c}
                </td>
                <td className="px-6 py-4">
                    searched: {cityWeather.count} time(s)
                </td>
            </tr>
        </>
    );
}
