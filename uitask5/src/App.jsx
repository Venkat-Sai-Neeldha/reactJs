import { useState } from 'react';
import './App.css'

function App() {
const [formData, setFormData] = useState({
  fname: '',
  lname: '',
  dob: '',
  gender: '',
  email: '',
  password: '',
  confirm: '',
  security: '',
  answer: '',
  address: '',
  city: '',
  state: '',
  zipccode: '',
  phone: '',
});
const handlechange = (e) => {
  const {name, value} = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
    
  }));
};
const handlesubmit = (e) => {
  e.preventDefault();
   const fnameRegex = /^[a-zA-Z]+$/;
  if (!fnameRegex.test(formData.fname)) {
    alert("Please enter a valid first name");
    return;
  }

    const lnameRegex = /^[a-zA-Z]+$/;
  if (!lnameRegex.test(formData.lname)) {
    alert("Please enter a valid last name");
    return;
  }

  const passwordRegex = /^(?=.*\d).{8,}$/;
  if (!passwordRegex.test(formData.password)) {
    alert("Please enter a valid password");
    return;
  }

  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(formData.phone)) {
    alert("Please enter a valid mobile number");
    return;
  }
  const zipcodeRegex=/^\d{6}$/
  if(!zipcodeRegex.test(formData.zipccode)){
    alert("Please enter a valid zip code");
    return;
  }
  if (formData.password !== formData.confirm) {
    alert("Passwords do not match");
    return;
  }
  alert("Form submitted successfully");
  console.log(formData);
  setFormData({
    fname: '',
    lname: '',
    dob: '',
    gender: '',
    email: '',
    password: '',
    confirm: '',
    security: '',
    answer: '',
    address: '',
    city: '',
    state: '',
    zipccode: '',
    phone: '',
  });
};

  return (
    <div className="outer">
      <div className='container'>
      <fieldset id='personalinfo'>
        <legend><b>Personal information:</b></legend>
        <div>
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" value={formData.fname} onChange={handlechange} placeholder='first name'/>
        </div>
        <div>
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" value={formData.lname} onChange={handlechange} placeholder='last name'/>
        </div>
        <div>
          <label htmlFor="dob">Date of birth:</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handlechange}/>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" value={formData.gender} onChange={handlechange}>
            <option value="" disabled>choose a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </fieldset>
      <fieldset id='accountinfo'>
        <legend><b>Account information:</b></legend>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handlechange} placeholder='email address: your username'/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handlechange} placeholder=' at least 8 characters 1 number'/>
        </div>
        <div>
          <label htmlFor="confirm">Retype password:</label>
          <input type="password" id="confirm" name="confirm" value={formData.confirm} onChange={handlechange}/>
        </div>
        <div>
          <label htmlFor="security">Security Question:</label>
          <select name="security" id="security" value={formData.security} onChange={handlechange}>
            <option value="" disabled>choose a question</option>
            <option value="sport">what is your favourite sport</option>
            <option value="food">what is your favourite food</option>
            <option value="color">what is your favourite colour</option>
            <option value="animal">what is your favourite animal</option>
          </select>
        </div>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input type="text" id="answer" name="answer" value={formData.answer} onChange={handlechange} placeholder='answer secret question'/>
        </div>
      </fieldset>
      <fieldset id='contactinfo'>
        <legend><b>Contact information:</b></legend>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handlechange} placeholder='Eg:flat no, street name, area'/>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handlechange}/>
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <select name="state" id="state" value={formData.state} onChange={handlechange}>
            <option value="" disabled>choose a state</option>
            <option value="andhra_pradesh">Andhra Pradesh</option>
            <option value="tamil_nadu">Tamil Nadu</option>
            <option value="karnataka">Karnataka</option>
            <option value="telangana">Telangana</option>
            <option value="kerala">Kerala</option>
          </select>
        </div>
        <div>
          <label htmlFor="zipccode">Zip code:</label>
          <input type="tel" id="zipccode" name="zipccode" value={formData.zipccode} onChange={handlechange} maxLength={6} placeholder="enter a 6 digit zip code"/>
        </div>
        <div>
          <label htmlFor="phone">Phone number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handlechange} placeholder="enter a 10 digit mobile number" maxLength="10"/>
        </div>
      </fieldset>
      <img src="https://static.vecteezy.com/system/resources/previews/026/322/745/non_2x/modern-circle-green-check-mark-vector.jpg" alt="submit" onClick={handlesubmit}/>
    </div>
    <div className='heading'>
  
      <i>Registration Form</i>

    </div>
    </div>
    
  )
}

export default App


