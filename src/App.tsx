import './App.scss'
import Header from "./components/Header.tsx";
import MainContent from "./components/MainContent.tsx";
import {useState} from "react";

function App() {
    const [city, setCity] = useState('');
    const handleCityChange = (newCity: string) => {
        setCity(newCity);
    };
    return (
        <>
            <Header handleCityChange={handleCityChange}/>
            <MainContent city={city}/>
        </>
    );
}

export default App
