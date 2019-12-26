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
import Contacts from './components/contacts'
import Person from './components/propsandstats'

import './components/App.css';
import './components/App.css';

// src/App.js



class App extends Component {

    state = {
        persons : [
            {name :'asif', age :29},
            {name :'assssif', age :49}

        ]
    };

    switchToName = () => {
        console.log('click on button');

    }
    render() {
        return (
           <div className="App">
                <h4>hello this is button to switch to the name <button onClick={this.switchToName}>swirtch on name</button></h4>
               <p> hello this is dynamic state changeing <Person name={this.state.persons[0].name} age={this.state.persons[0].age} /></p>
               <p> <Person name={this.state.persons[1].name} age={this.state.persons[1].age} /></p>
           </div>
        )
      }
  }



ReactDOM.render(<App />, document.getElementById('like_button_container'))