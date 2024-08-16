import React from 'react';

export default function Queue(props) {
  const { handleClick, queueItems, setQueueItems, exiting } = props;

    const clearState = () =>{
        setQueueItems([]);
    }

  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-50'>
      <div className='bg-transparent backdrop-blur-[1px] absolute inset-0'></div>
      <div className={`flex flex-col bg-zinc-800 absolute text-amber-100 right-0 top-0 h-screen w-screen sm:w-96 shadow max-w-screen gap-4 p-6 md:gap-9 ${exiting ? 'queueTransitionExit' : 'queueTransition'}`}>
        <div className='flex items-center justify-between text-base sm:text-lg md:text-2xl'>
          <h1 className='select-none'>Queue</h1>
          <i onClick={handleClick} className='px-3 cursor-pointer fa-solid fa-xmark hover:text-amber-200'></i>
        </div>
        {queueItems.length==0 && (<p className='text-center select-none'>Empty...</p>)}
        {queueItems.map((item, itemIndex) => (
          <div className='text-white' key={itemIndex} index={itemIndex}>
            <h2>{itemIndex + 1}. {item.title}</h2>
          </div>
        ))}
        <div className='flex items-center justify-center'>
            <button onClick={clearState} className='bg-zinc-700 hover:bg-zinc-900 rounded-2xl px-4 py-2' >Clear Queue</button>
        </div>
      </div>
    </div>
  );
}