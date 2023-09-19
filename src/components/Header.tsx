import WeatherForm from "./WeatherForm.tsx";

export default function Header() {
    return(
        <header className="flex flex-col justify-center items-center">
            <section className="container flex flex-col items-center gap-5 py-7">
                <h1 className="header__text">The Weather is.....</h1>
                <WeatherForm />
            </section>
        </header>
    );
}
