import React from 'react';


//
//class Header extends Component{
//    render(){
//        return(
//        <div className="header">
//            Hello this is header class
//        </div>
//
//
//        )
//    }

function Header (props){
    return (
        <div className="header">
           <h1>You name is: {props.name} </h1>
           <h1>You age is: {props.age}</h1>
        </div>
    );

}
var Props = (
        <div>
             <Header name="asif2"  age="30"/>
             <Header name="asif"  age="29"/>
              <Header name="Johns"  age="40"/>
        </div>
);

export default Props;