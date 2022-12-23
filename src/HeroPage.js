import React from 'react'

function HeroPage() {
  return (
  <div className='bg-b2'>
  {/* Hero section big img */}
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1619418602850-35ad20aa1700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Find the perfect helper for Translations</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary"><a href='/HomePage'>Get Started</a></button>
      </div>
    </div>
  </div>

 {/* LANDING HERO SECTION */}
  {/* Documents hero  */}
  <div className="dark:bg-gray-900">
    <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
      <div className="z-30 relative lg:w-1/2">
        <div className="hidden dark:bg-gray-800 bg-y2 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
          {/* IMG */}
          <div className="w-full lg:w-auto lg:-mr-32">
            <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 px-6 py-14" />
          </div>
        </div>
        <div className="absolute top-0 dark:bg-gray-800 bg-y2 md:h-96 w-full hidden md:block lg:hidden"></div>
        <div className="w-full h-full lg:hidden bg-y2">
          <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
        </div>
      </div>
      <div className="bg-y2 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
        {/* Text & Button */}
        <div>
          <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">Documents</h1>
          <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture,decorations, plants, etc.</p>
          <button className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 flex items-center bg-b2">
            Explore
            <div className="ml-2 mt-0.5">
              <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Calls Hero  */}
  <div className="dark:bg-gray-900">
    <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
      <div className="z-30 relative lg:w-1/2">
        <div className="hidden dark:bg-gray-800 bg-y2 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
          {/* IMG */}
          <div className="w-full lg:w-auto lg:-mr-32">
            <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 px-6 py-14" />
          </div>
        </div>
        <div className="absolute top-0 dark:bg-gray-800 bg-y2 md:h-96 w-full hidden md:block lg:hidden"></div>
        <div className="w-full h-full lg:hidden bg-y2">
          <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
        </div>
      </div>
      <div className="bg-y2 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
        {/* Text & Button */}
        <div>
          <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">Calls</h1>
          <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture,decorations, plants, etc.</p>
          <button className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 flex items-center bg-b2">
            Explore
            <div className="ml-2 mt-0.5">
              <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Translations Hero  */}
  <div className="dark:bg-gray-900">
    <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
      <div className="z-30 relative lg:w-1/2">
        <div className="hidden dark:bg-gray-800 bg-y2 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
          {/* IMG */}
          <div className="w-full lg:w-auto lg:-mr-32">
            <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 px-6 py-14" />
          </div>
        </div>
        <div className="absolute top-0 dark:bg-gray-800 bg-y2 md:h-96 w-full hidden md:block lg:hidden"></div>
        <div className="w-full h-full lg:hidden bg-y2">
          <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
        </div>
      </div>
      <div className="bg-y2 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
        {/* Text & Button */}
        <div>
          <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">Translations</h1>
          <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture,decorations, plants, etc.</p>
          <button className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 flex items-center bg-b2">
            Explore
            <div className="ml-2 mt-0.5">
              <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33325 8H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 10.6667L12.6667 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 5.33301L12.6667 7.99967" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  
</div>


  
  )
}

export default HeroPage