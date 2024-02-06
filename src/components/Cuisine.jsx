import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icons from "./Icons";
import Searchbar from "./Searchbar";

function Cuisine() {
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
          initialSlide: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();
  const getdata = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}`
    );
    const result = await data.json();
    console.log(result);
    setCuisine(result.results);
  };

  useEffect(() => {
    getdata(params.type);
  }, [params.type]);
  return (
    <>
      <div className="h-screen w-screen">
        <Searchbar />
        {/* {params.type && <h1 className='text-2xl font-extrabold m-4 text-gray-600'>
        {params.type} products */}
        {/* </h1>} */}
        <div className="w-screen font-thin flex flex-col sm:flex-row sm:flex-wrap justify-center px-4">
          {cuisine.map((data) => {
            return (
              <Card
                className="object-cover bgcover"
                id={data.id}
                title={data.title}
                //       instructions={data.instructions}
                image={data.image}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cuisine;
