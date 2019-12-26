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




// src/App.js



    class App extends Component {
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }
     state = {
        contacts: []
      }

    render() {
        return (
          <Contacts contacts={this.state.contacts} />
        )
      }
    }



ReactDOM.render(<App />, document.getElementById('like_button_container'))