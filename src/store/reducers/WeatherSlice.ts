import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICityWeather} from "../../models/ICityWeather.ts";

interface WeatherState {
    weather: ICityWeather[];
    isLoading: boolean;
    error: string;
    cityName: string;
}

const initialState: WeatherState = {
    weather: [],
    isLoading: false,
    error: '',
    cityName: '',
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        handleCity: (state, action) => {state.cityName = action.payload},
        requestCount: (state, action) => {
            const city = state.weather.find(city => city.location.name === action.payload.location.name);
            city ? city.count += 1 : state.weather.push(action.payload);
        },
        weatherFetching(state) {
            state.isLoading = true;
        },
        weatherFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export const {handleCity} = weatherSlice.actions
export default weatherSlice.reducer;
