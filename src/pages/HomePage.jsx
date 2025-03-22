import React from "react";
import { Link } from "react-router";
import x from "../assets/images/plating_art_about_tacos_casual.jpeg"
import weatherapp  from "../assets/images/weather-app.png"
import AsukasAreenaImg from "../assets/images/asukas-areena-img.png"
import PretzelImg from "../assets/images/pretzel-website.png"
import CitrusImg from "../assets/images/citrus-cafe.png"


const projects = [
  {
    title: "Recipe Vault",
    image: x,
    link: "/recipe-vault",
  },
  {
    title: "Country Details",
    image: weatherapp,
    link: "/country-details",
  },
  {
    title: "Asukas Areena",
    image: AsukasAreenaImg,
    link: "/asukas-areena",
  },
  {
    title: "Pretzel Website",
    image: PretzelImg,
    link: "/pretzel-website",
  },
  {
    title: "Citrus Cafe",
    image: CitrusImg,
    link: "/citrus-cafe",
  },
  {
    title: "Business College Helsinki mini projects",
    image: x,
    link: "/business-college-helsinki-projects"
  }
];

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mt-20">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-5">{project.title}</h2>
              <div className="flex justify-end">
                <Link
                    to={project.link}
                    className="bg-yellow-200 px-4 py-2 rounded-lg hover:underline"
                >
                    View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;