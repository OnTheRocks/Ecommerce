import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin; 
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.state);
  const [city, setCity] = useState(shippingAddress.city);
  const [state, setState] = useState(shippingAddress.state);
  const [zip, setZip] = useState(shippingAddress.zip);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({fullName, address, city, state, zip, country})
    );
    props.history.push('/payment');
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
          <label htmlFor="state">State</label>
          <input 
            type="text" 
            id="city" 
            placeholder="Enter State" 
            value={state} onChange={(e) => setState(e.target.value)} 
            required>
          </input>
        </div>
        <div>
          <label htmlFor="zip">Zip Code</label>
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
