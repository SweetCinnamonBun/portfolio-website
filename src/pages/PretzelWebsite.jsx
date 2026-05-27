import React from 'react'
import PretzelImg from "../assets/images/pretzel-website.png"


const PretzelWebsite = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Pretzel Website</h1>
    
          <div className="my-10 w-1/3">
            <img
              src={PretzelImg}
              alt="Recipe Vault"
              className="w-full h-[450px]  rounded-lg shadow-lg"
            />
          </div>
    
          <div>
            <div className="mt-6">
              <a
                href="https://sweetcinnamonbun.github.io/15-pretzel-nettisivu/"
                target="_blank" // Opens in a new tab
                className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-400 px-4 py-2 rounded-lg text-xl font-semibold text-white hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
    
          <div className="max-w-4xl w-full text-center my-10 ">
            <p className="text-lg text-white">
              A small HTML & CSS project that I made during my studies in Business College Helsinki. 
            </p>
          </div>
    
          <div className="bg-white/5 border border-white/10 backdrop-blur-md
                      shadow-[0_0_30px_rgba(56,189,248,0.1)]  rounded-lg p-6 max-w-4xl w-full mb-6 ">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="list-disc pl-6 space-y-2 text-white">
              <li>
                <strong>Frontend:</strong> HTML & CSS
              </li>
              
            </ul>
          </div>
        </div>
  )
}

export default PretzelWebsite
