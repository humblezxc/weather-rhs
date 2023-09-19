export default function WeatherForm() {
    return (
        <form className="flex pb-4">
            <input className="border focus:border-red-600 outline-none p-2" type="text" placeholder="Enter city name"/>
            <button className="button bg-red-600">Show</button>
        </form>
    )
}
