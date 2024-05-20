import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import "./CSS/types.css";
import "./CSS/nav.css";
import "./CSS/search.css";
import "./CSS/details.css"
import "./CSS/detailsTypes.css"
import { BrowserRouter } from 'react-router-dom';
import Home from "./Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
);
