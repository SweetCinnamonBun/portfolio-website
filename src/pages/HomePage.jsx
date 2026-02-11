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
import {
  FaBriefcase,
  FaFilePdf,
  FaGithubSquare,
  FaLinkedin,
  FaLaptopCode,

} from "react-icons/fa";
import { IoStarOutline, IoStar } from "react-icons/io5";
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

const Star = () => {
  return (
    <span className="relative inline-block w-6 h-6">
      <IoStarOutline className="absolute inset-0 w-6 h-6 text-black" />
      <IoStar className="absolute inset-0 w-6 h-6 text-[#fbfb06] scale-80" />
    </span>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="grid grid-cols-2 w-full max-w-6xl mt-10 ">
        <div className="flex gap-4 mb-20">
          <div className="flex flex-col space-y-4">
            <figure>
              <img src={firstName} alt="" />
            </figure>
            <figure>
              <img src={lastName} alt="" />
            </figure>
            <p className="text-2xl w-96">
              Hello there! I'm Roman and a Full-stack developer
            </p>
            <div className="flex gap-2">
              <button className="bg-black text-white px-8 py-2 rounded-xl text-xl flex gap-2 items-center cursor-pointer transition hover:bg-gray-700">
                <FaFilePdf /> CV
              </button>
              <button className="bg-black text-white px-8 py-2 rounded-xl text-xl flex gap-2 items-center cursor-pointer transition hover:bg-gray-700">
                <FaFilePdf /> CV English
              </button>
            </div>
            <div className="flex mt-2 gap-2">
              <Link to="https://github.com/SweetCinnamonBun" target="_blank">
                <FaGithubSquare className="w-14 h-14" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/roman-klemiato-070616223/"
                target="_blank"
              >
                <FaLinkedin className="w-14 h-14" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center -mt-5">
          <figure className="w-80 h-80 rounded-full   border-3 border-black">
            <img src={TestPfp} alt="" className="w-full h-full rounded-full " />
          </figure>
        </div>
      </div>
      <section className="w-full max-w-6xl">
        <div className="flex items-center w-full max-w-6xl gap-4 mt-20 mb-14">
          <FaLaptopCode className="w-8 h-8" />
          <h1 className="text-3xl font-bold">My Skills</h1>
        </div>
        <div className="flex gap-14">
          <div className="h-92 bg-white w-full max-w-96 pt-5 px-2  shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] border-2">
            <h3 className="text-center text-lg underline font-bold ">FRONTEND</h3>
            <div className="grid grid-cols-2 gap-5 mt-5 ">
              <div className="flex flex-col items-center">
                <h4 className="text-center">HTML & CSS</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-center">Javascript</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-center">React</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
          </div>
          <div className="h-92 bg-white w-full max-w-96 pt-5 px-2   shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] border-2">
            <h3 className="text-center text-lg underline font-bold ">FRONTEND</h3>
            <div className="grid grid-cols-2 gap-5 mt-5 ">
              <div className="flex flex-col items-center">
                <h4 className="text-center">HTML & CSS</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-center">Javascript</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-center">React</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
          </div>
          <div className="h-92 bg-white w-full max-w-96 pt-5 px-2   shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] border-2">
            <h3 className="text-center text-lg underline font-bold ">FRONTEND</h3>
            <div className="grid grid-cols-2 gap-5 mt-5 ">
              <div className="flex flex-col items-center">
                <h4 className="text-center">HTML & CSS</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-center">Javascript</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-center">React</h4>
                <div className="flex gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
