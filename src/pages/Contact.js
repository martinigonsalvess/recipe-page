import React, {Component} from 'react';
import Navbar from './NavBar';

class Contact extends Component {
    render() {
        return (
         <div className="contact-page">
         <Navbar />
             <p>
            This is contact page
             </p>
         </div>
        );
      }
    }

    export default Contact