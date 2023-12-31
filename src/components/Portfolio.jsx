import React from 'react';
import arrayDestruct from '../assests/portfolio/arrayDestruct.jpg';
import installNode from '../assests/portfolio/installNode.jpg';
import navbar from '../assests/portfolio/navbar.jpg';
import reactParallax from '../assests/portfolio/reactParallax.jpg';
import reactSmooth from '../assests/portfolio/reactSmooth.jpg';
import reactWeather from '../assests/portfolio/reactWeather.jpg';

const Portfolio = () => {

    const portfolios1 = [
        {
            id: 1,
            src: arrayDestruct,
            hello1: "hello"
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        },
    ];

    const smallScreenPadding = {
        paddingTop: "8rem", // Adjust this value to your desired padding
      };

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-screen' style={window.innerWidth <= 768 ? smallScreenPadding : null}>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Checkout some of my works right here
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {portfolios1.map(({id, src})=>(
                    <div key={id} className=' cursor-pointer shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                Demo 
                            </button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                Code
                            </button>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    </div>
  )
}

export default Portfolio