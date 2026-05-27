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
import Logo from "../assets/images/logo.png";
import DjangoTodoImg from "../assets/images/django-todo.png";
import {
  FaBriefcase,
  FaFilePdf,
  FaGithubSquare,
  FaLinkedin,
  FaLaptopCode,
} from "react-icons/fa";
import { IoStarOutline, IoStar } from "react-icons/io5";
import ArtGalleryImg from "../assets/images/art-gallery-example.png";

const fullstackProjects = [
  {
    title: "Recipe Vault",
    image: x,
    link: "/recipe-vault",
  },
  {
    title: "Django Todo App",
    image: DjangoTodoImg,
    link: "/django-todo",
  },
];

const projects = [
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
const EmptyStar = () => {
  return (
    <span className="relative inline-block w-6 h-6">
      <IoStarOutline className="absolute inset-0 w-6 h-6 text-black" />
      <IoStar className="absolute inset-0 w-6 h-6 text-white  scale-80" />
    </span>
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 w-full max-w-6xl mt-10 ">
        <div className="flex gap-4 mb-20">
          <div className="flex flex-col space-y-4">
            <figure className="bg-white w-[299px] py-4 px-3">
              <img src={firstName} alt="" />
            </figure>
            <figure className="bg-black w-[299px] py-4 px-3">
              <img src={lastName} alt="" />
            </figure>
            <p className="text-2xl w-[460px]">
              Hello there! I'm Roman and I'm a junior full stack developer.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="px-6 py-3 rounded-2xl flex items-center gap-2 text-white bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
                <FaFilePdf className="text-red-300" />
                CV
              </button>

              <button className="px-6 py-3 rounded-2xl flex items-center gap-2 text-white bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
                <FaFilePdf className="text-red-300" />
                CV English
              </button>
            </div>
            <div className="flex mt-4 gap-3">
              <Link
                to="https://github.com/SweetCinnamonBun"
                target="_blank"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
              >
                <FaGithubSquare className="w-10 h-10 text-white" />
              </Link>

              <Link
                to="https://www.linkedin.com/in/roman-klemiato-070616223/"
                target="_blank"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
              >
                <FaLinkedin className="w-10 h-10 text-[#60a5fa]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center -mt-5">
          <figure className="w-80 h-80 rounded-full   border-3 border-white">
            <img src={TestPfp} alt="" className="w-full h-full rounded-full " />
          </figure>
        </div>
      </div>
      {/* About section */}
      <section className="w-full  mt-20  text-white py-20 grid place-items-center">
        <div className="w-full max-w-6xl">
          <div className="flex items-center gap-4 mb-10">
            <IoStarOutline className="w-8 h-8" />
            <h2 className="text-3xl font-bold text-amber-200">About Me</h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-white">
              Hi, I'm Roman Klemiato, an aspiring Full-Stack Developer
              passionate about building modern and user-friendly web
              applications. I enjoy working with React, JavaScript, and backend
              technologies to create complete solutions from frontend to
              database.
              <br />
              <br />
              I'm constantly learning, improving my skills, and building
              projects that challenge me to grow as a developer. My goal is to
              create clean, scalable, and meaningful applications that solve
              real-world problems.
            </p>
          </div>
        </div>
      </section>
      {/* Skills section */}
      <section className="w-full flex items-center justify-center pb-30">
        <section className="w-full max-w-6xl">
          <div className="flex items-center w-full max-w-6xl gap-4 mt-20 mb-14">
            <FaLaptopCode className="w-8 h-8 " />
            <h1 className="text-3xl font-bold text-amber-200">My Skills</h1>
          </div>

          <div className="flex gap-10">
            {/* FRONTEND */}
            <div
              className="h-92 w-full max-w-96 pt-5 px-4 rounded-2xl
                      bg-white/5 border border-white/10 backdrop-blur-md
                      shadow-[0_0_30px_rgba(56,189,248,0.1)] text-white"
            >
              <h3 className="text-center text-lg underline font-bold text-cyan-300">
                FRONTEND
              </h3>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col items-center">
                  <h4>HTML & CSS</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4>Javascript</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4>React</h4>
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

            {/* BACKEND */}
            <div
              className="h-92 w-full max-w-96 pt-5 px-4 rounded-2xl
                      bg-white/5 border border-white/10 backdrop-blur-md
                      shadow-[0_0_30px_rgba(56,189,248,0.1)] text-white"
            >
              <h3 className="text-center text-lg underline font-bold text-cyan-300">
                BACKEND
              </h3>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col items-center">
                  <h4>.NET Web API</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4>Express.js</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4>Azure</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4>Strapi</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4>Django</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </div>
                </div>
              </div>
            </div>

            {/* DATABASES */}
            <div
              className="h-92 w-full max-w-96 pt-5 px-4 rounded-2xl
                      bg-white/5 border border-white/10 backdrop-blur-md
                      shadow-[0_0_30px_rgba(56,189,248,0.1)] text-white"
            >
              <h3 className="text-center text-lg underline font-bold text-cyan-300">
                DATABASES
              </h3>

              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col items-center">
                  <h4>SQLServer</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4>PostgreSQL</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4>MongoDB</h4>
                  <div className="flex gap-1">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className=" w-full mt-10 grid place-items-center">
        <div className="flex items-center w-full max-w-6xl gap-4 mt-20">
          <FaBriefcase className="w-8 h-8" />
          <h1 className="text-3xl font-bold text-amber-200">My Projects</h1>
        </div>

        {/* FULLSTACK PROJECTS */}
        <section className="w-full max-w-6xl mt-14 text-black">
          <h2 className="text-2xl font-bold mb-8 text-white underline">Fullstack Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fullstackProjects.map((project, index) => (
              <Link to={project.link} key={index}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md
                      shadow-[0_0_30px_rgba(56,189,248,0.1)]  rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 text-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-5">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FRONTEND PROJECTS */}
        <section className="w-full max-w-6xl mt-20">
          <h2 className="text-2xl font-bold mb-8 text-white underline">Frontend Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {projects.map((project, index) => (
              <Link to={project.link} key={index} className="">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md
                      shadow-[0_0_30px_rgba(56,189,248,0.1)]  rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 text-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 h-24">
                    <h2 className="text-xl font-semibold mb-5">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
      <footer className="mt-24 w-full pt-6 pb-4 text-center border-t">
        <p>© {new Date().getFullYear()} Roman Klemiato. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
