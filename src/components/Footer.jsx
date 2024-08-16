import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-amber-100 h-[60px] sm:h-[100px] items-center flex justify-between p-4 shadow'>
        <h3 className='text-xs sm:text-sm md:text-base text-zinc-700 cursor-pointer'>CREATED BY <span className='text-zinc-600 text-xs sm:text-sm md:text-lg font-bold'>MUHAMMAD WASIF SHAKEEL</span> - DATA SCIENTIST</h3>
        <div className='text-zinc-700 md:text-2xl flex items-center justify-center gap-2 sm:gap-4 md:gap-8'>
          <a className='flex items-center justify-center' href="https://www.instagram.com/mwasifshakeel/" target='_blank'><i className='fa-brands fa-instagram hover:text-teal-600'></i></a>
          <a className='flex items-center justify-center' href="https://www.linkedin.com/in/muhammad-wasif-shakeel-067111292/" target='_blank'><i className='fa-brands fa-linkedin hover:text-teal-600'></i></a>
          <a className='flex items-center justify-center' href="https://www.facebook.com/muhammadwasif.shakeel.75/" target='_blank'><i className='fa-brands fa-facebook hover:text-teal-600'></i></a>
        </div>
    </footer>
  )
}
