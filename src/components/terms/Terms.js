import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Terms.css'
import snapchatlogo from '../../assets/snapchatlogo.png'
import githublogo from '../../assets/25231.png'

export default class Terms extends Component {
    
    render(){
        return (
            <div className="App">
                <div className="App-header">
                    <Link to='/'><h2 className="Header-title">allTube</h2></Link>
                    <a className='auth0' href={'http://localhost:3535/auth' }>
                     <button className='signup buttontheme'> Sign in or Sign up </button> </a>
                    <a href={'http://localhost:3535/auth/logout'}><button className='logout buttontheme'> Logout </button> </a>
                     <h2 className='motto'> The only way </h2>
                <div>
                    <h1> There are no terms, why? Well idk i havent come up with anything yet so yeah  </h1>
                    </div>
                <div className='footer'>
                <Link to='/about'><ul className='listfont'> About this Website </ul></Link>
                <Link to='/terms'><ul className='listfont'> Terms of Service </ul></Link>
                   <ul> Hit me up on:</ul>
               <a href='https://www.snapchat.com/add/joshdreiling7'> <img className='socialmedia'src={snapchatlogo} alt=''/> </a> <a href='https://github.com/Joshdreiling1'><img className='socialmedia'src={githublogo} alt=''/> </a>

                    </div>
            </div>
            </div>
        )
    }
}