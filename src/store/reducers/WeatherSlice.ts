import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICityWeather} from "../../models/ICityWeather.ts";
import Cookies from 'universal-cookie';

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
        handleCity: (state, action) => {
            state.cityName = action.payload
        },
        weatherFetching(state) {
            state.isLoading = true;
            state.modal = true
        },
        weatherFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.modal = false;

            const cookies = new Cookies()
            const existingCount = cookies.get(action.payload.location.name);
            const incrementedCount = existingCount ? parseInt(cookies.get(action.payload.location.name)) + 1 : 1;

            cookies.set(action.payload.location.name, incrementedCount)
            state.weather.unshift({...action.payload, count: incrementedCount})
        },
        weatherFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.modal = true;
            state.error = action.payload
        },
        closeModal: (state, action: PayloadAction<boolean>) => {
            state.modal = action.payload
        },
    }
})

export const {handleCity, closeModal} = weatherSlice.actions
export default weatherSlice.reducer;
