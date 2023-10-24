import React from 'react'

function OurBurritos() {
  return (
    <div className='text-white flex justify-center items-center w-full h-screen'>
      <section id="burritos" class="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
        <h2 class="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Our Burritos
        </h2>
        <ul class="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
          <li class="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
            <img src="./img/california-burrito.jpg" alt="California" class="w-1/2 mb-6"/>
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">California Burrito</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$</p>
            <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Bean Burrito</p>
          </li>
          <li class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src="./img/poncho-burrito.jpg" alt="Poncho" class="w-1/2 mb-6"/>
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Poncho Burrito</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$</p>
            <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Chicken Burrito</p>
          </li>
          <li class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src="./img/wet-burrito.jpg" alt="Wet" class="w-1/2 mb-6"/>
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Wet Burrito</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$$</p>
            <p class="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Burrito Supreme</p>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default OurBurritos
