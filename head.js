import React from 'react';
import './mystyle.css';
import ponty from './logop.jpg';

function welcome(){
    return( <div class="abhi">
        <img src={ponty} alt="kuchh to hai!"/>
        <h2>This is <i><b>Abhishek</b></i></h2>
    </div>);
}

export default welcome;