import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import NotFound from './pages/NotFoundPage';

import Cart from './pages/CartPage';
import SingleProduct from './pages/SingleProductPage';
import Products from './pages/ProductsPage';

import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/products/:id' component={SingleProduct} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
