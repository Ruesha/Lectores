import React from 'react'
import Footer from '../Static/Footer'
import Header from '../Static/Header'

const About = () => {
  return (
    <div className='h-screen'
    style={{
      backgroundImage: "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(/src/assets/images/books.avif)"
    }}>
        <Header />
       <div>
        <h1 className='text-[40px] font-bold text-center text-gray-700'> About Us</h1>
        <p className='text-[20px] text-gray-600 w-[80%] mx-auto mb-[70x] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ab. Autem odit eligendi dicta maiores officia nisi, vero quae placeat ratione magni id? Ad quam vero consequuntur hic perspiciatis fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, velit. Totam qui sapiente obcaecati consequatur, sed at repudiandae ad deleniti aperiam! Consequuntur dolore ea enim quasi cum repellendus, error necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo vitae molestiae iure possimus facere dicta facilis, asperiores, laborum quaerat nam non ad quidem rerum! Excepturi, unde ab? Unde, repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque molestias veniam, quod alias error, sunt tenetur aliquid nostrum, quos magni natus rem omnis quia vitae dolore quae voluptates minima fugiat.</p>
       </div>
      <Footer />
    </div>
  )
}

export default About
