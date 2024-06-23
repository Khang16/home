import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/header.scss'
import './css/slide.scss'
import './css/content.scss'
import './css/main.scss'
import './css/All_product.scss'
import './css/productID.scss'
import './css/catory.scss'
import './css/cart.scss'


import './reponsive-css/contentReponsive.scss'
import './reponsive-css/CatorysildeReponsive.scss'
import './reponsive-css/AllproductReponsive.scss'
import './reponsive-css/slideCoponent.scss'
import './reponsive-css/headerCoponent.scss'
import './reponsive-css/productIDReponsive.scss'
import './reponsive-css/cartReponsive.scss'
import './reponsive-css/catoryReponsive.scss'
import {RouterProvider} from 'react-router-dom'
import router from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>

);


