import React from 'react'
import ArtGalleryImg from "../assets/images/art-gallery-example.png"

const ArtGalleryPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
                 <h1 className="text-3xl font-bold text-center mb-6">ArtGallery</h1>
           
                 <div className="my-10 w-1/3">
                   <img
                     src={ArtGalleryImg}
                     alt="art-gallery-img"
                     className="w-full h-[450px]  rounded-lg shadow-lg"
                   />
                 </div>
           
                 <div>
                   <div className="mt-6">
                     <a
                       href="https://icy-forest-005684303.6.azurestaticapps.net/"
                       target="_blank" // Opens in a new tab
                       className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 px-4 py-2 rounded-lg text-xl font-semibold text-white hover:underline"
                     >
                       View Project
                     </a>
                   </div>
                 </div>
           
                 <div className="max-w-4xl w-full text-center my-10 ">
                   <p className="text-lg text-gray-700">
                     Simple website made with tailwindcss, responsive in all devices. This is a <strong>Frontend Mentor</strong> challenge.
                   </p>
                 </div>
           
                 <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-6">
                   <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li>
                       <strong>Frontend:</strong> Tailwindcss
                     </li>
                     
                   </ul>
                 </div>
               </div>
  )
}

export default ArtGalleryPage
