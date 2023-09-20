import React from 'react';
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import react from "../assests/react.png";
import nextjs from "../assests/nextjs.png";
import tailwind from "../assests/tailwind.png";
import github from "../assests/github.png";
import strapi from "../assests/strapi.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-cyan-500",
        },
        {
            id: 5,
            src: nextjs,
            title: "NextJs",
            style: "shadow-green-500",
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind CSS",
            style: "shadow-sky-500",
        },
        {
            id: 7,
            src: github,
            title: "GitHub",
            style: "shadow-gray-500",
        },
        {
            id: 8,
            src: strapi,
            title: "Strapi",
            style: "shadow-red-500",
        },
    ];

  return (
    <div name='experience' className='bg-gradient-to-b from-black to-gray-700 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-3'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Experience
                </p>
                <p className='py-6'>
                    These are the technologies i have worked on
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                
                {techs.map(({id, src, title, style})=> (
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
                
                
            </div>
        </div>
    </div>
  )
}

export default Experience