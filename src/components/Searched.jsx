import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from './Card';

function Searched() {
        const searchItem=useParams();
        const [results,setResults]=useState([]);
        console.log(searchItem)
        const searchFunction=async(name)=>{
                const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`);
                const result=await data.json();
                setResults(result.results)
        }
        useEffect(() => {
         searchFunction(searchItem.search);
         console.log(results)
        }, [searchItem.search])
        
        
  return (
        <div className="h-screen w-screen">
      <div className="w-screen font-thin flex flex-col sm:flex-row sm:flex-wrap justify-center px-4">
          {results.map((data) => {
            return (
                <Card className="object-cover bgcover"
                key={data.id}
                  title={data.title}
                  id={data.id}
                  //       instructions={data.instructions}
                  image={data.image}
                ></Card>
            );
          })}
      </div>    
    </div>
  )
}

export default Searched