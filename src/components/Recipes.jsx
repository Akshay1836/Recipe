import React, { useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Searchbar from "./Searchbar";

function Recipes() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("vegan");
  const [loading, setLoading] = useState(false);

  //   if (loading) {
  //     return <Loading />;
  //   }
  //   const handleChange = (e) => {
  //     setQuery(e.target.value);
  //   };
      useEffect(() => {
        fetchdata();
      }, [])

    const fetchdata = async () => {
      const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=0da6af52e648411bb3e19c5bb7e50f96&number=9`)
      const result = await api.json();
      setRecipes(result.recipes);
      console.log(result);
    };
  return (
    <div className="h-screen w-screen">
      <Searchbar/>
      <h1 className="text-2xl font-extrabold m-4 text-rose-700">
        Popular products
      </h1>
      <div className="w-screen font-thin flex flex-wrap justify-center">
      
          {recipes && recipes.map((data) => {
            return (
                <Card key={data.id}
                  id={data.id}
                  title={data.title}
                  //       instructions={data.instructions}
                  image={data.image}
                />
            );
          })}
      </div>
    </div>
  );
}

export default Recipes;
