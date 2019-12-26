import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Statleselement from './components/componet_type';
const API_KEY = 'AIzaSyDO1p9-UXQamSs5FyxEfg3Riwbhet8Yc5U';
import Header from './components/header_comp';
import Props from './components/header_comp';
import Faculty from './components/Classes';
import SpreadOpertator from './components/spread_rest_operators';
import  './components/style.css';
//const App = function(){
//// for multiline code we used () with return
//
//    return (
//            <div>
//                   <SearchBar/>
//            </div>
//         );
//}
/*
class App extends React.Component{

    render(){
         return (
         <div>
         <h3>sdfsdfdsfsdd</h3>
         </div>
         )
    }
}

ReactDOM.render(<App />, document.getElementById('like_button_container'))*/
// Change states during execution of code

//'use strict';
//
//const e = React.createElement;
//
//class LikeButton extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = { liked: false };
//  }
//
//  render() {
//    if (this.state.liked) {
//      return 'You liked this.';
//    }
//
//    return e(
//      'button',
//      { onClick: () => this.setState({ liked: true }) },
//      'Like'
//    );
//  }
//}
//
//const domContainer = document.querySelector('#like_button_container');
//ReactDOM.render(e(LikeButton), domContainer);
//
////ReactDOM.render(Props, document.getElementById('head'))
//
//function formatename(user)
//{   if(user)
//    {
//        return user.firstname  + ' ' + user.lastname
//    }
//   return 'we not find user '
//}
//
//const user = {
//
//    firstname:' asif',
//    lastname : 'bsit'
//
//};
//
//const element = (
//    <h1>
//        {formatename(user)}
//    </h1>);
//
//ReactDOM.render(element, document.getElementById('like_button_container'))

// display local time with second
/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('like_button_container'));
}

setInterval(tick, 1000);*/
/*

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('like_button_container')
);*/

/*

function Welcome(props)
{
    return <h1>{props.name}</h1>
}

function Display()
{
    return(
        <div>
            <h1> <Welcome name="asif" /></h1>
            <h1> <Welcome name="abc" /></h1>
            <h1> <Welcome name="def" /></h1>
         </div>
    );

}

ReactDOM.render(<Display />, document.getElementById('like_button_container'))

*/

/*function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);*/
/*

class Clock extends React.Component{
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
    render(){
        return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );

    }
    componentDidMount()
    {
    this.timerID = setInterval(
        () => this.tick()
    )
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID)

    }

    tick(){
        this.setState({
        date:new Date()
        })
    }


}

ReactDOM.render(<Clock/>, document.getElementById('like_button_container'))*/

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick} className="buttton">
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('like_button_container')
);