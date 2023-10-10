import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"
import image from "../../assets/images/woman.png"

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
            <img src={image} alt='' className='image-preview' /> 
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <div className='image'>
                  <Link to='/account'>
                    <div className='img'>
                    <img src={image} alt='' className='image-preview' />
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>Sarah Xavier</h4>
                    <label htmlFor=''>Los Angeles,CA</label>
                  </div>
                </div>
                <Link to='/login'>
                  <Link to = "/account"className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </Link>
                </Link>
                <Link to='/order' className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </Link>
                <Link to='/category' className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </Link>
                <Link to='/help' className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </Link>
                <button className='box' onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}