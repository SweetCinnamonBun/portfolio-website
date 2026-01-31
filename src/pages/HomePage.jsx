import React from "react";
import { Link } from "react-router";
import x from "../assets/images/recipevault.png";
import weatherapp from "../assets/images/weather-app.png";
import AsukasAreenaImg from "../assets/images/asukas-areena-img.png";
import PretzelImg from "../assets/images/pretzel-website.png";
import CitrusImg from "../assets/images/citrus-cafe.png";
import firstName from "../assets/images/firstName.png";
import lastName from "../assets/images/lastName.png";
import TestPfp from "../assets/images/test-pfp.png";
import MiniProjects from "../assets/images/mini-projects.png";
import { FaBriefcase } from "react-icons/fa";
import ArtGalleryImg from "../assets/images/art-gallery-example.png";

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
    title: "ArtGallery",
    image: ArtGalleryImg,
    link: "/art-gallery-website",
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
    image: MiniProjects,
    link: "/business-college-helsinki-projects",
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="flex gap-4 mb-20">
        <figure>
          <img src={firstName} alt="" />
        </figure>
        <figure>
          <img src={lastName} alt="" />
        </figure>
      </div>
      <div className="">
        <figure className="w-64 h-64 rounded-full  border-3 border-black">
          <img src={TestPfp} alt="" className="w-full h-full rounded-full" />
        </figure>
      </div>
      <div className="flex items-center w-full max-w-6xl gap-4 mt-20">
        <FaBriefcase className="w-8 h-8" />
        <h1 className="text-3xl font-bold">My Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mt-20">
        {projects.map((project, index) => (
          <Link to={project.link} key={index}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-5">{project.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
