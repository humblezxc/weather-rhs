import { ICityWeather } from "../models/ICityWeather.ts";

interface CitiesDataProps {
    cityWeather: ICityWeather;
}

export default function CityWeatherData({ cityWeather }: CitiesDataProps) {
    return (
        <>
            <tr className="bg-white">
                <th scope="row" className="md:px-6 md:py-4 font-medium text-gray-900">
                    {cityWeather.location.name}
                </th>
                <td className="flex-wrap px-1  md:px-6 md:py-4">
                    {cityWeather.location.localtime}
                </td>
                <td className="flex-wrap md:px-6 md:py-4">
                    {cityWeather.current.temp_c} (st C)
                </td>
                <td className="flex-wrap md:px-6 md:py-4">
                    searched: {cityWeather.count} time(s)
                </td>
            </tr>
        </>
    );
}
