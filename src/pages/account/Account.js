import React from "react"
import image from "../../assets/images/woman.png"
import "./account.css"
import { Link } from "react-router-dom"

export const Account = () => {

    const updateClick=()=>{
        alert('Updated successfully')
    }
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
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
              <label>Password * </label>
              <input type='text' required />
              <button className='button'onClick={updateClick}>Update</button>&nbsp;&nbsp;
              <Link to="/" className='button' style={{textDecoration:"none"}}>Back</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}