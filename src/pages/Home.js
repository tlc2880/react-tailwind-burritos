import React from 'react'

function Home() {
  return (
    <div className='text-white w-full h-screenwidescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row'>
      <section id="hero" class="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row">
        <article class="sm:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">We Have Burritos <span class="text-indigo-700 dark:text-indigo-300">Super Tasty Seasoned Beef</span>, 
            rice, and other fillings of choice...</h2>
          <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-900 dark:text-white">These burritos are a freshly made with recently picked ingredients from our personalized farms...</p>
          <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">We Can Do Burritos.</p>
        </article>
        <img class="w-1/2" src="./img/chimichanga-burrito.jpg" alt="Chimichanga"/>
      </section>
    </div>
  )
}

export default Home
