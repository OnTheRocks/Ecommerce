import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import ProductScreen from './Screens/ProductScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import SigninScreen from './Screens/SigninScreen';
import OrderScreen from './Screens/OrderScreen';
import OrderHistoryScreen from './Screens/OrderHistoryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './Screens/ProductListScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './Screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './Screens/SearchScreen';
import { listProductCategories } from './actions/productActions';

function App() {

  const cart = useSelector(state => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch(); 
  const signoutHandler = () => {
    dispatch(signout());
  };
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <button type="button" className="open-sidebar" onClick={() => setSidebarIsOpen(true)}>
          <i className="fa fa-bars"></i>
        </button>
        <Link className="brand" to="/">EStore</Link>
      </div>
      <div>
        <Route render={({ history }) => <SearchBox history={history}></SearchBox>}></Route>
      </div>
      <div>
        <Link to="/cart">Cart
        {cartItems.length > 0 && (
          <span className="badge">{cartItems.length}</span>
        )}
        </Link>
        {userInfo ? (
          <div className="dropdown">
            <Link to="#">{userInfo.name}{' '}<i className="fa fa-caret-down"></i></Link>
              <ul className="dropdown-content">
                <li>
                <Link to="/profile">User Profile</Link>
                </li>
                <li>
                  <Link to="/orderhistory">Order History</Link>
                </li>
                <li>
                <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}  
        {userInfo && userInfo.isSeller && (
          <div className="dropdown">
            <Link to="#admin">Seller {' '} <i className="fa fa-caret-down"></i></Link>
            <ul className="dropdown-content">
              <li><Link to="/productlist/seller">Products</Link></li>
              <li><Link to="/orderlist/seller">Orders</Link></li>
            </ul>
          </div>
          )}
        {userInfo && userInfo.isAdmin && (
          <div className="dropdown">
            <Link to="#admin">Admin {' '} <i className="fa fa-caret-down"></i></Link>
            <ul className="dropdown-content">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/productlist">Products</Link></li>
              <li><Link to="/orderlist">Orders</Link></li>
              <li><Link to="/userlist">Users</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
    <aside className={sidebarIsOpen ? 'open' : '' }>
      <ul className="categories">
        <li>
          <strong>Categories</strong>
          <button onClick={() => setSidebarIsOpen(false)} className="close-sidebar" type="button">
            <i class="fas fa-window-close"></i>
          </button>
        </li>
      </ul>
    </aside>
    <main>
      <Route path="/seller/:id" component={SellerScreen}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen} exact></Route>
      <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/payment" component={PaymentMethodScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>
      <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
      <Route path="/search/name/:name?" component={SearchScreen} exact></Route>
      <Route path="/search/category/:category" component={SearchScreen} exact></Route>
      <Route path="/search/category/:category/name/:name" component={SearchScreen} exact></Route>
      <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
      <AdminRoute path="/productList" component={ProductListScreen} exact></AdminRoute>
      <AdminRoute path="/orderList" component={OrderListScreen} exact></AdminRoute>
      <AdminRoute path="/userList" component={UserListScreen}></AdminRoute>
      <AdminRoute path="/user/:id/edit" component={UserEditScreen}></AdminRoute>
      <SellerRoute path="/productlist/seller" component={ProductListScreen}></SellerRoute>
      <SellerRoute path="/orderlist/seller" component={OrderListScreen}></SellerRoute>
      <Route path="/" component={HomeScreen} exact></Route>
    </main>
    <footer className="row center" >
      All Rights Reserved
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;