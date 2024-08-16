import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import MovieCard from './MovieCard'


export default function Main(props) {
  const {movieData,setQueueItems, queueItems} = props
  const [search,setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredMovies = movieData.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="mb-8 flex-1 bg-zinc-700">
      <div>
        <div className='flex items-center justify-center py-10'>
          <input className='focus:placeholder-transparent p-2 leading-8 bg-zinc-800 b text-center items-center rounded-xl outline-none focus:outline-1 focus:outline-amber-200 caret-white text-white w-[300px] md:w-[500px] lg:w-[700px]' type="text" placeholder="Enter Movie Name..." value={search} onChange={handleSearchChange} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-3 gap-6 md:gap-8 lg:gap-10 '>
          {filteredMovies.map((movie, movieIndex) => {
            return (
              <MovieCard setQueueItems={setQueueItems} queueItems={queueItems} movie={movie} key={movieIndex} index={movieIndex} />
            )
          })}
        </div>
      </div>
    </main>
  )
}
