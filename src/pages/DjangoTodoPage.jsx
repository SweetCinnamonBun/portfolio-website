import React from "react";
import DjangoTodoImg from "../assets/images/django-todo.png"; // Assuming this image exists in your project

const DjangoTodoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Vault</h1>

      <div className="my-10 w-1/3">
        <img
          src={DjangoTodoImg}
          alt="Recipe Vault"
          className="w-full h-[450px]  rounded-lg shadow-lg"
        />
      </div>

      <div>
        <div className="mt-6">
          <a
            href="https://django-todo-um0y.onrender.com/"
            target="_blank" // Opens in a new tab
            className="bg-gradient-to-r from-violet-400 via-violet-500 to-violet-400 px-4 py-2 rounded-lg text-xl font-semibold text-white hover:underline"
          >
            View Project
          </a>
        </div>
      </div>

      <div className="max-w-4xl w-full text-center my-10 bg-white px-4 py-10 rounded-lg shadow-lg">
        <p className="text-lg text-gray-800">
          Very simple todo app made with Django Web Framework.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-6">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Django</strong> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DjangoTodoPage;