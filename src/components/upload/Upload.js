import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Upload.css'
export default class Upload extends Component {
    render(){
        return (
            <div>
            <div className="App">
            <div className="App-header">
            <Link to='/'><h2 className="Header-title">allTube</h2></Link>
            <button className='signup'> Sign in or Sign up </button>
            <a href={'http://localhost:3535/auth/logout'}><button className='logout'> Logout </button> </a>
            </div>


                Upload
          </div>
        </div>
   

        )
    }
}