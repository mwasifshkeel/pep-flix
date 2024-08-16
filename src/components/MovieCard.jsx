import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export default function MovieCard(props) {
    const {movie,queueItems,setQueueItems} = props

    const addToQueue = ()=> {
      setQueueItems(prevQueueItems=>[...prevQueueItems,movie]);
    }

    const removeFromQueue = ()=> {
      const newQueueItems = queueItems.filter(queueMovie => queueMovie.title !== movie.title)
      setQueueItems(newQueueItems);
    }

  return (
    <div className='relative h-[430px] rounded-2xl flex flex-col max-w-[400px] gap-3 sm:gap-6 bg-zinc-600 w-full p-3 text-slate-100'>
            <div className='flex justify-between text-lg sm:text-xl lg:text-2xl font-bold items-start'>
              <h2>{movie.title}</h2>
              <h2 className='text-slate-400'>{movie.year}</h2>
            </div>
            <div>
              <h3 className='text-sm sm:text-base uppercase'>Country: <span className='text-md sm:text-lg text-gray-400'>{movie.country}</span></h3>
              <h3 className='text-sm sm:text-base uppercase'>Language: <span className='text-md sm:text-lg text-gray-400'>{movie.language}</span></h3>
              <br />
              <h4 className='text-sm sm:text-base uppercase'>PLOT</h4>
            </div>
            <div className='flex-1'>
              <p className='text-base sm:text-md text-gray-400'>{movie.plot}</p>
            </div>
            <div className='flex gap-2 flex-col'>
              <h3 className='text-sm sm:text-base uppercase'>GENRES</h3>
              <div className='flex gap-2 flex-wrap text-xs sm:text-sm'>
                {movie.genre.map((genre, genreIndex) => {
                    return (
                    <div key={genreIndex} index={genreIndex} className='pointer-events-none select-none rounded-2xl flex items-center justify-center bg-zinc-800 text-gray-300 w-[90px] h-[40px] border-amber-200 border-[1px]'>
                        <p>{genre}</p>
                    </div>
                    )
                })}
              </div>
            </div>
            <div className='absolute top-0 right-0 translate-x-2 -translate-y-2 opacity-30'>
              <button onClick={queueItems.some(item => item.title === movie.title)?removeFromQueue:addToQueue}>
              <i className={`fa-solid text-2xl hover:text-slate-400 ${queueItems.some(item => item.title === movie.title)? 'fa-circle-minus addqueue' : 'fa-circle-plus removequeue'}`} data-tooltip-id="queue-status" data-tooltip-content={queueItems.indexOf(movie)!=-1?"Remove from queue":"Add to queue"} />
              </button>
            </div>
            <Tooltip id="queue-status" />
          </div>
  )
}
