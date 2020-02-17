import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
//import { Fragment } from 'react';
//import PropTypes from 'prop-types';

//  const Employe=(props)=>{
//  return (
//  <div>
//      <h1>hii Guys </h1>
//  <h2>My Name is {props.Name}</h2>
// </div>
    
//  )
// }

// class Student extends React.Component{
//     render(){
//     return <Fragment>
//       <h1>Hi Guys</h1>
//      <h2>my Name is {this.props.Name}</h2>
//      </Fragment> 

//     }
// }
class Employe extends React.Component{

    constructor(props){
    super(props);
    this.state={
        Name:this.props.Name,
        count:this.props.count,
    }
    this.clickme=this.clickme.bind(this); 
}
clickme(){
    let count=this.state.count;
this.setState({count: ++count});
}

    render(){
    
    return( <>
    <h1>hi {this.state.Name}</h1>
    <h1>your Employe ID {this.props.Empid}</h1>
    <h1>Count:{this.state.count}</h1>
      <button onClick={this.clickme}>clickme</button>
    </>)
    }
}

ReactDOM.render(<Employe Name="Abhishek" Empid={12345} count={0}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workcleaers: https://bit.ly/CRA-PWA
 // serviceWorker.unregister();
