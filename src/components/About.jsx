import React from 'react'

const About = () => {

    const smallScreenPadding = {
        paddingTop: "16rem", // Adjust this value to your desired padding
      };
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white ' style={window.innerWidth <= 768 ? smallScreenPadding : null}>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl'>
                 I’ve been working as a Front-end Web developer for around 2 years. I have experience and skills in JavaScript, ReactJs, Redux, HTML, CSS, Strapi, NextJs and Tailwind. I’ve worked on large development projects that have sharpened my technical skills, improved my communication and made me understand what it takes to meet tight deadlines with excellence.
            </p>

            <br />


        </div>
    </div>
  )
}

export default About