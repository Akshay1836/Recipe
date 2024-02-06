import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
  const [result,setResult]=useState({});
  const params=useParams();
  const getdata = async() =>{
    const data=await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
    
    const response=await data.json();
    console.log(response);
    
    setResult(response);
  }
  useEffect(() => {
   getdata();
  }, [params.id])
  
  return (


<section className='mb-4'>
  
  <div
    className="inset-0 bg-white/75 sm:bg-transparent sm:from-black/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative max-w-screen-xl px-4 flex flex-col lg:flex-row justify-center items-center"
  >
    <div className='flex justify-center items-center w-2/3  lg:w-1/3'>
    <img src={result.image} alt="" className='mx-4 my-8 lg:my-16 w-full rounded-lg bg-cover'/>
    </div>
    <div className="max-w-xl text-justify px-0 ml-6">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        <strong className="block font-extrabold text-center text-rose-700"> {result.title}</strong>
      </h1>
      <p className="mt-4 max-w-lg sm:text-xl/relaxed" dangerouslySetInnerHTML={{__html:result.instructions}}>
       
      </p>

      {/* <div className="mt-4 flex flex-wrap justify-center gap-4 text-center ml-6">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div> */}
    </div>
    
  </div>
</section>
   
  )
}
export default Details