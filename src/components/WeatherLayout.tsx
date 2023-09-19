export default function WeatherLayout() {
    return(
        <main>
            <section className="container relative overflow-x-auto py-10">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-900 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            City
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Temperature
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Count
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            London
                        </th>
                        <td className="px-6 py-4">
                            2023-03-21
                        </td>
                        <td className="px-6 py-4">
                            10 (st C)
                        </td>
                        <td className="px-6 py-4">
                            searched: 1 time(s)
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Lisbon
                        </th>
                        <td className="px-6 py-4">
                            2023-03-21
                        </td>
                        <td className="px-6 py-4">
                            18,5 (st C)
                        </td>
                        <td className="px-6 py-4">
                            searched: 2 times(s)
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Lisbon
                        </th>
                        <td className="px-6 py-4">
                            2023-03-22
                        </td>
                        <td className="px-6 py-4">
                            19,5 (st C)
                        </td>
                        <td className="px-6 py-4">
                            searched: 2 times(s)
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );

}
