import React from 'react'
import weatherapp  from "../assets/images/weather-app.png"

const WeatherAppPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
          <h1 className="text-3xl font-bold text-center mb-6">Country Details</h1>
    
          <div className="my-10 w-1/3">
            <img
              src={weatherapp}
              alt="Country Details"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
    
          <div>
            <div className="mt-6">
              <a
                href="https://sweetcinnamonbun.github.io/06-maidentiedot/"
                target="_blank" // Opens in a new tab
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 px-4 py-2 rounded-lg text-xl font-semibold text-white hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
    
          <div className="max-w-4xl w-full text-center my-10 ">
            <p className="text-lg text-gray-700">
              Country Details is a React practice project that can search for country and weather data, by typing the name of the country to the search box.
              This project uses <strong>OpenWeatherMap's</strong> weather API to fetch the specific data.
            </p>
          </div>
    
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-6">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Frontend:</strong> React
              </li>
            </ul>
          </div>
        </div>
  )
}

export default WeatherAppPage
