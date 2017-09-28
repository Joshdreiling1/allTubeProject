import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render(){
        return (
            <div>
            <div className="App">
            <div className="App-header">
            <Link to='/'><h2 className="Header-title">allTube</h2></Link>
            </div>


                Login/Signup
          </div>
        </div>
        )
    }
}