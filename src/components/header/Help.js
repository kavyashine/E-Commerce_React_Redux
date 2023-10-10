import React from "react"
import image from "../../assets/images/input.png"

import { Link } from "react-router-dom"

export const Help = () => {

    const updateClick=()=>{
        alert('Will Contact you Soon')
    }
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Contact Information</h1><br></br>
          <h4 style={{color:"red"}}>Update your details below, we will contact you soon for the help</h4>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src={image} alt='imgs' />
                <img src={image} alt='' className='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label>Username</label>
              <input type='text' required />
              <label>Email</label>
              <input type='text' required />
              <label>Contact No * </label>
              <input type='text' required />
              <button className='button'onClick={updateClick} style={{backgroundColor:"coral" ,fontSize:"18px"}}>Help</button>&nbsp;&nbsp;
              <Link to="/" className='button' style={{textDecoration:"none",backgroundColor:"coral",fontSize:"18px"}}>Back</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}