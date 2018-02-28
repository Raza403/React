import React from "react";
import { render } from "react-dom";
import {BrowserRouter, Match, Miss} from 'react-router';


import './css/style.css';
import StorePicker from './components/StorePicker'
import App from './components/app';

const Root = () =>{
  return(
    <BrowserRouter>
      <Match exactly pattern="/" component={StorePicker} />
      <Match pattern="/store/:storeId" component={App} />
    </BrowserRouter>
  )
}
render (<Root/>, document.querySelector('#main'));
