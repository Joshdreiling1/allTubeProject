import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import uploadlogo from '../../assets/uploadlogo.png'
import searchlogo from '../../assets/searchlogo.png'
import snapchatlogo from '../../assets/snapchatlogo.png'
import githublogo from '../../assets/25231.png'

export default class Home extends Component {
    
    render(){
        return (
            <div className="App">
                <div className="App-header">
                    <Link to='/'><h2 className="Header-title">AllTheVideos</h2></Link>
                    <a className='auth0' href={process.env.REACT_APP_LOGIN }>
                     <button className='signup buttontheme'> Sign in or Sign up </button> </a>
                    <a href={process.env.REACT_APP_LOGOUT}><button className='logout buttontheme'> Logout </button> </a>
                     <h2 className='motto'> The only way </h2>
                        <div className='navbar'>
                            <Link to ='/upload'><ul className='listfont'> Upload </ul></Link>
                            <Link to ='/search'><ul className='listfont'> Search </ul></Link>
                           <Link to ='/Searchhistory'> <ul className='listfont'> View Search History </ul></Link>
                           <Link to='/myvideos'> <ul className='listfont'> My Videos </ul></Link>
                        </div>
                </div>
                <div>
                    <div className='upload'>
                        <h2> Upload </h2>
                        <Link to='/upload'>  <img className='uploadlogo' src= {uploadlogo} alt='' /></Link>
                    </div>
                    <div className='searchbox'>
                    <h2> Search </h2>
                    <Link to= '/search'>
                     <img className='searchlogo' src={searchlogo} alt=''/>
                    </Link>
                    </div>
                </div>
                <div className='footer'>
                   <Link to='/about'><ul className='listfont'> About this Website </ul></Link>
                   <Link to='/terms'><ul className='listfont'> Terms of Service </ul></Link>
                   <ul> Hit me up on:</ul>
               <a href='https://www.snapchat.com/add/joshdreiling7'> <img className='socialmedia'src={snapchatlogo} alt=''/> </a> <a href='https://github.com/Joshdreiling1'><img className='socialmedia'src={githublogo} alt=''/> </a>

                    </div>
            </div>
        )
    }
}