import React, { useState } from 'react'
import Queue from './Queue';

export default function Header(props) {
  const {queueItems,setQueueItems} = props;
  const [clicked,setClicked] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleClick = () => {
      if (clicked) {
        setExiting(true);
        setTimeout(() => {
          setClicked(false);
          setExiting(false);
        }, 300 );
      } else {
        setClicked(true);
      }
  };

  const renderQueue = clicked || exiting;

  return (
    <header className='sticky top-0 z-10 min-w-[300px] relative p-6 h-[60px] md:h-[80px] lg:h-[90px] shadow bg-zinc-800 flex items-center justify-between'>
        <h1 className='pointer-events-none text-amber-100 select-none hover:scale-10 text-lg sm:text-xl md:text-2xl lg:text-3xl'>Pep<span className='font-bold'>MOVIES</span></h1>
        <div className='flex items-center justify-between'>
          <i onClick={handleClick} className="cursor-pointer relative hover:text-amber-200 text-amber-100 fa-solid fa-bars text-lg sm:text-xl md:text-2xl lg:text-3xl p-1 lg:p-6">
          {queueItems.length>0 &&  (
                <div className='absolute aspect-square opacity-70 sm:h-5 pointer-events-none h-4 grid place-items-center bg-amber-100 text-zinc-800 rounded-full top-6 right-5 -translate-y-1/2 translate-x-1/2'>
                    <p className='text-xs'>{queueItems.length}</p>
                </div>
            )}
          </i>
        </div>
        {renderQueue && (<Queue setQueueItems={setQueueItems} exiting={exiting} handleClick={handleClick} queueItems={queueItems} />)}
    </header>
  )
}
