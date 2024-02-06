import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Searchbar = () => {
  const [search,setSearch]=useState('');
  const navigate=useNavigate();
  console.log(search);
  const submitHandler=(e)=>{
    e.preventDefault();
    navigate('/searched/'+search);
  }
  return (
      <form onSubmit={submitHandler}>
      <div className='relative flex justify-center'>
      <FaSearch className="translate-x-8 translate-y-4 text-black"/>
        <input onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search Cuisine"
          value={search}
          className={`bg-gray-100 border border-gray-800
         text-gray-900 text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-200 block
           w-2/3 p-2.5  outline-none px-12 placeholder:text-sm shadow-xl`}
        /> 
      </div>
      </form>

  );
};

export default Searchbar;