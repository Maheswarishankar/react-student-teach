import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Appprovider from './Context/Appprovider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Appprovider>
      <App/>
    </Appprovider>
  </Router>

);


