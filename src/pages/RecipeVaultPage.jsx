import React from "react";
import x from "../assets/images/plating_art_about_tacos_casual.jpeg"; // Assuming this image exists in your project

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

      <div>
        <div className="mt-6">
          <a
            href="https://recipevault.azurewebsites.net"
            target="_blank" // Opens in a new tab
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 px-4 py-2 rounded-lg text-xl font-semibold text-white hover:underline"
          >
            View Project
          </a>
        </div>
      </div>

      <div className="max-w-4xl w-full text-center my-10 ">
        <p className="text-lg text-gray-700">
          Recipe Vault is a web application that allows users to store and
          organize their favorite recipes. Users can easily add, edit, and
          filter their recipes based on ingredients, categories, and tags. The
          app provides an intuitive interface for managing recipes, including
          options for adding images, instructions, and preparation time.
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
