import { FaHome, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { FaBurger } from "react-icons/fa6";
import React from "react";
import { NavLink,Outlet } from "react-router-dom";
import { SiIfood } from "react-icons/si";

function Icons() {
  return (
    <>
      <div className="flex justify-center items-center flex-row mt-6">
        <SiIfood className="text-4xl mr-4 text-rose-700"/>
      <h1 class="mb-2 underline underline-offset-4 decoration-1 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl"><span class=" text-transparent bg-clip-text bg-gradient-to-r to-rose-400 from-rose-900">Today's Menu</span></h1>
      </div>    
      <div className="flex flex-row justify-center text-xs sm:text-sm text-rose-600  my-4 font-serif">
      <NavLink to={'cuisine/indian'} className="flex flex-col mx-2 sm:mx-4 text-xs justify-center bg-gray-400 h-12  w-12 sm:h-16 sm:w-16 rounded-full hover:text-gray-700">
      <FaHome className="mx-auto"/>
        <p >Indian</p> 
      </NavLink>
      <NavLink to={'cuisine/Italian'} className="flex flex-col justify-center mx-2 sm:mx-4 text-xs bg-gray-400 h-12 w-12 sm:h-16 sm:w-16 rounded-full hover:text-gray-700">
      <FaBurger className="mx-auto "/>
        <p>Italian</p>
      </NavLink>
      <NavLink to={'cuisine/Chinese'} className="flex flex-col justify-center mx-2 sm:mx-4 text-xs bg-gray-400 h-12 w-12 sm:h-16 sm:w-16 rounded-full hover:text-gray-700">
      <GiNoodles className="mx-auto "/>
        <p>Chineese</p>
      </NavLink>
      <NavLink to={'cuisine/American'} className="flex flex-col justify-center mx-2 sm:mx-4 text-xs bg-gray-400 h-12 w-12 sm:h-16 sm:w-16 rounded-full hover:text-gray-700">
      <FaPizzaSlice className="mx-auto "/>
        <p>American</p>
      </NavLink>
    </div>
    <Outlet/>
    
    </>
  );
}

export default Icons;
