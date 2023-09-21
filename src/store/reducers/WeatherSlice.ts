import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICityWeather} from "../../models/ICityWeather.ts";

interface WeatherState {
    weather: ICityWeather[];
    isLoading: boolean;
    error: string;
    cityName: string;
    modal: boolean
}

const initialState: WeatherState = {
    weather: [],
    isLoading: false,
    error: '',
    cityName: '',
    modal: false
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        handleCity: (state, action) => {state.cityName = action.payload},
        weatherFetching(state) {
            state.isLoading = true;
            state.modal = true
        },
        weatherFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.modal = false;
            const city = state.weather.find(city => city.location.name === action.payload.location.name);
            city
                ? ((city.count += 1) &&
                    (city.location.localtime = action.payload.location.localtime) &&
                    (city.current.temp_c = action.payload.current.temp_c))
                : state.weather.push(action.payload);

        },
        weatherFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.modal = true;
            state.error = action.payload
        },
        closeModal: (state, action:PayloadAction<boolean>) => {state.modal = action.payload},
    }
})

export const {handleCity, closeModal} = weatherSlice.actions
export default weatherSlice.reducer;
