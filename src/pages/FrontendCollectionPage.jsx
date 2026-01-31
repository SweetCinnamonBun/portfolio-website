import React from 'react'
import x from "../assets/images/mini-projects.png";
const FrontendCollectionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
          <h1 className="text-3xl font-bold text-center mb-6">Business College Helsinki Mini Projects</h1>
    
          <div className="my-10 w-1/3">
            <img
              src={x}
              alt="Recipe Vault"
              className="w-full h-[450px]  rounded-lg shadow-lg"
            />
          </div>
    
    
          <div className="max-w-4xl w-full text-center my-10 ">
            <p className="text-lg text-gray-700">
              Here are some mini projects that I made during my studies in Business
              College Helsinki. Some of them are a part of the{" "}
              <strong>Full stack open</strong> {" "} course.
            </p>
          </div>
    
          <div className="w-full max-w-4xl  mb-10 rounded-lg bg-white shadow-lg">
            <ul className="list-disc px-10 space-y-3 py-5 ">
              <li className="text-lg">
                {" "}
                <a
                  href="https://sweetcinnamonbun.github.io/01-kurssitiedot/"
                  target="_blank"
                >
                  Course Details
                </a>
              </li>
              <li className="text-lg">
                {" "}
                <a
                  href="https://sweetcinnamonbun.github.io/02-unicafe/"
                  target="_blank"
                >
                  Unicafe
                </a>
              </li>
              <li className="text-lg">
                {" "}
                <a
                  href="https://sweetcinnamonbun.github.io/01-greeting/"
                  target="_blank"
                >
                  Greetings
                </a>
                
              </li>
              <li className="text-lg">
                {" "}
                <a
                  href="https://sweetcinnamonbun.github.io/02-counter/"
                  target="_blank"
                >
                  Counter
                </a>
              </li>
              <li className="text-lg">
                {" "}
                <a
                  href="https://sweetcinnamonbun.github.io/03-left-right/"
                  target="_blank"
                >
                  Left-Right
                </a>
              </li>
              <li className="text-lg">
                {" "}
                <a
                  href="https://sweetcinnamonbun.github.io/03-anekdootit/"
                  target="_blank"
                >
                  Anecdotes
                </a>
              </li>
            </ul>
          </div>
    
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-6">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Frontend:</strong> React, HTML & CSS
              </li>
            </ul>
          </div>
        </div>
  )
}

export default FrontendCollectionPage
