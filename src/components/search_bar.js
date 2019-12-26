import React, {Component} from 'react'

// function base components

//const SearchBar = () => {
//
//    return <input />;
//
//}
// class base components

class SearchBar extends Component{
    constructor (props)
    {
    super (props);
    this.state =   { term : ''}

    }

    render()
        {
        return (
                <div>
                <input onChange={event => this.setState({term:event.target.value})}/>


               </div>
        )
        }

//    oninputChange(event){
//
//     console.log(event.target.value)
//    }
}

export default SearchBar;