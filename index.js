import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

 const Employe=(props)=>{
 return (
 <div>
     <h1>hii Guys </h1>
 <h2>My Name is {props.Name}</h2>
</div>
    
 )
}

class Student extends React.Component{
    render(){
    return <h2>my Name is {this.props.Name}</h2>
    }
}
Employe.propTypes={
    Name:PropTypes.string,
    }


const Avtar=()=>{
    return <div>
        <Employe Name={23456}/>
        <Student Name2="Abhishek"/>

    </div>
}
ReactDOM.render(< Avtar/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workcleaers: https://bit.ly/CRA-PWA
 // serviceWorker.unregister();
