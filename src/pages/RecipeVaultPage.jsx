import React from "react";
import x from "../assets/images/recipevault.png"; // Assuming this image exists in your project

const RecipeVaultPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Vault</h1>

      <div className="my-10 w-1/3">
        <img
          src={x}
          alt="Recipe Vault"
          className="w-full h-[450px]  rounded-lg shadow-lg"
        />
      </div>

      <div className="flex gap-4 mt-6">
        {/* Disabled Live Preview Link */}
        <a
          href="https://recipevault.azurewebsites.net"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.preventDefault()}
          className="px-4 py-2 rounded-lg text-lg font-semibold text-white
    bg-gray-500 opacity-50 cursor-not-allowed pointer-events-none"
        >
          Live Preview
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/SweetCinnamonBun/recipevault"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg text-lg font-semibold text-white
    bg-gradient-to-r from-black via-gray-800 to-black
    hover:opacity-90 transition"
        >
          GitHub
        </a>
      </div>

      <div className="max-w-4xl w-full text-center my-10 bg-white px-4 py-10 rounded-lg shadow-lg">
        <p className="text-lg text-gray-800">
          Recipe Vault is a full-stack website that allows users to create
          recipes and view other users recipes. Users can easily update their
          recipes, delete their own recipes and add recipes to their favorites
          list. Users can filter recipes based on common categories and can give
          comments and ratings to recipes.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-6">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Frontend:</strong> React, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> ASP.NET Web API
          </li>
          <li>
            <strong>Database:</strong> SQLServer
          </li>
          <li>
            <strong>Cloud:</strong> Azure
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecipeVaultPage;
