import React, {Component} from 'react'


class Person extends React.Component{

        render(){
        return(
        <div>
        {this.props.name}
        {this.props.age}

        </div>

        )

        }

}

export default Person