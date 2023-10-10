import React from 'react'
import image from '../assets/images/card_img.png';
import "./payment.css"
import { Link } from 'react-router-dom';

export const Payment = () => {

  const checkOut =()=>{
    alert('Payment done Successfully')
  }

  return (
    <>
    <div class="paymentcontainer">

    <form action="">

        <div class="paymentrow">

            <div class="paymentcol">

                <h3 class="paymenttitle">billing address</h3>

                <div class="paymentinputBox">
                    <span>full name :</span>
                    <input required type="text" placeholder="john deo" />
                </div>
                <div class="paymentinputBox">
                    <span>email :</span>
                    <input required type="email" placeholder="example@example.com"/>
                </div>
                <div class="paymentinputBox">
                    <span>address :</span>
                    <input required type="text" placeholder="room - street - locality"/>
                </div>
                <div class="paymentinputBox">
                    <span>city :</span>
                    <input required type="text" placeholder="mumbai"/>
                </div>

                <div class="paymentflex">
                    <div class="paymentinputBox">
                        <span>state :</span>
                        <input required type="text" placeholder="india"/>
                    </div>
                    <div class="paymentinputBox">
                        <span>zip code :</span>
                        <input required type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div>

            <div class="paymentcol">

                <h3 class="paymenttitle">payment</h3>

                <div class="paymentinputBox">
                    <span>cards accepted :</span>
                    <img src={image} alt=""/>
                </div>
                <div class="paymentinputBox">
                    <span>name on card :</span>
                    <input required type="text" placeholder="mr. john deo"/>
                </div>
                <div class="paymentinputBox">
                    <span>credit card number :</span>
                    <input required type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div class="paymentinputBox">
                    <span>exp month :</span>
                    <input required type="text" placeholder="january"/>
                </div>

                <div class="paymentflex">
                    <div class="paymentinputBox">
                        <span>exp year :</span>
                        <input required  type="number" placeholder="2022"/>
                    </div>
                    <div class="paymentinputBox">
                        <span>CVV :</span>
                        <input required type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>
        <input type="submit" value="PAY" class="button" onClick={checkOut}/> &nbsp;&nbsp;
      
        <Link to="/login" class="button" style={{textDecoration:"none", textAlign:"center"}}>Back to Login</Link>

    </form>

</div>  
</>  
  )
}
