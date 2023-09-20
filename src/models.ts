export type IHandleCityChange = (city: string) => void;

export interface ICityWeather {
    location: {
        name: string;
        country: string;
        localtime: string;
    };
    current: {
        temp_c: number;
    }
}
