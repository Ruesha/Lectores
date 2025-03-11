import React from 'react'
import HeaderTwo from '../Static/HeaderTwo'
import booksBg from "../assets/images/books.avif";

const Writerhome = () => {
  return (
    <div style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${booksBg})`,
          }}>
        <HeaderTwo />
 <div>
my works 
add new book 
+ opensa a textbox modal to add new book
 </div>
    </div>
  )
}

export default Writerhome
