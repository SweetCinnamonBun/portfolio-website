import React from 'react'
import CitrusImg from "../assets/images/citrus-cafe.png"

const CitrusCafe = () => {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
             <h1 className="text-3xl font-bold text-center mb-6">Citrus Cafe</h1>
       
             <div className="my-10 w-1/3">
               <img
                 src={CitrusImg}
                 alt="Recipe Vault"
                 className="w-full h-[450px]  rounded-lg shadow-lg"
               />
             </div>
       
             <div>
               <div className="mt-6">
                 <a
                   href="https://sweetcinnamonbun.github.io/09-sovella-flexboxia/"
                   target="_blank" 
                   className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 px-4 py-2 rounded-lg text-xl font-semibold text-white hover:underline"
                 >
                   View Project
                 </a>
               </div>
             </div>
       
             <div className="max-w-4xl w-full text-center my-10 ">
               <p className="text-lg text-gray-700">
                 Citrus Cafe...
               </p>
             </div>
       
             <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-6">
               <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
               <ul className="list-disc pl-6 space-y-2 text-gray-700">
                 <li>
                   <strong>Frontend:</strong> HTML & CSS
                 </li>
                 
               </ul>
             </div>
           </div>
  )
}

export default CitrusCafe
