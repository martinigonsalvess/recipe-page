import React, {Component} from 'react';
import './StylePage.css';
import Navbar from './NavBar';

function Home() {
    
        return (
          
         <div className="home-page">    
         <Navbar />     
             <p>
              Home page
             </p>
             <img src="/img/front-page-bg.jpg"/>
         </div>
        );
      
    }

    export default Home