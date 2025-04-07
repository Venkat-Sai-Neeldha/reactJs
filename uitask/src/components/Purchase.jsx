import React from 'react'
import './Purchase.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Purchase() {
  return (
    
    <div className="contain">
        <div className="imgs">
            <div className="pics">
                <img src="https://www.fnp.com//images/pr/s/v20240827183836/angelic-rose-bouquet-n-black-forest-birthday-bliss_1.jpg" alt="aa" />
            </div>

            <div className="pics">
            <img src="https://www.fnp.com//images/pr/s/v20240827183837/angelic-rose-bouquet-n-black-forest-birthday-bliss_2.jpg" alt="aa" />
            </div>

            <div className="pics">
            <img src="https://www.fnp.com//images/pr/s/v20240827183836/angelic-rose-bouquet-n-black-forest-birthday-bliss_3.jpg" alt="aa" />
            </div>
            
            <div className="pics">
            <img src="https://www.fnp.com//images/pr/s/v20240827183837/angelic-rose-bouquet-n-black-forest-birthday-bliss_4.jpg" alt="aa" />
            </div>

            <div className="pics">
            <img src="https://www.fnp.com//images/pr/s/v20240618162103/angelic-rose-bouquet-n-black-forest-birthday-bliss_5.jpg" alt="aa" />
            </div>
        </div>
        <div className="photo">
            <img src="https://m-i1.fnp.com/images/pr/l/v20240827183836/angelic-rose-bouquet-n-black-forest-birthday-bliss_1.jpg" alt="aa" />
        </div>
        <div className="details">
          <h2>Angelic Rose Bouquet & Black Forest Birthday Bliss</h2>
          <p> ₹ 799 <s>₹ 1099</s> <span id='span'>6% Off</span></p>
          <div id='rating'>
            <span id='abcd'> 
              <span id='span'>*</span>
            <span>5</span></span>
           
            <span id='a'>225 reviews</span>
          </div>
          <p> Gift reciver's location</p>
          <div className="mobile">
            
          <InputGroup className="mb-3">
        <select>
          <option value="">IND</option>
        </select>
        <Form.Control aria-label="" placeholder='enter recievers location,pincode, area....' id='inp'/>
      </InputGroup>
          </div>
          <div id='date'>
            <p>Select Delivery Date & Time Slot</p>
            <div id='date1'>
              <img src="https://static.vecteezy.com/system/resources/previews/007/683/528/non_2x/calendar-calendar-icon-calendar-icon-simple-sign-calendar-symbol-free-vector.jpg" alt='aa'/>
              <div>
              
              </div>
            </div>
          </div>
      
            <p>offers available</p>
            <div className="paytm">
              <img src="https://i1.fnp.com/assets/images/custom/pdp-offer-img/Paytm-Latest-UPI-Logo.svg" alt="aa" />
                <span>Assured Cashback up to Rs.100 using Paytm UPI</span>
            </div>
            <br />
            <br /><br />
            <div className="twobox">
            <div className="one">
            <img src="https://www.fnp.com/icons/cart-olive-green.svg" alt="aa"/>
             <span> Add to cart</span>
             </div>
            <div className="two">
              <img src="https://www.fnp.com/icons/cart-buy-now.svg" alt="aa" />
              <span>Buy Now</span>
              </div>
          </div>
          </div>
          
        </div>
    
  )
}

export default Purchase