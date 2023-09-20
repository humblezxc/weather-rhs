import WeatherForm from "./WeatherForm.tsx";
import {IHandleCityChange} from "../models.ts";

interface HeaderProps {
    handleCityChange: IHandleCityChange;
}
export default function Header({handleCityChange}: HeaderProps) {
    return(
        <header className="flex flex-col justify-center items-center">
            <section className="container flex flex-col items-center gap-5 py-7">
                <h1 className="header__text">The Weather is.....</h1>
                <WeatherForm handleCityChange={handleCityChange} />
            </section>
        </header>
    );
}
