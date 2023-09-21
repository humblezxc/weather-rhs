import {AppDispatch} from "../store.ts";
import axios from "axios";
import {ICityWeather} from "../../models/ICityWeather.ts";
import {weatherSlice} from "./WeatherSlice.ts"

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchData = (city: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(weatherSlice.actions.weatherFetching());
        const response = await axios.get<ICityWeather>(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );
        dispatch(weatherSlice.actions.weatherFetchingSuccess({...response.data, count: 1}))
    } catch (e: any) {
        dispatch(weatherSlice.actions.weatherFetchingError(e.message))
    }
}
