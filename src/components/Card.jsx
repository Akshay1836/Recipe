import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <article class="relative w-[300px] sm:w-1/3 md:w-1/4 md:h-[300px] m-4 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <Link to={'item/'+props.id}>
    <img
      alt="Office"
      src={props.image}
      class="absolute h-full w-full object-cover"
    />
    <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-24 sm:pt-32 lg:pt-64">
      <div class="p-2 sm:p-4">  
        <a href="#">
          <h3 class="text-lg text-white">{props.title}</h3>
        </a>
        <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
          {props.instructions}
        </p>
      </div>
    </div>
    </Link>
  </article>

  )
}



export default Card