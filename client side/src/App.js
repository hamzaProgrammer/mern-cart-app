import React , { useState } from 'react'
import './App.css';
import Home from './pages/home/Home'
import ProductLists from './pages/productLists/ProductLists'
import SingleProd from './pages/singleProd/SingleProduct'
import Register from './pages/signup/SignUp'
import SignIn from './pages/signin/SignIn'
import Cart from './pages/cart/Cart'
import { Switch , Route } from 'react-router-dom'
import Pay from './pages/Pay'
import Success from './pages/Success'
import { useSelector } from 'react-redux'
import AdminHome from './dashboard/pages/home/Home'

function App() {
  //const regUser = useSelector(state => state.user.currentUser)
  const regUser = true;
  return (
    <>
        <Switch>
          <Route exact path="/" >
            { regUser ? <Home/> : <Register/>}
          </Route>
          <Route exact path = "/products/:category" >
          { regUser ? <ProductLists/> : <Register />}
          </Route>
          <Route exact path="/product/:id" >
          { regUser ? <SingleProd/> :<Register />}
          </Route>
          <Route path="/cart" >
          { regUser ? <Cart/> :<Register />}
          </Route>
          <Route path="/register" >
            { regUser ? <Home/> : <Register/>}
            <Register />
          </Route>
          <Route path="/signin" >
          { regUser ? <Home/> : <SignIn /> }
          </Route>
          <Route path='/payment' component={Pay} />
          <Route path='/success' component={Success} />
          <Route path='/admin' component={AdminHome} />
        </Switch>
    </>
  );
}

export default App;
