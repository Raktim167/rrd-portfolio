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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cupiditate. Sint magni ad ratione distinctio quaerat doloremque enim magnam reprehenderit maxime? Quaerat autem sint possimus doloremque aliquam accusantium, asperiores neque! Dolor quasi reprehenderit obcaecati ipsa maiores? Vero, velit voluptates beatae quis assumenda voluptas ipsum quasi ipsam debitis corrupti facere? Saepe!
            </p>

        </div>
    </div>
  )
}

export default About