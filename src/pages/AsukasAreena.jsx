import React from 'react'
import AsukasAreenaImg from "../assets/images/asukas-areena-img.png"

const AsukasAreena = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
          <h1 className="text-3xl font-bold text-center mb-6">Asukas Areena</h1>
    
          <div className="my-10 w-1/3">
            <img
              src={AsukasAreenaImg}
              alt="Recipe Vault"
              className="w-full h-[450px]  rounded-lg shadow-lg"
            />
          </div>
    
          <div>
            <div className="mt-6">
              <a
                href="https://exquisite-syrniki-df220a.netlify.app/"
                target="_blank" // Opens in a new tab
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 px-4 py-2 rounded-lg text-xl font-semibold text-white hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
    
          <div className="max-w-4xl w-full text-center my-10 ">
            <p className="text-lg text-gray-700">
              Asukas Areena is a group project that I worked on, when I was studying full-stack development in Business College Helsinki.
              It's very simple project which purpose was to practice HTML & CSS and Javascript.
            </p>
          </div>
    
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-6">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Frontend:</strong> HTML & CSS, Javascript
              </li>
            </ul>
          </div>
        </div>
  )
}

export default AsukasAreena
