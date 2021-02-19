import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddressScreen() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch save shipping address action
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping address</h1> 
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            placeholder="Enter Full Name" 
            value={fullName} onChange={(e) => setFullName(e.target.value)} 
            required>
          </input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            placeholder="Enter Address" 
            value={address} onChange={(e) => setAddress(e.target.value)} 
            required>
          </input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            id="city" 
            placeholder="Enter City" 
            value={city} onChange={(e) => setCity(e.target.value)} 
            required>
          </input>
        </div>
        <div>
          <label htmlFor="zip">Zipe Code</label>
          <input 
            type="text" 
            id="Zip" 
            placeholder="Enter Zip Code" 
            value={zip} onChange={(e) => setZip(e.target.value)} 
            required>
          </input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input 
            type="text" 
            id="country" 
            placeholder="Enter Country" 
            value={country} onChange={(e) => setCountry(e.target.value)} 
            required>
          </input>
        </div>
        <div>
          <label/>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
