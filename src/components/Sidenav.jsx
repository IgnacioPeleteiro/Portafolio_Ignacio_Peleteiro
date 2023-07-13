import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const Sidenav = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a onClick={handleNav} href="#trabajo" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <GrProjects size={20} />
            <span className="pl-4">Experiencia</span>
          </a>
          <a onClick={handleNav} href="#proyectos" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineProject size={20} />
            <span className="pl-4">Proyectos</span>
          </a>
          <a onClick={handleNav} href="#resumen" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <BsPerson size={20} />
            <span className="pl-4">Resumen</span>
          </a>
          <a onClick={handleNav} href="#contacto" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineMail size={20} />
            <span className="pl-4">Contacto</span>
          </a>
        </div>
      ) : (
          ''
        )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 justify-center">
          <a href="#main">
            <AiOutlineHome size={20} />
          </a>
        </div>
        <div className="flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 justify-center">
          <a href="#trabajo">
            <GrProjects size={20} />
          </a>
        </div>
        <div className="flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 justify-center">
          <a href="#proyectos">
            <AiOutlineProject size={20} />
          </a>
        </div>
        <div className="flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 justify-center">
          <a href="#resumen">
            <BsPerson size={20} />
          </a>
        </div>
        <div className="flex flex-col rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 justify-center">
          <a href="#contacto">
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav;
