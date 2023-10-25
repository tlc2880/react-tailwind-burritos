import React from 'react'

function Reviews() {
  return (
    <section id="reviews" class="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
      <h2 class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Reviews
      </h2>
      <figure class="my-12">
        <blockquote class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p class="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
           I am surprised the reviews are not high for Great Burritos!!
            The establishment is very clean and I have always had good service. 
            Who doesn't love Great Burritos?!!
          </p>
        </blockquote>
        <figcaption class="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Kristi H.
        </figcaption>
      </figure>
      <figure class="my-12">
        <blockquote class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p class="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
            I haven't been to Great Burritos in a few years. 
            I saw they have a lot of new options and asked my server a lot of questions. 
            <span class="italic">  Yaya was the one helping me and she was so nice and patient.  </span>
            She helped me pick out what I want in my burrito. 
            I was really hungry and thought I was going to have to order double the meat but no! 
            She scooped me a generous portion! Even the person ringing me up, Melissa, was super cheerful. 
            I'm pretty happy with my burrito!</p>
        </blockquote>
        <figcaption class="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Julie T. &amp; BJ
        </figcaption>
      </figure>
      <figure class="my-12">
        <blockquote class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p class="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
            I love Great Burritos so much!&#8212; <span class="italic">I needed</span> &#8212; California Burrito for my lunch
            like 5 times a week! <q class="italic">It's fast, delicious, fresh, and nutritious!</q> So why not get it? 💯
          </p>
        </blockquote>
        <figcaption class="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Gentle C.
        </figcaption>
      </figure>
    </section>
  )
}

export default Reviews
